import { Button } from "@material-ui/core";
import { Form } from "formik";
import styled from "styled-components";

export const FormStyled = styled(Form)`
  display: inline-flex;
  flex-direction: column;
  height: 200px;
  justify-content: space-between;
  width: 40%;
  min-width: 200px;
  /* min-width: 200px; */
  /* max-width: 800px; */
`;

export const ButtonStyled = styled(Button)`
  && {
    background-color: crimson;
  }
`;
