import * as S from './styles'
import React from 'react'

const Head = () => (
  <S.Wrapper testID="wrapper">
    <S.CircleContainer>
      <S.Circle>
        <S.Image source={require('../../../assets/images/person.png')} />
      </S.Circle>
    </S.CircleContainer>
    <S.SearchInputContainer>
      <S.SearchInput placeholder="Buscar..." />
      <S.SearchIconContainer>
        <S.SearchIcon source={require('../../../assets/images/ic-search.png')} />
      </S.SearchIconContainer>
    </S.SearchInputContainer>
  </S.Wrapper>
)

export default Head
