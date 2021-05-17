import React from "react";
const UserInfo = ({ name, email, gen }) => {
  return (
    <div>
      <h4>Name: {name}</h4>
      <p>Email: {email}</p>
      <p>Gen: {gen}</p>
    </div>
  );
};
export default UserInfo;
