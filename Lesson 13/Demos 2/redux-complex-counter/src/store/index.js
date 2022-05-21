import { createStore } from 'redux';

const counterReducer = (state = { counter: 0}, action) => {
    if (action.type === 'increment') {
        return { counter: state.counter + action.payload };
    }
    if (action.type === 'decrement') {
        return { counter: state.counter - action.payload };
    }

    return state;
}

const store = createStore(counterReducer);

export default store;