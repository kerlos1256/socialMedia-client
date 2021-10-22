import { createSlice } from "@reduxjs/toolkit";
import { Comment, singlePost } from "../interfaces/redux/singlePost.interface";
import singlePostInitState from "./initialState/singlePost.initalstate";

const initialStateValue: singlePost = singlePostInitState;

interface fetchAction {
  payload: singlePost;
  type: string;
}

interface CommentAddedAction {
  payload: Comment;
  type: string;
}

interface CommentDeletedAction {
  payload: {
    uuid: string;
  };
  type: string;
}

export const singlePostSlice = createSlice({
  name: "singlePost",
  initialState: { value: initialStateValue },
  reducers: {
    fetch: (state: { value: singlePost }, action: fetchAction) => {
      if (state.value.reqKey !== action.payload.reqKey) {
        state.value = action.payload;
      }
    },
    addComment: (state: { value: singlePost }, action: CommentAddedAction) => {
      if (
        !state.value.comments.find(
          (comment: Comment) => comment.uuid === action.payload.uuid
        )
      ) {
        state.value.comments.unshift(action.payload);
        state.value.commentsLength += 1;
      }
    },
    DeleteComment: (
      state: { value: singlePost },
      action: CommentDeletedAction
    ) => {
      if (
        state.value.comments.find(
          (comment: Comment) => comment.uuid === action.payload.uuid
        )
      ) {
        state.value.comments = state.value.comments.filter(
          (comment: Comment) => comment.uuid !== action.payload.uuid
        );
        state.value.commentsLength -= 1;
      }
    },
  },
});

export const { fetch, addComment, DeleteComment } = singlePostSlice.actions;

export default singlePostSlice.reducer;
