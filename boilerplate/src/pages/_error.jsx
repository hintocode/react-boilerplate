import React from 'react'
import ErrorPageView from '@views/pages/Error'

const ErrorPage = ({ statusCode, message }) => (
  <ErrorPageView
    code={statusCode}
    message={message}
  />
)

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = err?.statusCode || res?.statusCode
  const message = statusCode ? `Server error (${statusCode})` : 'Client error'
  return { statusCode, message }
}

export default ErrorPage
