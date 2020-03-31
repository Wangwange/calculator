import React from "react";
import styled from "styled-components";

const ButtonBlock = styled.div`
  grid-area: ${props => props.area};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: rgb(60, 60, 60);
  color: white;
  transition: all 0.25s;

  &:hover {
    background: white;
    color: black;
  }
`;

function Button({ area, text, onClick }) {
  return <ButtonBlock area={area}>{text}</ButtonBlock>;
}

export default Button;
