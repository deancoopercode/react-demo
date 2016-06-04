import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render() {
    return (
      <main>
        <h1>React Demo</h1>
        <nav>
          <Link to='/about'>About</Link>&nbsp;|&nbsp;
          <Link to='/users'>Users</Link>
        </nav>
        {this.props.children}
      </main>
    );
  }
});
