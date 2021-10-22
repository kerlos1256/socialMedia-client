import { Button } from "@material-ui/core";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { CREATE_COMMENT } from "../../../../gql/comments";
import rootState from "../../../../interfaces/redux/rootState.interface";
import { Comment } from "../../../../interfaces/redux/singlePost.interface";
import { useApolloMutation } from "../../../../lib/apolloClient";
import { CommentAdded } from "../../../../reducers/posts";
import { addComment } from "../../../../reducers/singlePost";
import PostFormStyles from "../../feed/components/PostForm/styles/PostForm.styles";
import PostFormContainerStyles from "../../feed/components/PostForm/styles/PostFormContainer.styles";
import MyTextField from "../../login/styles/TextField.styled";

const CommentForm: React.FC = () => {
  const dispatch = useDispatch();
  const post = useSelector((state: rootState) => state.singlePost.value);

  const handleFormSubmit = (
    data: { body: string },
    { setSubmitting, resetForm }: any
  ) => {
    setSubmitting(true);
    resetForm();
    useApolloMutation(
      CREATE_COMMENT,
      ({ createComment }: { createComment: Comment }) => {
        dispatch(addComment(createComment));
        dispatch(CommentAdded(createComment));
      },
      { postId: post.id, body: data.body }
    );
  };

  return (
    <PostFormContainerStyles>
      <Formik initialValues={{ body: "" }} onSubmit={handleFormSubmit}>
        {() => (
          <PostFormStyles>
            <MyTextField name="body" label="new Comment!" />
            <Button type="submit">send</Button>
          </PostFormStyles>
        )}
      </Formik>
    </PostFormContainerStyles>
  );
};
export default CommentForm;
