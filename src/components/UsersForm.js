import React, { Component } from "react";

import { Form, Button } from "react-bootstrap";

class UsersForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      date: "",
      amount: "",
      category: "",
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
      date: this.state.date,
      amount: this.state.amount,
      category: this.state.category,
    };
    this.props.addUser(newUser);
    this.setState({
      name: "",
      date: "",
      amount: "",
      category: "",
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit} className="users-inform">
        <Form.Group controlId="formBasic">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Item"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicDate">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            placeholder="Date"
            name="date"
            value={this.state.date}
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicAmount">
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Amount"
            name="amount"
            value={this.state.amount}
            onChange={this.handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formGridState">
          <Form.Label>Category</Form.Label>
          <Form.Control as="select" defaultValue="Choose...">
            <option>Choose...</option>
            <option>Food & Drink</option>
            <option>Accomodation</option>
            <option>Transportation</option>
            <option>Housing & Rent</option>
            <option>Miscellaneous</option>
            name="category" value={this.state.category}
            onChange={this.handleChange}
          </Form.Control>
        </Form.Group>

        <Button variant="success" type="submit">
          Add
        </Button>
      </Form>
    );
  }
}

export default UsersForm;
