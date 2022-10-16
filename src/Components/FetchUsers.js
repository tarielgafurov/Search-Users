import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "./UI/Button";
import Input from "./UI/Input";

const FetchUsers = () => {
  const [users, setUsers] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users?_limit=6")
      .then((res) => res.json())
      .then((res) => {
        setUsers(res);
      });
  }, []);

  const filteredUsers = users.filter((user) => {
    return user.name.toLowerCase().includes(value.toLowerCase());
  });

  return (
    <div>
      <SearchContainer>
        <Input
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <Button />
      </SearchContainer>
      <h2>Search results</h2>
      {!value == filteredUsers && (
        <ContainerNotFound>
          <h2>NOT FOUND</h2>
        </ContainerNotFound>
      )}
      <h2>USERS</h2>
      <GlobalContainer>
        {filteredUsers.map((el, id) => {
          return (
            <UserContainer key={id}>
              <UserName>{el.name}</UserName>
              <UserEmail>email : {el.email}</UserEmail>
              <UserPhone>phone : {el.phone}</UserPhone>
            </UserContainer>
          );
        })}
      </GlobalContainer>
    </div>
  );
};

const SearchContainer = styled.div`
  width: 800px;
  height: 50px;
  background: #ececec;
  border-radius: 8px px 0px 8px;
  margin: auto;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media screen and (max-width: 360px) {
    width: 350px;
  }
`;

const ContainerNotFound = styled.div`
  width: 400px;
  height: 100px;
  background-color: #f4f4f4;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Roboto";
  font-size: 18px;
  margin: auto;
  @media screen and (max-width: 360px) {
    width: 280px;
    height: 150px;
    font-size: 15px;
  }
`;

const GlobalContainer = styled.div`
  width: 800px;
  height: 300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
  @media screen and (max-width: 360px) {
    width: 340px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
  }
`;

const UserContainer = styled.div`
  width: 254.45px;
  height: 141.68px;
  background-color: #e5e5e5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 18.64px;
  @media screen and (max-width: 360px) {
    width: 300px;
    display: flex;
    flex-direction: column;
  }
`;
const UserName = styled.span`
  font-family: "Roboto";
  font-style: normal;
  font-size: 16px;
  margin-bottom: 16px;
  text-align: center;
  color: #000000;
`;

const UserEmail = styled.span`
  font-family: "Roboto";
  font-style: normal;
  font-size: 16px;
  text-align: center;
  color: #000000;
`;
const UserPhone = styled.span`
  font-family: "Roboto";
  font-style: normal;
  font-size: 16px;
  margin-top: 16px;
  text-align: center;
  color: #000000;
`;

export default FetchUsers;
