import React from 'react';
import Person from './Person.js';

export default React.createClass({
  getInitialState() {
    return {
      users: ["Bob", "Fred"],
      newUser: ""
    };
  },

  updateName(e) {
    this.setState({newUser: e.target.value});
  },

  addUser() {
    var newUsers = this.state.users;
    newUsers.push(this.state.newUser);
    this.setState({users: newUsers, newUser: ""});
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
        <input onChange={this.updateName} value={this.state.newUser} type="text" placeholder="Name" />
        <button type="button" onClick={this.addUser}>Add User</button>
      </div>
    );
  }
});

