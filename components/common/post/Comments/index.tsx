import SingleComment from "./SingleComment";
import {
  Comment,
  singlePost,
} from "../../../../interfaces/redux/singlePost.interface";
import { CommentsContainer } from "./styles/Comments.styles";
import CommentForm from "./CommentForm";

interface props {
  comments: Comment[];
  post: singlePost;
  user: any;
}

const Comments: React.FC<props> = ({ comments, post, user }) => {
  return (
    <CommentsContainer>
      <h2 style={{ margin: 0 }}>Comments!</h2>
      <CommentForm />
      {comments.map((comment) => (
        <SingleComment key={comment.id} comment={comment} post={post} />
      ))}
    </CommentsContainer>
  );
};
export default Comments;
