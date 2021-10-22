import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_SINGLE_POST } from "../../../gql/posts";
import {
  useApolloQuery,
  useApolloSubscription,
} from "../../../lib/apolloClient";
import rootState from "../../../interfaces/redux/rootState.interface";
import {
  Comment,
  singlePost,
} from "../../../interfaces/redux/singlePost.interface";
import { addComment, DeleteComment, fetch } from "../../../reducers/singlePost";
import PostCard from "./PostCard";
import {
  PostContentContainer,
  SinglePostContainer,
} from "./styles/SinglePost.styles";
import Comments from "./Comments";
import { COMMENT_DELETED_SUB, NEW_COMMENT_SUB } from "../../../gql/comments";
// import { CommentAdded ,CommentDeleted } from "../../../reducers/posts"
import { deleteCommentRes } from "./Comments/SingleComment";

const Post: React.FC = () => {
  const router = useRouter();
  const { id: uuid } = router.query;

  const dispatch = useDispatch();

  const post = useSelector((state: rootState) => state.singlePost.value);
  const user = useSelector((state: any) => state.user.value);

  useEffect(() => {
    if (uuid) {
      useApolloQuery(
        GET_SINGLE_POST,
        ({ getSinglePost }: { getSinglePost: singlePost }) => {
          console.log(uuid);
          console.log(getSinglePost);
          dispatch(fetch(getSinglePost));
        },
        { postUuid: `${uuid}` }
      );

      useApolloSubscription(
        NEW_COMMENT_SUB,
        ({ commentAdded }: { commentAdded: Comment }) => {
          dispatch(addComment(commentAdded));
          // dispatch(CommentAdded(commentAdded))
        },
        { postUuid: uuid }
      );

      useApolloSubscription(
        COMMENT_DELETED_SUB,
        ({ commentDeleted }: { commentDeleted: deleteCommentRes }) => {
          dispatch(DeleteComment(commentDeleted));
          // dispatch(CommentDeleted(commentDeleted))
        },
        { postUuid: uuid }
      );
    }
  }, [uuid]);

  return (
    <SinglePostContainer>
      <PostContentContainer>
        <PostCard post={post} user={user} />
        <Comments comments={post.comments} post={post} user={user} />
      </PostContentContainer>
    </SinglePostContainer>
  );
};
export default Post;
