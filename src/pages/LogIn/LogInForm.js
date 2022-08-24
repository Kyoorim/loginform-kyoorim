import React from "react";

import styled from "styled-components";

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

const LogInForm = () => {
  return (
    <Card>
      <Form>
        <Label>Email</Label>
        <Input></Input>
        <Label>Password</Label>
        <Input></Input>
        <Button>Log in</Button>
      </Form>
    </Card>
  );
};

export default LogInForm;
