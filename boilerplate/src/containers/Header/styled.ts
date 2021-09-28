import styled from 'styled-components'
import { Container } from '@components/Layout'

export const StyledHeader = styled.header`
  width: 100%;
  height: ${({ theme }) => theme.rem(theme.sizes.header)};
  padding: ${({ theme }) => theme.rem(16)} 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme.layers.header};
  background-color: ${({ theme }) => theme.colors.ice};

  & > ${Container} {
    height: 100%;
  }
`
