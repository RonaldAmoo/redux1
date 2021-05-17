import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { addUser } from "./Store/usersAction";
import UsersForm from "./components/UsersForm";
import UserInfo from "./components/UserInfo";

class App extends Component {
  addNewUser = (newUsers) => {
    this.props.addUser(newUsers);
  };

  render() {
    return (
      <div className="App">
        <UsersForm addUser={this.addNewUser} />
        <div className="App_user-info">
          {this.props.users.map((item, index) => {
            return (
              <UserInfo
                key={index}
                name={item.name}
                email={item.email}
                gen={item.gen}
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
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
