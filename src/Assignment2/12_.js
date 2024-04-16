//12_.js
import React, { Component } from 'react';
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  incrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.incrementCount}>Increment</button>
        <p>Count: {this.state.count}</p>
      </div>
    );
  }
}
export default Counter;
