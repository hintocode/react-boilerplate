import Head from 'next/head'
import { Fragment } from 'react'
import { ThemeProvider } from 'styled-components'
import theme, { GlobalStyles } from '@theme'

const App = ({ Component, pageProps }) => (
  <Fragment>
    <Head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  </Fragment>
)

export default App
