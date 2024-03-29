import styled from 'styled-components'

export const Footer = styled.footer`
  font-size: 0.8em;
  flex-grow: 0;
  margin-top: 0.5em;
  text-align: center;

  opacity: 0.35;
  color: ${({ theme }) => theme.colors.contrast};
  a {
    color: ${({ theme }) => theme.colors.contrast};
  }
`