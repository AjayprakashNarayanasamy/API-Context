import  {Context}  from './Context';
import React from "react";
import './App.css';
import Context1 from './Context1';
import Context2 from "./Context2"
import Context3 from './Context3';

function App() {
  const [counter , setCounter] = React.useState(0);
  const handleIncrement =()=>
  {
     setCounter(counter+1);
  }
  const handleDecrement = () =>
  {
     setCounter(counter-1);
  }
  const handleReset = () =>
  {
    setCounter(0);
  }
  return (
    <div >

      <h3>API CONTEXT</h3>
      <div>Initial value: {counter}</div> <br></br>
      <button onClick={handleIncrement}>Increment</button>&nbsp;&nbsp;
      <button onClick={handleDecrement}>Decrement</button>&nbsp;&nbsp;
      <button onClick={handleReset}>Reset</button>
      <Context.Provider value = {{counter:counter,handleIncrement:handleIncrement,handleDecrement:handleDecrement,handleReset:handleReset}}>

        <Context1></Context1>
        <Context2></Context2>
        <Context3></Context3>
      </Context.Provider>

     
    </div>
  );
}

export default App;
 