import { Fragment } from 'react'

import Main from '../components/Main/Main'

import InstallPWA from '../util/useInstallPWA/useInstallPWA'

const index = () => {
  return (
    <Fragment>
      <InstallPWA />
      <Main />
    </Fragment>
  )
}

export default index
