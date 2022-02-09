import React from 'react';
import { Context } from './Context';

class Context3 extends React.Component {
 
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
