import React, { useState } from "react";

const CounterComponent = ({numState ,numCounter, setStateFunction})=>{
   
    const increment=()=>{
        setStateFunction(numState+numCounter);
    }

    const decrement=()=>{
        setStateFunction(numState-numCounter);
    }

    return (
        <div>
            <header>
                <h3>{numState}</h3>
            </header>
            <table>
                <tbody>
                    <tr>
                        <td><button onClick={increment}>+ {numCounter}</button></td>
                        <td><button onClick={decrement}>- {numCounter}</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default CounterComponent;