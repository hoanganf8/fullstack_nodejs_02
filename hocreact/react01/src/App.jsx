import React from "react";
import Login from "./components/Login";
import Counter from "./components/Counter";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
    this.message = "";
  }

  render() {
    return (
      <div>
        {this.state.show && <Counter />}
        <hr />
        <button
          onClick={() => {
            this.setState({ show: !this.state.show });
          }}
        >
          Toggle
        </button>
      </div>
    );
  }
}

export default App;
