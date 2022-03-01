import React from "react";
import { Context } from "./Context";

function Context2()
{
  const context13 =  React.useContext(Context)
  // Converted into functional component. The component given as class component converted into functional component.
return(
   <Context.Consumer>
{
          (context13)=>{
             return(
             <>
             <h3>Consumer</h3>
           
           <div> Initial Value: {context13.counter} </div> <br></br>
           <button onClick={context13.handleIncrement}>Increment</button>&nbsp;
           <button onClick={context13.handleDecrement}>Decrement</button>&nbsp;
           <button onClick={context13.handleReset}>Reset</button>&nbsp;
           </>
)

            


          }




       }







        </Context.Consumer>






    )
}

export default Context2;
