import { gql } from "@apollo/client";

export const CREATE_COMMENT = gql`
  mutation createComment($postId: Float!, $body: String!) {
    createComment(createCommentInput: { body: $body, postId: $postId }) {
      id
      uuid
      body
      createdAt
      updateAt
      post {
        uuid
        commentsLength
        reactionsLength
      }
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

export const DELETE_COMMENT = gql`
  mutation deleteComment($commentUuid: String!) {
    deleteComment(commentUuid: $commentUuid) {
      uuid
      post {
        uuid
        commentsLength
        reactionsLength
      }
    }
  }
`;

export const NEW_COMMENT_SUB = gql`
  subscription commentAdded($postUuid: String!) {
    commentAdded(postUuid: $postUuid) {
      id
      uuid
      body
      createdAt
      updateAt
      post {
        uuid
        commentsLength
        reactionsLength
      }
      user {
        id
        uuid
        username
      }
      reactions {
        id
        uuid
        type
        createdAt
        updateAt
        reaction {
          user {
            id
            uuid
            username
          }
        }
      }
    }
  }
`;

export const COMMENT_DELETED_SUB = gql`
  subscription commentDeleted($postUuid: String!) {
    commentDeleted(postUuid: $postUuid) {
      uuid
      post {
        uuid
        commentsLength
        reactionsLength
      }
    }
  }
`;
