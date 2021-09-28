import React, { FunctionComponent } from 'react'
import BaseTemplate from '@views/templates/Base'
import { Container, Spacer } from '@components/Layout'
import { Title, Paragraph } from '@components/Typography'

const ErrorPage:FunctionComponent<ErrorPageProps> = ({ code, message }) => (
  <BaseTemplate>
    <Container>
      <Title>{code}</Title>
      <Spacer size={2} />
      <Paragraph>{message}</Paragraph>
    </Container>
  </BaseTemplate>
)

export default ErrorPage
export type ErrorPageProps = {
  code?: string,
  message?: string
}
