import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { editUser } from "../Store/usersAction";

class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.user.name,
      email: props.user.email,
      gen: props.user.gen,
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
      email: this.state.email,
      gen: this.state.gen,
    };
    this.props.editUser(this.id, updatedInfo);
    this.setState({
      name: "",
      email: "",
      gen: "",
    });
    this.props.history.push("/");
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
            Edit User
          </Button>
        </Form>
      </div>
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
