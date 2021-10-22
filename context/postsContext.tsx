import { useSubscription } from '@apollo/client'
import React ,{ createContext, useState, useEffect, useContext } from 'react'
import { DELETE_POST, GET_POSTS, NEW_POST_SUBSCRIBE,DELETE_POST_SUBSCRIBE } from '../gql/posts'
import { PostsContextTypes } from '../interfaces/auth/context.interface'
import { Post } from '../interfaces/fetch/post.interface'
import { useApolloQuery, useApolloSubscription } from '../lib/apolloClient'

const AuthContext = createContext({
    posts: null,
    create: (data:any) => {},
    addPost: (data:any) => {},
    Delete: (uuid:string) => {}
})

function PostsProvider({children}:any) {
    const [state, setState] = useState<any>([])

    async function create(data:any) {
        setState(data)
    }


    async function addPost(data:any){
        console.log("addpost");
        console.log(state)
        setState([data,...state])
    }

    async function Delete(uuid:string) {
        console.log("delete");
        const newPosts = state.filter((Post:any)=> Post.uuid !== uuid )
        console.log(newPosts)
        setState(newPosts)
    }
    return(
        <AuthContext.Provider value={{ posts:state ,addPost, create, Delete}}>
            {children}
        </AuthContext.Provider>
    )
}

const usePostContext = ()=>{
    const ctx:PostsContextTypes = useContext(AuthContext)
    const { posts,addPost,create,Delete } = ctx
    return { posts,addPost,create,Delete }
}

export {usePostContext , PostsProvider }