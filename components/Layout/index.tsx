import { NextPage } from 'next'
import useLayoutEffect from '../../lib/useLayoutEffectHook'
import { useDispatch, useSelector } from 'react-redux'
import { currentUser } from '../../reducers/user'
import AlternateOnAuth from '../auth/AlternateOnAuth'
import ChildrenContainerStyle from './ChildrenContainer.style'
import Container from './Container.style'
import Footer from './Footer'
import { Authed, Loading, unAuthed } from './Navbar'
import Head from 'next/head'


const Layout:NextPage = ({children})=>{
    const dispatch = useDispatch()
    const user = useSelector((state:any)=> state.user.value)
    useLayoutEffect(()=>{
        dispatch(currentUser())
    },[])

    return (
        <Container>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <title>Nest Graphql Client</title>
            </Head>
            {/* navbar */}
            <AlternateOnAuth Authed={Authed} UnAuthed={unAuthed} Loading={Loading} />
            
            <ChildrenContainerStyle>
                {children}
            </ChildrenContainerStyle>
            
        </Container>
    )
}

export default Layout