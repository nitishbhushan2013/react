import React,{Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNum:30,
      secondNum:10,
     result:0
    }
  }
  addHandler= () => {
    let add = this.state.firstNum + this.state.secondNum;
    this.setState(
      {...this.state, result: add}
    )
  }

  substractHander = () => {
    let sub = this.state.firstNum - this.state.secondNum;
    this.setState(
      {...this.state, result: sub}
    )
  }

  multiplyHander = () =>{
    let mul = this.state.firstNum * this.state.secondNum;
    this.setState(
      {...this.state, result: mul}
    )
  }

  render() {
    return (
      <div className="App">
        <h2> Number Calculator </h2>
        <div>First Number : <span> {this.state.firstNum}</span> </div>
        <div>Second Number : <span> {this.state.secondNum}</span> </div>
        <div>Result : <span> {this.state.result}</span> </div>

        <button name="add"  onClick={this.addHandler}> Add </button>
        <button name="substract" onClick={this.substractHander}> Substract </button>
        <button name="multiply" onClick={this.multiplyHander}> Multiply </button>

  
  
        
      </div>
    );
  }
}

export default App;
