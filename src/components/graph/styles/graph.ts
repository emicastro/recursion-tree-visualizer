import styled from 'styled-components'

export const Svg = styled.svg`
  /* flex-basis: 0; */
  flex-grow: 1;
  border-radius: 0 0 8px 8px;
  background-color: ${({ theme }) => theme.colors.foreground};
  margin: 0.6em;
`