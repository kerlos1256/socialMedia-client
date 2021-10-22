import { createSlice } from "@reduxjs/toolkit";
import { deleteCommentRes } from "../components/common/post/Comments/SingleComment";
import { Post, Posts } from "../interfaces/redux/posts.interface";
import { Comment } from "../interfaces/redux/singlePost.interface";

const initialStateValue: Posts = {
  reqKey: 0,
  posts: [],
};

export const postsSlice = createSlice({
  name: "posts",
  initialState: { value: initialStateValue },
  reducers: {
    fetch: (state: { value: Posts }, action) => {
      if (state.value.reqKey !== action.payload.reqKey)
        state.value = action.payload;
    },
    addPost: (state: { value: Posts }, action) => {
      if (
        !state.value.posts.find(
          (post: any) => post.uuid === action.payload.uuid
        )
      )
        state.value.posts.unshift(action.payload);
    },
    DeletePost: (state: { value: Posts }, action) => {
      state.value.posts = state.value.posts.filter(
        (post: any) => post.uuid !== action.payload.uuid
      );
    },
    CommentAdded: (
      state: { value: Posts },
      action: { payload: Comment; type: string }
    ) => {
      state.value.posts.forEach((post: Post, index: number) => {
        if (post.uuid === action.payload.post.uuid) {
          state.value.posts[index].commentsLength =
            action.payload.post.commentsLength;
        }
      });
    },
    CommentDeleted: (
      state: { value: Posts },
      action: { payload: deleteCommentRes; type: string }
    ) => {
      state.value.posts.forEach((post: Post, index: number) => {
        if (post.uuid === action.payload.post.uuid) {
          state.value.posts[index].commentsLength =
            action.payload.post.commentsLength;
        }
      });
    },
    ReactionAdded: (
      state: { value: Posts },
      action: {
        payload: {
          postId: number;
          reaction: { type: string; reaction: { user: { username: string } } };
        };
        type: string;
      }
    ) => {
      async () => {
        const postIndex = state.value.posts.findIndex((post) => {
          post.id === action.payload.postId;
        });
        const reaction = state.value.posts[postIndex].reactions.find(
          (reaction) => {
            reaction.reaction.user.username ===
              action.payload.reaction.reaction.user.username;
          }
        );
        if (reaction) {
          state.value.posts[postIndex].reactions = state.value.posts[
            postIndex
          ].reactions.filter(
            (reaction) =>
              reaction.reaction.user.username !==
              action.payload.reaction.reaction.user.username
          );
        } else {
          state.value.posts[postIndex].reactions.unshift(
            action.payload.reaction
          );
        }
      };
    },
  },
});

export const {
  fetch,
  addPost,
  DeletePost,
  CommentAdded,
  CommentDeleted,
  ReactionAdded,
} = postsSlice.actions;

export default postsSlice.reducer;
