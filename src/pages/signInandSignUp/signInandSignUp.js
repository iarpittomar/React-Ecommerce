import React from "react";
import "./signInandSignUp.scss";
import SignIn from "../../components/signIn/signIn";
import SignUp from "../../components/signUp/signUp";

const SigninAndSignUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn></SignIn>
      <SignUp></SignUp>
    </div>
  );
};

export default SigninAndSignUp;
