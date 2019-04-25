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
    ],
    showPerson : true
  }
 // we call this.setState() to pass the updated object. React will then compare the old
 // and new value to discover the update and accordingly would update ONLY the changed part. 
 toggleName = () => {
    const doesShow = this.state.showPerson;
    this.setState({
       showPerson : !doesShow 
    });
  
 }

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

  /*
  updateNameHandler = (index) => {
    const persons = [...this.state.persons]; 
    

  }
 
  updateCompanyHandler = (event) => {
    this.setState({
      persons : [
        {name : "Nitish", company : event.target.value},
        {name : "Matt", company : "Facebook"},
        {name : "Arthur", company : "DropBox"}
      ]
    })
  }
*/
  deleteUserHandler = (index) => {
    const persons = [...this.state.persons]; 
    persons.splice(index,1);
    this.setState({
      persons : persons
    })
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
  
 


// when ever state value changes, react would re-render the component or rather update the view. It executes render() and not the return(). 
  render() {
    const style ={
      backgroundColor : 'light green',
      border : '1px solid blue',
      margin : '1%',
     
      padding : '2px',
      cursor : 'pointer'
    }

    // This is more elegant way to handle dynamic content 
    //When state changes, react would execute render() which would exdcute return funtion to update the view. 
    // Since react executes render(), We can even build some logic inside render() that would dynalically update the view content. 
    let persons = null;

    if(this.state.showPerson) {
      persons = 
          <div> 
            {
            // curly base indicates that it contains js element or logic
             this.state.persons.map((person, index) => {
               return <Person 
                  name = {person.name} 
                  company = {person.company}
                  deleteUser = {() => this.deleteUserHandler(index)}
                 // updateName = {() => this.updateNameHandler(index, event.target.value)}
                //  updateCompany = {() => this.updateCompanyHandler(index)}
                />
             })   
            }
        </div> 
    }

    return (
      <div className="App">

        {persons}
        <button 
          style = {style} 
          onClick = {this.toggleName}  > Toggle Name </button>
         <button 
          style = {style}
          onClick = {this.nameChangeHandler} > Switch Name - first way 
         </button>         
         <button 
          style = {style} 
          onClick = {this.customNameChangeHandler.bind(this, "Mr. Nitish Bhushan", "Google HQ")} > Custom Name </button>        
         <button 
          style = {style} 
          onClick = { () => this.customNameChangeHandler("Mr. Andrew Kasis", "Macquarie")}> Switch name - second way </button>
      
        

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
