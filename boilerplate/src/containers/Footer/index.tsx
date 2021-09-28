import React, { FunctionComponent, useMemo } from 'react'
import { Container } from '@components/Layout'
import Image from '@components/Image'
import { Label } from '@components/Typography'
import { StyledFooter } from './styled'

const Footer:FunctionComponent = () => {
  const currentYear = useMemo(() => new Date().getFullYear(), [])

  return (
    <StyledFooter>
      <Container flex justify="space-between">
        <Image alt="" width="83" height="24" src="/assets/images/logo.svg" />
        <Label>{currentYear} © All rights reserved</Label>
      </Container>
    </StyledFooter>
  )
}

export default Footer
