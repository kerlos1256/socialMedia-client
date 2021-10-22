import { NextPage } from 'next'
import { authProps } from '../../../interfaces/auth/authProps.interface'

const Chat:NextPage<authProps> = ({user}:authProps) => {
    
    return(
        <div>
            Chat
        </div>
    )
}
export default Chat