import React, { Component } from "react";

import { Form, Button } from "react-bootstrap";

class UsersForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      gen: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state.name);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      gen: this.state.gen,
    };
    this.props.addUser(newUser);
    this.setState({
      name: "",
      email: "",
      gen: "",
    });
  };

  render() {
    return (
      <div className="users-inform">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="etext"
              placeholder="Enter name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Gen</Form.Label>
            <Form.Control
              type="number"
              placeholder="Gen"
              name="gen"
              value={this.state.gen}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Button variant="danger" type="submit">
            Add User
          </Button>
        </Form>
      </div>
    );
  }
}

export default UsersForm;
