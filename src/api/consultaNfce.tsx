import { Alert } from 'react-native'
import { ItenProps, NfceProps } from '../types'

async function consultarNFCe(url: string) {
  const nfce: NfceProps = {
    itens: [],
    valorTotal: '',
    cnpj: '',
    cupom: '',
    data: '',
    estabelecimento: ''
  }

  try {
    const response = await fetch(`${url}`)

    if (!response.ok) {
      throw new Error('Erro na consulta')
    }

    const data = await response.text()

    let startNome = data.indexOf('<span class="txtTit">')
    let startCodigo = data.indexOf('(Código: ')
    let startQuantidade = data.indexOf('Qtde.:</strong>')
    let startValorUnit = data.indexOf('Vl. Unit.:</strong>')
    let startValorTotalItem = data.indexOf(
      'class="txtTit noWrap">Vl. Total<br><span class="valor">'
    )
    let startTotal = data.indexOf('<span class="totalNumb txtMax">')
    let startData = data.indexOf('<strong> Emissão: </strong>')
    let startEstabelecimento = data.indexOf('<div id="u20" class="txtTopo">')
    let startCnpj = data.indexOf('CNPJ:')
    let startCupom = data.indexOf('<span class="chave">')

    console.log(data)
    //DADOS DOS ITEMS
    while (startNome !== -1 && startCodigo !== -1) {
      const endOthers = data.indexOf('</span>', startNome)
      const endCodigo = data.indexOf(')', startCodigo)
      const endQuantidade = data.indexOf('</span>', startQuantidade)
      const endValorUnit = data.indexOf('</span>', startValorUnit)
      const endValorTotalItem = data.indexOf('</span>', startValorTotalItem)

      /////DADOS DA NOTA EM GERAL
      // Pegar valor total
      const endTotal = data.indexOf('</span>', startTotal)
      const endData = data.indexOf('- Via Consumidor', startData)
      const endEstabelecimento = data.indexOf('</div>', startEstabelecimento)
      const endCnpj = data.indexOf('</div>', startCnpj)
      const endCupom = data.indexOf('</span>', startCupom)

      //regex para tirar a data da nota
      if (startData !== -1 && endData !== -1) {
        const dataInput = data.substring(startData + '<strong> Emissão: </strong>'.length, endData)
        const regex = /(\d{2}\/\d{2}\/\d{4})/
        const dataNfce = dataInput.match(regex)

        if (dataNfce) {
          nfce.data = dataNfce[1]
        }
      }

      if (endOthers !== -1 && endCodigo !== -1) {
        // Extraindo o texto entre as tags
        const item: ItenProps = {
          Nome: data.substring(startNome + '<span class="txtTit">'.length, endOthers).trim(),

          // Extraindo apenas o valor do código com regex ou substring
          Codigo: data.substring(startCodigo + '(Código: '.length, endCodigo).trim(),
          Quantidade: data
            .substring(startQuantidade + 'Qtde.:</strong>'.length, endQuantidade)
            .trim(),
          ItemValorUnit: data
            .substring(startValorUnit + 'Vl. Unit.:</strong>'.length, endValorUnit)
            .trim(),
          ItemValorTotal: data.substring(
            startValorTotalItem + 'class="txtTit noWrap">Vl. Total<br><span class="valor">'.length,
            endValorTotalItem
          )
        }

        nfce.valorTotal = data
          .substring(startTotal + '<span class="totalNumb txtMax">'.length, endTotal)
          .trim()

        nfce.estabelecimento = data
          .substring(
            startEstabelecimento + '<div id="u20" class="txtTopo">'.length,
            endEstabelecimento
          )
          .trim()

        nfce.cnpj = data.substring(startCnpj + 'CNPJ:'.length, endCnpj).trim()

        nfce.cupom = data.substring(startCupom + '<span class="chave">'.length, endCupom).trim()

        nfce.itens?.push(item)
      }

      // Procurando a próxima ocorrência
      startNome = data.indexOf('<span class="txtTit">', endOthers)
      startCodigo = data.indexOf('(Código: ', endCodigo)
      startQuantidade = data.indexOf('Qtde.:</strong>', endQuantidade)
      startValorUnit = data.indexOf('Vl. Unit.:</strong>', endValorUnit)
      startValorTotalItem = data.indexOf(
        'class="txtTit noWrap">Vl. Total<br><span class="valor">',
        endValorTotalItem
      )
    }

    console.log('Detalhes da nota: ', nfce)
    return nfce
  } catch (error: any) {
    Alert.alert('Erro', error.message)
  }
}

export default consultarNFCe
