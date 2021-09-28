import Head from 'next/head'
import { Fragment } from 'react'
import HomePageView from '@views/pages/Home'

const HomePage = props => (
  <Fragment>
    <Head>
      <title>Home</title>
    </Head>
    <HomePageView {...props} />
  </Fragment>
)

HomePage.getInitialProps = ({ res }) => {
  return {}
}

export default HomePage
