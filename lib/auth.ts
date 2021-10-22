import jwtDecode from "jwt-decode"


export async function getUser(setState:any){
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


export async function setUser({token}:any){
    if(localStorage){
        localStorage.setItem('jwtToken', token)
    }
}