import { Button } from '@material-ui/core'
import { Formik } from 'formik'
import { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import { useDispatch } from 'react-redux'
import { useUserContext } from '../../../context/userContext'
import { REGISTER_USER } from '../../../gql/user'
import { useApolloMutation } from '../../../lib/apolloClient'
import { login } from '../../../reducers/user'
import FormStyled from '../login/styles/Form.styled'
import MyTextField from '../login/styles/TextField.styled'


const Register:NextPage = () => {
    const router = useRouter()
    const dispatch = useDispatch()


    const handelOnSubmit = (data:any,{setSubmitting,resetForm}:any) =>{
        resetForm()
        setSubmitting(true)
        useApolloMutation(REGISTER_USER,({Register}:any)=>{
            dispatch(login(Register))
        },data)
        .then(()=> {setSubmitting(false); router.push('/')})
        }

    return(
        <div>
            <Formik
            initialValues={{username:'',email:'',password:''}}
            onSubmit={handelOnSubmit}
            >
            {()=>(
                <FormStyled>
                    <MyTextField label='username' name='username' />
                    <MyTextField label='email' name='email' />
                    <MyTextField label='password' name='password' />
                    <Button type='submit'>Register</Button>
                </FormStyled>
            )}
            </Formik>
        </div>
    )
}
export default Register