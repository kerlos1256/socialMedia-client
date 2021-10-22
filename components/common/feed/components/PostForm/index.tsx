import { Button } from "@material-ui/core";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { CREATE_POST } from "../../../../../gql/posts";
import { useApolloMutation } from "../../../../../lib/apolloClient";
import { addPost } from "../../../../../reducers/posts";
import MyTextField from "../../../login/styles/TextField.styled";
import PostFormStyles from "./styles/PostForm.styles";
import PostFormContainerStyles from "./styles/PostFormContainer.styles";

const PostForm: React.FC = () => {
  const dispatch = useDispatch();
  const handleFormSubmit = (data: any, { setSubmitting, resetForm }: any) => {
    setSubmitting(true);
    resetForm();
    useApolloMutation(
      CREATE_POST,
      ({ createPost }: any) => {
        dispatch(addPost(createPost));
      },
      data
    );
  };
  return (
    <PostFormContainerStyles>
      <Formik initialValues={{ postBody: "" }} onSubmit={handleFormSubmit}>
        {() => (
          <PostFormStyles>
            <MyTextField name="postBody" label="new Post!" />
            <Button type="submit">send</Button>
          </PostFormStyles>
        )}
      </Formik>
    </PostFormContainerStyles>
  );
};
export default PostForm;
