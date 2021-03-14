import React from "react";
import {
  CommonFormProps,
  SpanStyle,
  FormStyle,
  HeaderDivStyle,
} from "./common";
import { FaRegistered } from "react-icons/fa";

const Register = ({ state, setState }: CommonFormProps) => {
  return (
    <FormStyle>
      <HeaderDivStyle>
        <h2>Register</h2>
        <FaRegistered />
      </HeaderDivStyle>
      <p>
        Already an Account?{" "}
        <SpanStyle onClick={() => setState(state)}>Login</SpanStyle>
      </p>
    </FormStyle>
  );
};

export default Register;
