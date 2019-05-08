import React, {PureComponent} from 'react';
import styles from './Person.module.css'

class Person extends PureComponent {


    state = {};  
  // creation life cycle hook - 2
  // update life cycle hook - 1
 /*
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("[Person.js] getDerivedStateFromProps...");
    return this.state;
  }
*/
  // update life cycle hook - 2
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Person.js] shouldComponentUpdate...");
    // we must evaluate state and returns either true or false 
    return true;
  }

  // update life cycle hook - 3
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Person.js] getSnapshotBeforeUpdate...");
  }

  // creation life cycle hook - 3
  // update life cycle hook - 4
    render() {
        console.log("[Person.js] render...");
        return(
            <div className={this.props.style.join(' ')}> 
                <h3 onClick = {this.props.click}> My name is {this.props.name} and I work at {this.props.company}. </h3>
                <h4> Name : <input type='text' onChange = {this.props.updateName}  defaultValue = {this.props.name}/></h4> 
                <h4> Company : <input type='text' onChange = {this.props.updateCompany}  defaultValue = {this.props.company}/></h4> 
                <button onClick = {this.props.deleteUser}> Delete User</button>
                <h4> { this.props.children} </h4>
            </div>     
        );
    }

    // creation life cycle hook - 4
    componentDidMount() {
        console.log("[Person.js] componentDidMount...");
      }
      // update life cycle hook - 5
      componentDidUpdate(prevProps, prevState) {
        console.log("[Person.js] componentDidUpdate...");
      }
}
export default Person;