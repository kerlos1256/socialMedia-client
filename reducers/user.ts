import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";
import { authUser } from "../interfaces/auth/authUser.interface";


const initialStateValue:authUser = {
    id: 0,
    uuid: '',
    email: '',
    username: '',
    iat: 0,
    exp: 0,
    authed: null
}


export const userSlice = createSlice({
    name: 'user',
    initialState: { value: initialStateValue},
    reducers:{
        currentUser: (state) => {
            if(localStorage){
                const token = localStorage.getItem('jwtToken')
                if(token){
                    const user:authUser = jwtDecode(token)
        
                    if (user.exp * 1000 < Date.now()) {
                        localStorage.removeItem('jwtToken')
                    }else{
                        state.value = {...user,authed:true}
                    }
                }else{
                    state.value = {...initialStateValue,authed:false}
                    
                }
            }
        },
        login: (state,action) => {
            if(action.payload.token){
                localStorage.setItem("jwtToken",action.payload.token)
                const user:authUser = jwtDecode(action.payload.token)
                state.value = {...user,authed:true}
            }
        },
        logout: (state) =>{
            localStorage.removeItem("jwtToken")
            state.value = {...initialStateValue,authed:false}
        }
    }
})

export const { currentUser, login, logout } = userSlice.actions

export default userSlice.reducer