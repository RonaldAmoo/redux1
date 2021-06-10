import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const UserInfo = ({ name, email, gen, id, removeUser }) => {
  const handleClick = () => {
    removeUser(id);
  };
  return (
    <div>
      <h4>Name: {name}</h4>
      <p>Email: {email}</p>
      <p>Gen: {gen}</p>
      <Button variant="danger" onClick={handleClick}>
        Remove User
      </Button>
      <Link to={`/edit/${id}`}>
        <Button variant="danger">Edit User</Button>
      </Link>
      <hr />
    </div>
  );
};
export default UserInfo;
