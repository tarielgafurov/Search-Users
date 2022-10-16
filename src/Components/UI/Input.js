import React from "react";
import styled from "styled-components";

const Input = ({onChange}) => {
  return (
    <>
      <InputSearch type="text" onChange={onChange} />
    </>
  );
};

const InputSearch = styled.input`
  width: 670px;
  height: 40px;
  background-color: #F2F2F2;
  border: none;
  outline: none;
  font-size: 15px;
  margin-left: 5px;
  @media screen and (max-width: 360px) {
    width: 320px;
   }
`;


export default Input;
