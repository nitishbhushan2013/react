import React, { PureComponent } from 'react';

import styles from './App.module.css';
import Persons from '../components/Persons/Persons';
import Emp from '../components/Employee/Employee';
import Cockpit from '../components/Cockpit/Cockpit';


/*  Component Creation 
*     constructor()
*     static getDerivedStateFromProps()
*      render()
*     componentDidMount()
*/

/*  Component update 
*     static getDerivedStateFromProps()
*      shouldComponentUpdate(nextProps, nextState) : Allow us to cancel the update or rendering process. used cautionaly to get performance boost or cancel unnecesary rendering. 
*      render() ==> update child cpomponents states 
*     getSnapshotBeforeUpdate(prevProps, prevState) : Allow us to get the user scrolling position or any DOM state before the update so that we might adjust the UI view and user scrolling position as it was earlier before update. 
*     componentDidUpdate() - may be used to call the HTTP req method but MUST not call setState() synchronously as it may un necessary re render the view. SetState() may be used as a result of Async process though. 
*/
class App extends PureComponent {
  //construct lifycycle -1
  constructor(props) {
    console.log("[App.js] constructor...");
    super(props);
    this.state = { // state is an object 
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
        {id : 1, name : newName, company : newCompany},
        {id : 2, name : "Matt", company : "Facebook"},
        {id : 3, name : "Arthur", company : "Macquarie"}
      ]
    });
  }

  updateNameHandler = (event, index) => {
     const persons = [...this.state.persons]; // spread function will return the new array and will not alter the original array. 
     persons[index].name = event.target.value;
     this.setState({
        persons : persons
     })
  }
  
  updateCompanyHandler = (event, index) => {
    const persons = [...this.state.persons];  
    persons[index].company = event.target.value;
    this.setState({
       persons : persons
    })
 }

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
  
 
// creation life cycle hook - 2
  // update life cycle hook - 1
  /* static getDerivedStateFromProps(nextProps, prevState) {
    console.log("[App.js] getDerivedStateFromProps...");
    return this.state;
  }
  */

  // update life cycle hook - 2
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate...");
    // we must evaluate state and returns either true or false 
    return true;
  }

  // update life cycle hook - 3
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[App.js] getSnapshotBeforeUpdate...");
  }

  

// when ever state value changes, react would re-render the component or rather update the view. It executes render() and not the return(). 
  // creation life cycle hook - 3
  // update life cycle hook - 4
  render() {
    console.log("[App.js] render...");
    const style ={
      backgroundColor : 'red',
      color : 'white',
      border : '1px solid blue',
      margin : '1%',
     
      padding : '2px',
      cursor : 'pointer'
    }

    // This is more elegant way to handle dynamic content 
    //When state changes, react would execute render() which would exdcute return funtion to update the view. 
    // Since react executes render(), We can even build some logic inside render() that would dynalically update the view content. 
    let persons = null;
    let classes  = ['Person', 'Green'];
    
    if(this.state.persons.length ===2)
     classes = ['Person', 'Orange'];
    else if(this.state.persons.length ===1)
    classes = ['Person', 'Red', 'Bold'];


    if(this.state.showPerson) {
      persons = 
          <div> 
            <Persons 
              persons={this.state.persons}
              updateName={this.updateNameHandler}
              updateCompany={this.updateCompanyHandler}
              delete={this.deleteUserHandler}
              classes={classes}
            />
        </div> 
        style.backgroundColor = 'green';
    }

    return (
      <div className={styles.App}>
        {persons}
        <Cockpit
          toggleName={this.toggleName}
          nameChangeHandler={this.nameChangeHandler}
          customNameChangeHandler={this.customNameChangeHandler}
        />

         <Emp 
            name = {this.state.employee[0].name}
            changed = {this.updateEmployee}
         />
      </div>
    );
  }

  // creation life cycle hook - 4
  componentDidMount() {
    console.log("[App.js] componentDidMount...");
  }
  // update life cycle hook - 5
  componentDidUpdate(prevProps, prevState) {
    console.log("[App.js] componentDidUpdate...");
  }
}

export default App;
