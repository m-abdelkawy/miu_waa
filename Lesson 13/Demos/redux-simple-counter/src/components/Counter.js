import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Counter=()=>{
    const dispatch =useDispatch();

    // select state.counter from the store, then
    // get a subscription to the provided selector
    const counter =useSelector(state=>state.counter);

    // dispatch increment and decrement actions to the reducer function in the store
    const incrementHandler=()=>{
        dispatch({type:'increment'});
    }

    const decrementHandler=()=>{
        dispatch({type:'decrement'});
    }

    return(
        <div>
            <h1>Redux Counter</h1>
            <div>{counter}</div>
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
        </div>
    );
};

export default Counter;