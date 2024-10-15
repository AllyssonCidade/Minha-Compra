export type ItenProps = {
  Nome?: string
  Codigo?: string
  Quantidade?: string
  ItemValorUnit?: string
  ItemValorTotal?: string
  Desconto?: string
}

export type NfceProps = {
  itens?: ItenProps[]
  estabelecimento?: string
  cupom?: string
  data?: string
  valorTotal?: string
  cnpj?: string
}
