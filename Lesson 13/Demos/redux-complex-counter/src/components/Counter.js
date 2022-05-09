import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter);

    const incrementHandle = (amount) => {
        dispatch({ type: 'increment', payload: amount });
    }

    const decrementHandle=(amount)=>{
        dispatch({type:'decrement', payload: amount});
    }

    return(
<div>
    <h3>Redux Counter</h3>
    <div>{counter}</div>
    <div>
        <button onClick={()=>incrementHandle(5)}>Increment By 5</button>
        <button onClick={()=>decrementHandle(5)}>Decrement By 5</button>
        <br/>
        <button onClick={()=>incrementHandle(1)}>Decrement By 1</button>
        <button onClick={()=>decrementHandle(1)}>Decrement By 1</button>
    </div>
</div>
    );
}