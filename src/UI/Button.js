import styled from "styled-components";

const ButtonComponent = styled.button`
  font: inherit;
  margin-top: 10px;
  border: 1px solid var(--blue);
  background: var(--blue);
  color: white;
  padding: 0.75rem 3.5rem;
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
  border-radius: 3px;
  box-shadow: rgba(255, 255, 255, 0.4) 0px 1px 0px 0px inset;
  height: 37px;
  text-align: center;
`;

const Button = (props) => {
  return (
    <ButtonComponent type={props.type || "button"}>
      {props.children}
    </ButtonComponent>
  );
};

export default Button;
