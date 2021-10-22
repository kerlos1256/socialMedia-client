import { NextPage } from 'next'
import WithAuth from '../components/auth/withAuth'
import Register from '../components/common/register'

const register:NextPage = () => {

    return(
        <WithAuth authed={false} destination='/'>
            <Register />
        </WithAuth>
    )
}
export default register