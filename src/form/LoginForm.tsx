import React, { useState } from "react";

const LoginForm = () => {
  const [loginForm, setLoginForm] = useState<any>({
    formBuilder: {},
    initialValues: {},
    validationSchema: {},
    onSubmit: {},
  });

  return {
    loginForm,
    setLoginForm,
  };
};

export default LoginForm;
