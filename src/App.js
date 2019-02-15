import React, { Component } from 'react';
import AppContainer from './components/app-container';
import AppHeader from './components/header';
import "bootstrap/dist/css/bootstrap.min.css"
class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader/>
        <h3 className="text-capitalize text-center">
          Add ToDo
        </h3>
        <AppContainer/>
      </div>
    );
  }
}

export default App;
