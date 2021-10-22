import { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import React, { ReactElement } from 'react'
import { useSelector } from 'react-redux'

interface props{
    children: ReactElement,
    authed: false | true,
    destination: string
}

const WithAuth:NextPage<props> = ({authed,destination,children}) => {
    const router = useRouter()
    const user = useSelector((state:any) => state.user.value)

    function redirect() {
        router.push(destination) 
    }

    return (
        <>
        {user.authed !== null ? user.authed === authed ? React.cloneElement(children, {user}): redirect() : (<h1>loading</h1>)}
        </>
    )
}

export default WithAuth