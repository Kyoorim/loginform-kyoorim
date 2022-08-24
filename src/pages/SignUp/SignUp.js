import styled from "styled-components";

import SignUpForm from "./SignUpForm";
import Description from "./Description";

const SignUp = () => {
  const Wrapper = styled.div`
    display: flex;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    padding: 24px;
    width: 100%;
  `;

  return (
    <Wrapper>
      <Description />
      <SignUpForm />
    </Wrapper>
  );
};

export default SignUp;
