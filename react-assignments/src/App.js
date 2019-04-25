import React, {Component} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput.js';

class App extends Component {

  state = {
    userName :[
      {name : 'Nitish Bhushan'},
      {name : 'Scott Morrison'},
    ]
  }

  userNameChangeHandler = (event) => {
    this.setState({
      userName :[
        {name : event.target.value},
        {name : 'Jim Cook'},
      ]
    });
  }


  render() {
      return (
      <div className="App">
        <h3> React is ready for the show </h3>
        <UserInput
          nameChange = {this.userNameChangeHandler}
          />

        <UserOutput 
          userName1 = {this.state.userName[0].name}
          userName2 = {this.state.userName[1].name}
        />
      
     
      </div>
    );
  }
}
export default App;
