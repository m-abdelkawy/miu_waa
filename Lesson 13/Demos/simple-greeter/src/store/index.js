import { createStore } from "redux";


const greeterReducer = (state = { greeting: 'Hello' }, action) => {
    if (action.type === 'getGreeting')
        return { greeting: 'Hello' + ' ' + action.payload.name };
    return state;
}

const store = createStore(greeterReducer);

export default store;

