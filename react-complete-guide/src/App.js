import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = { // state is an object 
    persons : [
      {name : "Nitish", company : "Google"},
      {name : "Matt", company : "Facebook"},
      {name : "Arthur", company : "DropBox"}
    ]
  }
// when ever state value changes, react would re-render the component or rather update the view.
  render() {
    return (
      <div className="App">
         <Person name = {this.state.persons[0].name} company = {this.state.persons[0].company}/>
         <Person name = {this.state.persons[1].name} company = {this.state.persons[1].company}/>
         <Person name = {this.state.persons[2].name} company = {this.state.persons[2].company}> Arthur stay at Sydney. </Person>
      </div>
    );
  }
}

export default App;
