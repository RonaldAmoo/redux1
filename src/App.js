import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { addUser, deleteUser } from "./Store/usersAction";
import UsersForm from "./components/UsersForm";
import UserInfo from "./components/UserInfo";

class App extends Component {
  addNewUser = (newUsers) => {
    this.props.addUser(newUsers);
  };
  deleteUser = (user_id) => {
    this.props.deleteUser(user_id);
  };

  render() {
    return (
      <div className="App">
        <UsersForm addUser={this.addNewUser} />
        <div className="App_user-info">
          {this.props.users.map((item) => {
            return (
              <UserInfo
                key={item.id}
                id={item.id}
                name={item.name}
                email={item.email}
                gen={item.gen}
                removeUser={this.deleteUser}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
});
const mapDispatchToProps = {
  addUser: addUser,
  deleteUser: deleteUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
