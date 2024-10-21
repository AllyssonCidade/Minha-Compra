import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'

export const Wrapper = styled(LinearGradient).attrs({
  colors: ['rgba(245, 245, 245, 0.2)', 'rgba(128, 197, 205, 0.91)', 'rgba(11, 148, 164, 1)'],
  start: { x: 0, y: 0 },
  end: { x: 0, y: 2 }
})`
  flex: 1;
  padding: 10px;
  align-items: center;
  justify-content: flex-start;
`
