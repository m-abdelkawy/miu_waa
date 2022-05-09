import { createStore } from 'redux';

//reducer function
const counterReducer = (state = { counter: 0 }, action) => {
    console.log("inside reducer function");

    //debugger;
    if (action.type === 'increment')
        state = { counter: state.counter + 1 }

    else if (action.type === 'decrement')
        state = { counter: state.counter - 1 }

    return state;
}

//create the store
const store = createStore(counterReducer);

//export the store
export default store;