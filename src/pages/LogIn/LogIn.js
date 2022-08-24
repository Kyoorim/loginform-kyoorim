import React from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import LogInForm from "./LogInForm";

import Logo from "../../asset/logo-stackoverflow.svg";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const Text = styled.div`
  font-size: 15px;

  span:nth-child(2) {
    color: var(--blue);
    cursor: pointer;
  }
`;

const LogIn = () => {
  const navigate = useNavigate();
  const directToSignUp = () => {
    navigate("/signup");
  };
  return (
    <Wrapper>
      <img src={Logo} alt="stackoverflow logo" height={37} />
      <LogInForm />
      <Text>
        <span>Don't have an account ? </span>
        <span onClick={directToSignUp}>Sign Up</span>
      </Text>
    </Wrapper>
  );
};

export default LogIn;
