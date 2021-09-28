import React, { FunctionComponent, Fragment } from 'react'
import Header from '@containers/Header'
import Footer from '@containers/Footer'
import { Main } from './styled'

const BaseTemplate:FunctionComponent = ({ children }) => (
  <Fragment>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </Fragment>
)

export default BaseTemplate
