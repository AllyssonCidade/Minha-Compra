// arquivo Home.js
import React, { useState } from 'react'
import { Text, TouchableOpacity, Alert } from 'react-native'
import Cam from '@/src/components/Cam'
import consultarNFCe from '@/src/api/consultaNfce'
import * as S from './styles'

function Home() {
  const [isCamActived, setIsCamActived] = useState(false)

  const onCamPress = () => {
    setIsCamActived(!isCamActived)
  }

  const handleUrlScanned = async (url: string) => {
    await consultarNFCe(url)
    setIsCamActived(false)

    // const regex = /p=([^|]+)/
    // const match = url.match(regex)

    // if (match && match[1]) {
    //   const chaveAcesso = match[1]
    // }
  }

  return (
    <S.Wrapper testID="wrapper">
      {isCamActived ? <Cam onUrlScanned={handleUrlScanned} /> : null}
      <TouchableOpacity
        style={{ marginTop: 50, backgroundColor: 'tomato', padding: 10, borderRadius: 10 }}
        onPress={onCamPress}
      >
        <Text>Ativar/Desativar</Text>
      </TouchableOpacity>
    </S.Wrapper>
  )
}

export default Home
