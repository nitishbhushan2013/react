import React, { Component } from "react";

class Counter extends Component {
  state = {
    counter: 1
  };

  render() {
    // view component
    return (
      <React.Fragment>
        <h1> {this.setCounter()} </h1>
        <button> Increment</button>
      </React.Fragment>
    );
  }

  setCounter() {
    return this.state.counter == 0 ? "zero" : this.state.counter;
  }
}

export default Counter;
