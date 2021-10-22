import { NextPage } from 'next'
import WithAuth from '../components/auth/withAuth'
import Home from '../components/common/home'

const home: NextPage = () => {
  return (
    <WithAuth authed={false} destination='/feed'>
      <Home />
    </WithAuth>
  )
}

export default home
