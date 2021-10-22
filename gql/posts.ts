import { gql } from "@apollo/client";

export const NEW_POST_SUBSCRIBE = gql`
  subscription {
    postAdded {
      id
      uuid
      body
      userId
      user {
        id
        uuid
        username
      }
      commentsLength
      reactionsLength
    }
  }
`;

export const DELETE_POST_SUBSCRIBE = gql`
  subscription {
    postDeleted {
      id
      uuid
      body
      user {
        username
      }
    }
  }
`;

export const DELETE_POST = gql`
  mutation deletePost($postUuid: String!) {
    deletePost(postUuid: $postUuid) {
      id
      uuid
      body
      user {
        id
        uuid
        username
      }
    }
  }
`;

export const CREATE_POST = gql`
  mutation createPost($postBody: String!) {
    createPost(createPostInput: { body: $postBody }) {
      id
      uuid
      body
      userId
      user {
        id
        uuid
        username
      }
      commentsLength
      reactionsLength
    }
  }
`;

export const GET_POSTS = gql`
  query {
    findPosts {
      reqKey
      posts {
        id
        uuid
        body
        userId
        user {
          id
          uuid
          username
        }
        commentsLength
        reactionsLength
        reactions {
          type
          reaction {
            user {
              username
            }
          }
        }
      }
    }
  }
`;
export const GET_SINGLE_POST = gql`
  query getSinglePost($postUuid: String!) {
    getSinglePost(postUuid: $postUuid) {
      reqKey
      id
      uuid
      body
      createdAt
      updateAt
      user {
        id
        uuid
        username
        email
        bio
      }
      userId
      commentsLength
      comments {
        id
        uuid
        body
        createdAt
        updateAt
        user {
          id
          uuid
          username
        }
        reactionsLength
        reactions {
          id
          uuid
          type
          createdAt
          updateAt
        }
      }
      reactionsLength
      reactions {
        id
        uuid
        type
        createdAt
        updateAt
        reaction {
          user {
            id
            username
          }
        }
      }
    }
  }
`;
