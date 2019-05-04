import React, { Component } from 'react';
import Person from './Person/Person';
class Persons extends Component {

  state = {};
  // creation life cycle hook - 2
  // update life cycle hook - 1
  
  /*
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("[Persons.js] getDerivedStateFromProps...");
    return this.state;
  }
*/
  // update life cycle hook - 2
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Persons.js] shouldComponentUpdate...");
    // we must evaluate state and returns either true or false 
    return true;
  }

  // update life cycle hook - 3
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getSnapshotBeforeUpdate...");
  }

  // creation life cycle hook - 3
  // update life cycle hook - 4
    render(){
      console.log("[Persons.js] render...");
      return(
        this.props.persons.map((person, index) => {
          return <Person 
             key = {person.id}
             name = {person.name} 
             company = {person.company}
             updateName = {(event) => this.props.updateName(event, index)} // since its onChange event, so it accept event as a function prameter. 
             updateCompany = {(event) => this.props.updateCompany(event, index)}
             deleteUser = {() => this.props.delete(index)}
             style = {this.props.classes}
           />
        })
      );
    }
    // creation life cycle hook - 4
    componentDidMount() {
      console.log("[Persons.js] componentDidMount...");
    }
    // update life cycle hook - 5
    componentDidUpdate(prevProps, prevState) {
      console.log("[Persons.js] componentDidUpdate...");
    }
}

export default Persons;