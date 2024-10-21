import styled from 'styled-components/native'

export const Wrapper = styled.View`
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  height: 100px;
  width: 100%;
  align-items: center;
`
export const CircleContainer = styled.TouchableOpacity`
  flex-basis: 20%;
`
export const Circle = styled.TouchableOpacity`
  justify-content: center;
  flex-direction: row;
  height: 80px;
  width: 80px;
  padding: 4px;
  border-radius: 40px;
  align-items: center;
  background-color: #f5f5f5;
  border: 4px solid #045862;
`
export const Image = styled.Image`
  height: 100%;
  width: 100%;
  border-radius: 50px;
  align-items: center;
`
export const SearchInputContainer = styled.View`
  flex-basis: 80%;
`
export const SearchInput = styled.TextInput`
  height: 40%;
  width: 90%;
  border-radius: 10px;
  align-items: center;
  align-self: flex-end;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 10px;
`
export const SearchIconContainer = styled.TouchableOpacity`
  height: 35%;
  width: 14%;
  margin: 2px;
  position: absolute;
  border-radius: 10px;
  justify-content: center;
  align-self: flex-end;
  background-color: #000;
`
export const SearchIcon = styled.Image`
  width: 70%;
  height: 70%;
  align-self: center;
`
