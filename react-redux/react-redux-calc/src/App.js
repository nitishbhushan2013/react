import React,{Component} from 'react';
import './App.css';
import {connect} from 'react-redux';


/**
 * Every container/component has state and props. Since in redux, we dont use local state, thus global state get pass to this container as prop. Also, in redux, everything ( variables or actions) comes through store. 
   * redux concept: In this class component, we need to achieve two main objectives
   * 1. Subscribe to store so that it can get the changed state
   * 2. Dispatch any action generated in this container to store / reducer. 
   *  
   * Also, props is the only way which we can use to bind\map to the action and store.  
   */

   // This would distach action to the store and same action would get invoked in the reduces function 
  const mapDispatchToProps = (dispach) => {
    return { // define these types inside the reducer 
      addHandler : ()=> dispach({type: 'ADD'}),
      substractHander : ()=> dispach({type: 'SUB'}),
      multiplyHander : ()=> dispach({type: 'MUL'})
    }
  }

  // get the state variables through store 
  const mapStateToProps = (state)=>{
    return {
      firstNum : state.firstNum,
      secondNum : state.secondNum,
      result : state.result
    }
  }
class App extends Component {
 
  /*addHandler= () => {
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
*/
  
  render() {
    return (
      <div className="App">
        <h2> Number Calculator </h2>
        <div>First Number : <span> {this.props.firstNum}</span> </div>
        <div>Second Number : <span> {this.props.secondNum}</span> </div>
        <div>Result : <span> {this.props.result}</span> </div>

        {/* In redux, every state variable and method are coming through props.. */}
        <button name="add"  onClick={this.props.addHandler}> Add </button>
        <button name="substract" onClick={this.props.substractHander}> Substract </button>
        <button name="multiply" onClick={this.props.multiplyHander}> Multiply </button>

  
  
        
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
// connect(mapStateToProps, mapDispatchToProps) will returns the HOC and we pass the App to this HOC to get another component. 

