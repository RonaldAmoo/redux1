import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { editUser } from "../Store/usersAction";

class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.user.name,
      date: props.user.date,
      amount: props.user.amount,
      category: props.user.category,
    };
    this.id = props.match.params.id;
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const updatedInfo = {
      name: this.state.name,
      date: this.state.date,
      amount: this.state.amount,
      category: this.state.category,
    };
    this.props.editUser(this.id, updatedInfo);
    this.setState({
      name: "",
      date: "",
      amount: "",
      category: "",
    });
    this.props.history.push("/");
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
          Edit
        </Button>
      </Form>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({
  user: state.users.find((user) => user.id === ownProps.match.params.id),
});
const mapDispatchToProps = {
  editUser: editUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(EditForm);
