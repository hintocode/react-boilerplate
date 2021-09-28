import React, { FunctionComponent } from 'react'
import { Container } from '@components/Layout'
import Image from '@components/Image'
import { StyledHeader } from './styled'

const Header:FunctionComponent<HeaderProps> = ({ children }) => (
  <StyledHeader>
    <Container flex justify="space-between">
      <Image alt="" width="138" height="40" src="/assets/images/logo.svg" />
      {children}
    </Container>
  </StyledHeader>
)

type HeaderProps = {
  children?: React.ReactNode
}

export default Header
