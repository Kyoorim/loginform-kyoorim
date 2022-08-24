import React from "react";

import styled from "styled-components";

const CardWrapper = styled.div`
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  width: 288px;
  max-width: 316px;
  margin: 2rem auto;
  padding: 2rem;
  box-sizing: border-box;
`;

const Card = (props) => {
  return <CardWrapper>{props.children}</CardWrapper>;
};

export default Card;
