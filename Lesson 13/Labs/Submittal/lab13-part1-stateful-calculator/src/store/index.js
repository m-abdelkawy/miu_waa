import { createStore } from 'redux';

const initialState = {result: 0 }

// define the reducer function
const calcReducer = (state =  initialState , action) => {
    if (action.type === 'add') {
        return { result: state.result + action.payload.rightOperand };
    } else if (action.type === 'subtract') {
        return { result: state.result - action.payload.rightOperand };
    } else if (action.type === 'multiply') {
        return { result: state.result * action.payload.rightOperand };
    } else if (action.type === 'divide') {
        return { result: state.result / action.payload.rightOperand };
    }

    return state;
}

// create the store
const store = createStore(calcReducer);

// export the store
export default store;