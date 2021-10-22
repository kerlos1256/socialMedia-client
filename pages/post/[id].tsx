import { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import WithAuth from '../../components/auth/withAuth'
import Post from '../../components/common/post'


const post:NextPage = () => {
    return(
        <WithAuth authed={true} destination='/login'>
            <Post />
        </WithAuth>
    )
}
export default post