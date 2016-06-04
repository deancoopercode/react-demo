import React from 'react';
import Person from './Person.js';

export default React.createClass({
  getInitialState() {
    return {
      users: ["Bob", "Fred"]
    };
  },

  addUser() {
    var newUsers = this.state.users;
    newUsers.push("Larry");
    this.setState({users: newUsers});
  },

  users() {
    return this.state.users.map((user, i) => {
      return <Person key={i} name={user} />;
    });
  },

  render() {
    return (
      <div>
        <ul>{this.users()}</ul>
        <button type="button" onClick={this.addUser}>Add User</button>
      </div>
    );
  }
});

