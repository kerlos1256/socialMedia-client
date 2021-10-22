import { TextField } from "@material-ui/core";
import { useField } from "formik";
import styled from "styled-components";

const MyTextField = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  return (
    <TextField
      label={label}
      {...field}
      helperText={errorText}
      error={!!errorText}
    />
  );
};

export const StyledTextField = styled(MyTextField)`
  && {
  }
`;

export default MyTextField;
