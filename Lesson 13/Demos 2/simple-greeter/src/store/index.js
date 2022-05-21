import { createStore } from "redux";


const initalState = {greeting: 'Hello'}

const reducer = (state = initalState, action)=>{
    
    if(action.type='greeting' && action.name){
        return {greeting: initalState.greeting + ' ' + action.name};
    }

    return state;
}

const store = createStore(reducer);

export default store;