import React from "react";
import {
  CommonFormProps,
  SpanStyle,
  FormStyle,
  HeaderDivStyle,
} from "./common";
import { RiLoginCircleFill } from "react-icons/ri";
import FormikHandler from "../../components/handlers/FormikHandler";

const Login = ({ state, setState }: CommonFormProps) => {
  return (
    <FormStyle>
      <HeaderDivStyle>
        <h2>Login</h2>
        <RiLoginCircleFill />
      </HeaderDivStyle>
      <FormikHandler />
      <p>
        No Account?{" "}
        <SpanStyle onClick={() => setState(state)}>Register</SpanStyle>
      </p>
    </FormStyle>
  );
};

export default Login;
