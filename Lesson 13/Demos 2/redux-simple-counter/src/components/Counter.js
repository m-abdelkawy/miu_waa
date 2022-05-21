import { useDispatch, useSelector } from "react-redux"

const Counter = ()=>{
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter);

    const incrementHandler = ()=>{
        dispatch({type: 'increment'});
    }

    const decrementHandler = ()=>{
        dispatch({type: 'decrement'});
    }

    let page = (
        <div>
            <div>{counter}</div>
            <div>
                <button onClick={incrementHandler}>increment</button>
                <button onClick={decrementHandler}>decrement</button>
            </div>
        </div>
    );

    return page;
}

export default Counter;