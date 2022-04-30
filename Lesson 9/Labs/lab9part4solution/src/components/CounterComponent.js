import React, { useState } from "react";

const Counter = (props)=>{
   let counterComponent=(
       <div>
           <h3>{props.counter}</h3>
           <table>
               <tbody>
                   <tr>
                       <td>
                           <button onClick={()=>props.increment(props.value)}>+ {props.value}</button>
                       </td>
                       <td>
                           <button onClick={()=>props.decrement(props.value)}>- {props.value}</button>
                       </td>
                   </tr>
               </tbody>
           </table>
       </div>
   );
    
   return counterComponent;
}

export default Counter;