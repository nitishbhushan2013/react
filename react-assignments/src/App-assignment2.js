import React, {Component} from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {

  state = {
    inputText : ''
  }

  updateInputTextHandler = (event) => {
    this.setState({
      inputText : event.target.value
    })
   
  }

  removeCharHandler = (index)=>{
    //get the immutable array
    const textArray = this.state.inputText.split("");
    
    // perform the operation
    //textArray.splice(index,1);
    // update the inputString
    this.setState({
      //inputText : textArray.join()
    })
  }

  render() {
      return (
      <div className="App">
        <h3> React is ready for the show </h3>

        <div>
          Enter text:
          <input type='text'  
                onChange={this.updateInputTextHandler}
                value = {this.state.inputText}/>
        </div>
        {this.state.inputText.length}
        <Validation count = {this.state.inputText.length} />
       <br/>
       
          {
            this.state.inputText.split("").map((ch,index) => {
              return <Char 
              key = {index}
              char = {ch}
              clicked = {this.removeCharHandler(index)}
              />
            })
        }
      </div>
    );
  }
}
export default App;
