import styled from "styled-components";

const Wrapper = styled.div`
  width: 410px;
  margin-right: 20px;
  @media screen and (max-width: 816px) {
    display: none;
  }
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`;

const TextList = styled.ul`
  display: flex;
  flex-direction: column;
  li {
    display: inline-block;
    margin-bottom: 24px;
  }
`;

const DescriptionFooter = styled.div`
  font-size: 14px;

  span {
    display: inline-block;
  }
`;

const Description = () => {
  return (
    <Wrapper>
      <Title>Join the Stack Overflow community</Title>
      <TextList>
        <li>Get unstuck — ask a question</li>
        <li>Unlock new privileges like voting and commenting</li>
        <li>Save your favorite tags, filters, and jobs</li>
        <li>Earn reputation and badges</li>
      </TextList>
      <DescriptionFooter>
        <span>
          Collaborate and share knowledge with a private group for FREE.
        </span>
        <span>Get Stack Overflow for Teams free for up to 50 users.</span>
      </DescriptionFooter>
    </Wrapper>
  );
};

export default Description;
