import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
         <Person name = "Nitish" company = "Google"/>
         <Person name = "Matt" company = "Facebook"/>
         <Person name = "Arthur" company = "DropBox"/>
      </div>
    );
  }
}

export default App;
