import React from "react";
import { UserContext } from "../context/userContext";
import { useContext } from "react";

const ChangeUser = () => {
  const { userName, changeUserName } = useContext(UserContext);

  return (
    <button
      type="button"
      className="btn btn-success"
      onClick={() =>
        changeUserName(userName === "Bill" ? "new Bill 2" : "some name...")
      }
    >
      ChangeUser
    </button>
  );
};

export default ChangeUser;
