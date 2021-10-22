import { useDispatch, useSelector } from "react-redux";
import { DELETE_COMMENT } from "../../../../gql/comments";
import {
  Comment,
  singlePost,
} from "../../../../interfaces/redux/singlePost.interface";
import { useApolloMutation } from "../../../../lib/apolloClient";
import { PostDelete } from "../../feed/components/PostCard/styles/PostCard.styles";
import {
  CommentBody,
  CommentContainer,
  UserContainer,
  UserImage,
  UserInfo,
} from "./styles/Comment.styles";
import { DeleteComment } from "../../../../reducers/singlePost";
import { CommentDeleted } from "../../../../reducers/posts";
import rootState from "../../../../interfaces/redux/rootState.interface";

interface props {
  comment: Comment;
  post: singlePost;
}

export interface deleteCommentRes {
  uuid: string;
  post: {
    uuid: string;
    commentsLength: number;
    reactionsLength: number;
  };
}

const SingleComment: React.FC<props> = ({ comment, post }) => {
  const dispatch = useDispatch();

  const user = useSelector((state: any) => state.user.value);

  const deleteComment = () => {
    useApolloMutation(
      DELETE_COMMENT,
      ({ deleteComment }: { deleteComment: deleteCommentRes }) => {
        dispatch(DeleteComment(deleteComment));
        dispatch(CommentDeleted(deleteComment));
      },
      { commentUuid: comment.uuid }
    );
  };

  return (
    <CommentContainer>
      <UserContainer>
        <UserImage src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/137409052/original/d472c30361632da1c8d8fa780f572807d78abd9f/cartoon-profile-picture-or-avatar.png" />
        <UserInfo>{comment.user.username}</UserInfo>
      </UserContainer>
      <CommentBody>{comment.body}</CommentBody>
      {user.username === comment.user.username ? (
        <PostDelete onClick={() => deleteComment()}>Delete</PostDelete>
      ) : undefined}
    </CommentContainer>
  );
};
export default SingleComment;
