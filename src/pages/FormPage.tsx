import React, { useState } from "react";
import SiteGlobalVariables from "../config/SiteGlobalVariables";
import Login from "./login/Login";
import Register from "./login/Register";

const FormPage = () => {
  // Site Global Variables.
  const {
    loginState: { register, login },
  } = SiteGlobalVariables;

  const [loginState, setLoginState] = useState<string>(register);

  switch (loginState) {
    case register:
      return <Register setState={setLoginState} state={login} />;
    case login:
      return <Login setState={setLoginState} state={register} />;
    default:
      return (
        <div>
          <h3>Default form</h3>
        </div>
      );
  }
};

export default FormPage;
