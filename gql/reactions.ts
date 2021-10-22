import { gql } from "@apollo/client";

export const REACT_ON_POST = gql`
mutation reactOnPost(
    $postUuid: String!,
    $type: String!
){
  reactOnPost(PostReactionInput:{
    postUuid: $postUuid,
    type: $type
  }){
    type
    reaction{
      user{
        username
      }
    }
  }
}
`