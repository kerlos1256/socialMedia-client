import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
mutation login(
    $username: String!
    $password: String!
) {
    Login(loginUserInput:{
    username:$username,
    password:$password
  }){
    token
  }
}
`

export const REGISTER_USER = gql`
mutation register(
    $username: String!
    $email: String!
    $password: String!
) {
  Register(createUserInput:{
    username:$username,
    email:$email,
    password:$password,
  }){
    token
  }
}
`