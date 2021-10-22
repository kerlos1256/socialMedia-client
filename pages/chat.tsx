import { NextPage } from 'next'
import Chat from '../components/common/chat'
import WithAuth from '../components/auth/withAuth'
const chat:NextPage = () => {
    return(
        <WithAuth authed={true} destination='login'>
            <Chat />
        </WithAuth>
    )
}
export default chat