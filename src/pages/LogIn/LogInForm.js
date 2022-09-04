import React, { useState, useRef, useContext } from "react";
//로그인 성공 후 리다이렉션
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import AuthContext from "../../store/auth-context";
import Card from "../../UI/Card";
import Button from "../../UI/Button";

const Form = styled.form`
  display: flex;
  align-items: stretch;
  flex-direction: column;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  flex: 1;
  color: rgb(35, 38, 41);
  margin-bottom: 5px;
`;

const Input = styled.input`
  display: block;
  flex: 3;
  font: inherit;
  padding: 0.35rem 0.35rem;
  border-radius: 3px;
  border: 1px solid rgb(186, 191, 196);
  margin-bottom: 10px;

  &:focus {
    outline: 3px solid rgba(10, 149, 255, 0.2);
  }
`;

const LogInForm = (props) => {
  // 로그인 성공후 리다이렉션
  const navigate = useNavigate();

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    //Add validation HERE
    console.log(enteredEmail);
    setIsLoading(true);
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAL_sFLjUbNmnkOCMW020d3_c3AKfY-msI";
    } else {
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Login failed !";
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        //로그인에 성공헤 token(idToken)이 생기는 시점
        authCtx.login(data.idToken); // 이렇게 토큰 설정해줌
        alert("Login Success !");

        //로그인 성공 후 리다이렉션
        navigate("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <Card>
      <Form onSubmit={submitHandler}>
        <Label>Email</Label>
        <Input
          id="email"
          label="Email"
          type="email"
          required
          ref={emailInputRef}
        ></Input>
        <Label>Password</Label>
        <Input
          id="password"
          label="Password"
          type="password"
          required
          ref={passwordInputRef}
        ></Input>
        <Button type="submit">Log in</Button>
      </Form>
    </Card>
  );
};

export default LogInForm;
