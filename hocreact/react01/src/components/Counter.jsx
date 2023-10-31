import React, { Component } from "react";

export class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    console.log("1. constructor");
  }
  componentDidMount() {
    console.log("3. componentDidMount");
  }
  componentDidUpdate() {
    console.log("4. componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("5. componentWillUnmount");
  }
  render() {
    console.log("2. render");
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Click me
        </button>
      </div>
    );
  }
}

export default Counter;
