import styled from 'styled-components'

export const Main = styled.main`
  padding-top: ${({ theme }) => theme.rem(theme.sizes.header + 32)};
  padding-bottom: ${({ theme }) => theme.rem(32)};
  min-height: 100%;
  position: relative;
`
