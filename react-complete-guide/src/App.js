import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import Emp from './Employee/Employee';

class App extends Component {
  state = { // state is an object 
    persons : [
      {name : "Nitish", company : "Google"},
      {name : "Matt", company : "Facebook"},
      {name : "Arthur", company : "DropBox"}
    ],
    employee : [
      {name : "Mathew Phil"},
      {name : "Scott Morrison"}
    ]
  }
 // we call this.setState() to pass the updated object. React will then compare the old
 // and new value to discover the update and accordingly would update ONLY the changed part. 
  
  nameChangeHandler = () => {
    this.setState({
      persons : [
        {name : "Nitish Bhushan", company : "Google"},
        {name : "Matt", company : "Facebook"},
        {name : "Arthur", company : "DropBox"}
      ]
    });
  }

  customNameChangeHandler = (newName, newCompany) => {
    this.setState({
      persons : [
        {name : newName, company : newCompany},
        {name : "Matt", company : "Facebook"},
        {name : "Arthur", company : "Macquarie"}
      ]
    });
  }

 
  updateEmployee = (event) => {
    //alert(event.target.value);
    this.setState({
      employee : [
        {name : event.target.value},
        {name : "Scott Morrison"}
      ]
    });
  }
  


// when ever state value changes, react would re-render the component or rather update the view.
  render() {
    return (
      <div className="App">
         <Person 
           name = {this.state.persons[0].name} 
           company = {this.state.persons[0].company} 
           click = {this.nameChangeHandler}
         />

         <Person 
          name = {this.state.persons[1].name} 
          company = {this.state.persons[1].company}
          />

         <Person 
          name = {this.state.persons[2].name} 
          company = {this.state.persons[2].company}> Arthur stay at Sydney. </Person>

         <button onClick = {this.nameChangeHandler} > Switch Name - first way </button>
         <button onClick = {this.customNameChangeHandler.bind(this, "Mr. Nitish Bhushan", "Google HQ")} > Custom Name </button>
         <button onClick = { () => this.customNameChangeHandler("Mr. Andrew Kasis", "Macquarie")}> Switch name - second way </button>
       
        
         <h2> <hr></hr>Two way communication between components</h2>
         <Emp 
            name = {this.state.employee[0].name}
            changed = {this.updateEmployee}
         /> 
      </div>
    );
  }
}

export default App;
