import { NextPage } from 'next'
import WithAuth from '../components/auth/withAuth'
import Login from '../components/common/login'

const login:NextPage = () => {
    return(
        <WithAuth authed={false} destination='/'>
            <Login />
        </WithAuth>
    )
}
export default login