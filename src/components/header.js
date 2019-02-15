import React, { Component } from 'react';

class AppHeader extends Component {
  render() {
    return (
      <div className="container">
      <div className="jumbotron p-4 text-center mt-5">
        <h2>
          ToDo App
        </h2>
        Maintain your lineups and have a check on them.
      </div>
      </div>
    );
  }
}

export default AppHeader;
