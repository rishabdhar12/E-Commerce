import React from "react";
import { BsPersonPlusFill } from "react-icons/bs";
import "../../Pages/Home/Home.css";

import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <div className="nav-login">
        <div onClick={() => loginWithRedirect()}>
          Login
          <span>
            <BsPersonPlusFill />
          </span>
        </div>
      </div>
    )
  );
};

export default Login;
