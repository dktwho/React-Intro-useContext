import React from "react";
import { UserContext } from "../context/userContext";
import { useContext } from "react";

const UserInfo = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <h1>{user} </h1>
    </>
  );
};

export default UserInfo;
