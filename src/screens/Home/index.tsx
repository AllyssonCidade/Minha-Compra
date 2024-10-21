import * as S from './styles'
import { Text } from 'react-native'
import React from 'react'
import Head from '@/src/components/Head'

const Home = () => (
  <S.Wrapper
    colors={['rgba(245, 245, 245, 0.2)', 'rgba(128, 197, 205, 0.91)', '#021d20']}
    testID="wrapper"
  >
    <Head />
  </S.Wrapper>
)

export default Home
