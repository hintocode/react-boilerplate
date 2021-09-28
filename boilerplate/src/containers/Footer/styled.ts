import styled from 'styled-components'

export const StyledFooter = styled.footer`
  width: 100%;
  padding: ${({ theme }) => theme.rem(24)} 0;
  background-color: ${({ theme }) => theme.colors.ice};
`
