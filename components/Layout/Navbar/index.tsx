import { NextPage } from "next"
import { useRouter } from "next/dist/client/router"
import { useDispatch } from "react-redux"
import { authUser } from "../../../interfaces/auth/authUser.interface"
import { logout } from "../../../reducers/user"
import ColumnContainerStyles from "./styles/ColumnContainer.styles"
import ContainerStyles from "./styles/Container.styles"
import NavLinkStyles from "./styles/NavLinksStyles/NavLink.styles"
import NavLinksContainerStyles from "./styles/NavLinksStyles/NavLinksContainer.styles"
import ImgStyles from "./styles/profileStyles/Img.styles"
import LogoStyles from "./styles/profileStyles/Logo.styles"
import ProfileContainerStyles from "./styles/profileStyles/ProfileContainer.styles"

interface props {
    user: authUser
}

export const Authed:NextPage<props> = ({user}) => {
    const dispatch = useDispatch()
    const router = useRouter()

    return(
        <ContainerStyles>
            <ColumnContainerStyles>
                <ProfileContainerStyles onClick={()=> router.push('/')}>
                    <ImgStyles src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/137409052/original/d472c30361632da1c8d8fa780f572807d78abd9f/cartoon-profile-picture-or-avatar.png" />
                    <LogoStyles>
                    {user.username}
                    </LogoStyles>
                </ProfileContainerStyles>


                <NavLinkStyles onClick={()=> dispatch(logout())}>
                    Logout
                </NavLinkStyles>
            </ColumnContainerStyles>
        </ContainerStyles>
    )
}

export const unAuthed:NextPage = () => {
    const router = useRouter()

    return(
        <ContainerStyles>
            <ColumnContainerStyles>
                <ProfileContainerStyles onClick={()=> router.push('/')}>
                    <LogoStyles>
                        MyApp
                    </LogoStyles>
                </ProfileContainerStyles>


                <NavLinksContainerStyles>
                    <NavLinkStyles onClick={()=> router.push('/login')}>
                        Login
                    </NavLinkStyles>
                    <NavLinkStyles onClick={()=> router.push('/register')}>
                        Register
                    </NavLinkStyles>
                </NavLinksContainerStyles>
            </ColumnContainerStyles>
        </ContainerStyles>
    )
}

export const Loading:NextPage = () => {
    const router = useRouter()

    return(
        <ContainerStyles>
            <ColumnContainerStyles>
                <ProfileContainerStyles onClick={()=> router.push('/')}>
                    <LogoStyles>
                        loading
                    </LogoStyles>
                </ProfileContainerStyles>


                <NavLinksContainerStyles>
                    <NavLinkStyles onClick={()=> router.push('/login')}>
                        loading
                    </NavLinkStyles>
                    <NavLinkStyles onClick={()=> router.push('/register')}>
                        loading
                    </NavLinkStyles>
                </NavLinksContainerStyles>
            </ColumnContainerStyles>
        </ContainerStyles>
    )
}

