import React from 'react';
import { Context } from './Context';

class Context3 extends React.Component {
 // It is not possible to use functional component. When state is given as keyword it will throw error when converted to functional component. It is better to use class when we use the stattic keyword. 
  static contextType = Context;
  constructor() {
    super();
  }
  render() {
    console.log(this.context.initialValue);
    return (
      <>
        <h3> Context Type </h3>
        <div>Initial Value : {this.context.counter}</div> <br /> 
        <button onClick={this.context.handleIncrement}> Increment </button>{' '}
        &nbsp;
        <button onClick={this.context.handleDecrement}> Decrement </button>{' '}
        &nbsp;
        <button onClick={this.context.handleReset}> Reset </button>{' '}
      </>
    );
  }
}

export default Context3;
