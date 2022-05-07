import React, { Component } from "react";
import connect from "react-redux/lib/connect/connect";
import { fetchUsers } from "../actions/index";

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map((user) => {
      return <li key={user.id}>{user.name}</li>;
    });
  }

  render() {
    return (
      <div>
        Heres a big list
        <ul>{this.renderUsers()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.users };
}

function loadData() {
  console.log("i will loadData");
}
export { loadData };
export default connect(mapStateToProps, { fetchUsers })(UsersList);
