import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const UserInfo = ({ name, date, amount, category, id, removeUser }) => {
  const handleClick = () => {
    removeUser(id);
  };
  return (
    <div>
      <h4>Name: {name}</h4>
      <p>Date: {date}</p>
      <p>Amount: {amount}</p>
      <p>Category:{category}</p>
      <Button variant="success" onClick={handleClick}>
        Remove
      </Button>
      <Link to={`/edit/${id}`}>
        <Button variant="success">Edit</Button>
      </Link>
      <hr />
    </div>
  );
};
export default UserInfo;
