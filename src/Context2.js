import React from "react";
import { Context } from "./Context";

function Context2()
{

    
    return(

        <Context.Consumer>

       {
          (context1)=>{

            return(
             <>
             <h3>Consumer</h3>
           
           <div> Initial Value: {context1.counter} </div> <br></br>
           <button onClick={context1.handleIncrement}>Increment</button>&nbsp;
           <button onClick={context1.handleDecrement}>Decrement</button>&nbsp;
           <button onClick={context1.handleReset}>Reset</button>&nbsp;
             
             
             
             
             
             </>





            )

            


          }




       }







        </Context.Consumer>






    )
}

export default Context2;