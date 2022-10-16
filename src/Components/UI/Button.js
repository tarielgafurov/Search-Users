import React from "react";
import styled from "styled-components";

const Button = ({ onClick}) => {
  return <ClickButton onClick={onClick}>Search</ClickButton>;
};

const ClickButton = styled.button`
width: 114px;
height: 50px;
margin-left: 8px;
background-color: #598DAA;
border: none;
@media screen and (max-width: 360px) {
    width: 75px;
   }
`

export default Button;
