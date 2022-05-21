import { useDispatch, useSelector } from "react-redux";


const Counter2=()=>{

    const dispatch = useDispatch();

    const counter = useSelector(state => state.counter);

    const incrementHandler=()=>{
        dispatch({type:'increment'});
    }

    const decrementHandler=()=>{
        dispatch({type:"decrement"});
    }

    const increaseHandler=()=>{
        dispatch({type:'increase', amount: 5});
    }

    const decreaseHandler=()=>{
        dispatch({type:'decrease', amount: 5});
    }

    let page =(
        <div>
            <div>Redux Counter </div>
            <div>{counter}</div>
            <div>
                <button onClick={incrementHandler}>Increment By 1</button>
                <button onClick={increaseHandler}>Increment By 5</button>
                <button onClick={decreaseHandler}>Decrement By 5</button>
                <button onClick={decrementHandler}>Decrement By 1</button>
            </div>
        </div>
    );

    return page;
}

export default Counter2;