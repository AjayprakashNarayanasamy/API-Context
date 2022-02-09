import React from "react";
import { Context } from "./Context";


function Context1 ()
{
    const context1 =  React.useContext(Context)
    return(
   <>
    <h3>Use Context</h3>
    <div>Initial Value:&nbsp;{context1.counter }</div><br></br>
    <button onClick={context1.handleIncrement}>Increment</button>&nbsp;
    <button onClick={context1.handleDecrement}>Decrement</button>&nbsp;
    <button onClick={context1.handleReset}>Reset</button>&nbsp;&nbsp;
      <br>
      </br>
     

    </>

    )
}
export default Context1;