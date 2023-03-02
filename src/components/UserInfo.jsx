import React from "react";
import { UserContext } from "../context/userContext";
import { useContext } from "react";

const UserInfo = () => {
  const { userName, changeUserName } = useContext(UserContext);
  return (
    <>
      <h1>{userName} </h1>
    </>
  );
};

export default UserInfo;
