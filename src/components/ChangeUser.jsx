import React from "react";
import { UserContext } from "../context/userContext";
import { useContext } from "react";

const ChangeUser = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <button
      type="button"
      class="btn btn-success"
      onClick={() => setUser(user === "Bill" ? "new Bill 2" : "some name...")}
    >
      ChangeUser
    </button>
  );
};

export default ChangeUser;
