import React, { useState } from "react";

const Counter = (props)=>{

    const[counterValue, setCounterValue] = useState(0);

    const increment=()=>{
        setCounterValue(counterValue + props.value);
    }

    const decrement=()=>{
        setCounterValue(counterValue - props.value);
    }

    let counterComponent = (
        <div>
            <h3>{counterValue}</h3>
            <br/>
            <button onClick={increment}>+ {props.value}</button>
            <button onClick={decrement}>- {props.value}</button>
        </div>
    );
    return counterComponent;
}

export default Counter;