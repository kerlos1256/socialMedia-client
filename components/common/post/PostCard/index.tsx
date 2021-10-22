import {
  ReactionsContainer,
  CommentsContainer,
  PostBodyContainer,
  PostCardContainer,
  PostDelete,
  PostUserContainer,
  PostUserImg,
  PostUserInfo,
} from "../../feed/components/PostCard/styles/PostCard.styles";
import CommentIcon from "@material-ui/icons/Comment";
import { singlePost } from "../../../../interfaces/redux/singlePost.interface";
import { useApolloMutation } from "../../../../lib/apolloClient";
import { DELETE_POST } from "../../../../gql/posts";
import { DeletePost } from "../../../../reducers/posts";
import { useDispatch, useSelector } from "react-redux";
import rootState from "../../../../interfaces/redux/rootState.interface";

const PostCard: React.FC<{ post: singlePost; user: any }> = ({
  post,
  user,
}) => {
  const dispatch = useDispatch();

  const deletePost = () => {
    useApolloMutation(
      DELETE_POST,
      ({ deletePost }: any) => {
        dispatch(DeletePost(deletePost));
      },
      { postUuid: post.uuid }
    );
  };

  return (
    <PostCardContainer>
      <PostUserContainer>
        <PostUserInfo>
          <PostUserImg src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/137409052/original/d472c30361632da1c8d8fa780f572807d78abd9f/cartoon-profile-picture-or-avatar.png" />
          <h4>{post.user.username}</h4>
        </PostUserInfo>
        <PostDelete>
          {user.username === post.user.username ? (
            <p onClick={() => deletePost()}>Delete</p>
          ) : null}
        </PostDelete>
      </PostUserContainer>
      <PostBodyContainer>
        <p>{post.body}</p>
      </PostBodyContainer>
      <ReactionsContainer>
        <CommentsContainer>
          <CommentIcon style={{ color: "#93B5C6" }} />
          <div>{post.commentsLength}</div>
        </CommentsContainer>
        {/* <div>Reactions:{post.reactionsLength}</div> */}
      </ReactionsContainer>
    </PostCardContainer>
  );
};
export default PostCard;
