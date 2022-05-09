import { createStore } from "redux";

const initialState={counter:0, greeting:'Hello'};
const reducer=(state=initialState, action)=>{
    //debugger;
    if(action.type==='increment'){
        return {
            counter: state.counter+1,
            greeting: state.greeting
        }
    }
    else if(action.type==='decrement'){
        return {
            counter: state.counter-1,
            greeting:state.greeting
        }
    }else if(action.type==='getGreeting'){
        return{
            counter: state.counter,
            greeting: "Hello" + " " + action.payload.name
        }
    }
    return state;
}

const store = createStore(reducer);

export default store;