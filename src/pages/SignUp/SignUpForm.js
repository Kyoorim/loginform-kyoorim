import { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";

import Card from "../../UI/Card";
import Button from "../../UI/Button";

import styled from "styled-components";
import AuthContext from "../../store/auth-context";

const Wrapper = styled.div`
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 1.3rem;
  font-weight: 600;
  max-width: 421px;
  @media screen and (min-width: 815px) {
    display: none;
  }
`;

const Form = styled.form`
  display: flex;
  align-items: stretch;
  flex-direction: column;

  span {
    color: var(--gray);
    font-size: 13px;
  }

  span:last-child {
    margin-top: 40px;
  }
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

const Text = styled.div`
  font-size: 15px;

  span:nth-child(2) {
    color: var(--blue);
    cursor: pointer;
  }
`;

const SignUpForm = () => {
  const navigate = useNavigate();
  const directToLogIn = () => {
    navigate("/login");
  };

  const [isLoading, setIsLoading] = useState();

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const authCtx = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAL_sFLjUbNmnkOCMW020d3_c3AKfY-msI",
      {
        method: "POST",
        body: JSON.stringify({
          displayName: enteredName,
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          res.json().then((data) => {
            console.log(data);
            let errorMessage = "Authentication failed";
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        authCtx.login(data.idToken);
        let successMessage = "Success";
        alert(successMessage);
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <Wrapper>
      {!isLoading && (
        <Title>
          Create your Stack Overflow account. It’s free and only takes a minute.
        </Title>
      )}
      {isLoading && <p>Sending Request....</p>}
      <Card>
        <Form onSubmit={submitHandler}>
          <Label htmlFor="name">Display name</Label>
          <Input type="name" id="name" ref={nameInputRef}></Input>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" required ref={emailInputRef}></Input>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          ></Input>
          <span>
            Passwords must contain at least eight characters, including at least
            1 letter and 1 number.
          </span>
          <Button type="submit">Sign up</Button>
          <span>
            By clicking “Sign up”, you agree to our terms of service, privacy
            policy and cookie policy
          </span>
        </Form>
      </Card>
      <Text>
        <span>Already have an account? </span>
        <span onClick={directToLogIn}>Log in</span>
      </Text>
    </Wrapper>
  );
};

export default SignUpForm;
