import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 24px;
`

export const MainText = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: 30px;
  font-weight: bold;
`
