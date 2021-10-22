import { NextPage } from 'next'
import React from 'react'
import { useSelector } from 'react-redux'

interface props {
    Authed: any,
    UnAuthed: any,
    Loading: any
}

const AlternateOnAuth:NextPage<props> = ({Authed,UnAuthed,Loading}) => {
    const user = useSelector((state:any)=> state.user.value)
    
    return (
        <>
        {user.authed !== null ? user.authed === true ? <Authed user={user} /> : <UnAuthed /> : <Loading />}
        </>
    )
}
export default AlternateOnAuth