import { Formik } from "formik";
import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { useDispatch } from "react-redux";
import { LOGIN_USER } from "../../../gql/user";
import { useApolloMutation } from "../../../lib/apolloClient";
import { login } from "../../../reducers/user";
import { LoginContainer } from "./styles/Container.styled";
import { ButtonStyled, FormStyled } from "./styles/Form.styled";
import MyTextField, { StyledTextField } from "./styles/TextField.styled";
import * as yup from "yup";

const validationSchema = yup.object({
  username: yup.string().required().min(3).max(8),
  password: yup.string().required().min(5).max(20),
});

const Login: NextPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handelOnSubmit = (data: any, { setSubmitting, resetForm }: any) => {
    resetForm();
    setSubmitting(true);
    useApolloMutation(
      LOGIN_USER,
      ({ Login }: any) => {
        dispatch(login(Login));
      },
      data
    ).then(() => router.push("/"));
  };

  return (
    <LoginContainer>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={handelOnSubmit}
        validationSchema={validationSchema}
      >
        {() => (
          <FormStyled>
            <StyledTextField name="username" label="username" />
            <MyTextField name="password" label="password" />
            <ButtonStyled type="submit">send</ButtonStyled>
          </FormStyled>
        )}
      </Formik>
    </LoginContainer>
  );
};
export default Login;
