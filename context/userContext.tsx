import React ,{ useReducer, createContext, useState, useEffect, useContext } from 'react'
import jwtDecode from 'jwt-decode'
import { authUser } from '../interfaces/auth/authUser.interface'
import { UserContextTypes } from '../interfaces/auth/context.interface'


async function getUser(setState:any){
    if(localStorage){
        const token = localStorage.getItem('jwtToken')
        if(token){
            const user:any = await jwtDecode(token)

            if (user.exp * 1000 < Date.now()) {
                localStorage.removeItem('jwtToken')
            }else{
                setState({...user,authed:true})
            }
        }else{
            setState({authed:false})
        }
        
    }
}


const AuthContext = createContext({
    user: null,
    login: (data:any) => {},
    logout: () => {}
})

function AuthProvider({children}:any) {
    const [state, setState] = useState<any>()
    useEffect(()=>{
        getUser(setState)
    },[])

    async function login(data:any) {
        if(data.token){
            localStorage.setItem("jwtToken",data.token)
            const user:authUser = await jwtDecode(data.token)
            setState({...user,authed:true})
        }
    }
    function logout() {
        localStorage.removeItem("jwtToken")
        setState({authed:false})
        }

    return(
        <AuthContext.Provider value={{ user:state , login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

const useUserContext = ()=>{
    const ctx:UserContextTypes = useContext(AuthContext)
    const {user,login,logout} = ctx
    return { user,login,logout }
}

export {useUserContext, AuthProvider }