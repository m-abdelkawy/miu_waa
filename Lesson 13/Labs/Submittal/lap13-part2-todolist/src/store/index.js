import {createStore} from 'redux';

const initialState={list: []};
// reducer function
const reducer = (state = initialState, action)=>{
    if(action.type === 'add'){
        const newList = [...state.list, action.payload.task];
        return {list: newList};
    }
    else if(action.type==='remove'){
        const newList = [...state.list].filter(task=>task.id !== action.payload.id);
        return {list: newList};
    }

    return state;
}

const store =createStore(reducer);

export default store;