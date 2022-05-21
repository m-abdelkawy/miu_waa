import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const Counter =()=>{

    const dispatch=useDispatch();
    const counter = useSelector(state=>state.counter);

    const handleIncrement=()=>{
        dispatch({type:'increment'});
    }

    const handleDecrement=()=>{
        dispatch({type:'decrement'});
    }

    let comp=(
        <div>
            <h3>Redux Counter</h3>
            <div>{counter}</div>
            <div>
                <button onClick={handleIncrement}>Increment</button>
                <button onClick={handleDecrement}>Decrement</button>
            </div>
        </div>
    );

    return comp;
}