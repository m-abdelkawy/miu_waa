import { createStore } from "redux";

const initialState = { calcResult: 0, todolist: [] };

const reducer = (state = initialState, action) => {
    //calculator part
    if (action.type === 'add')
        return { calcResult: state.calcResult + action.payload.rightOperand, todolist: [...state.todolist] };

    else if (action.type === 'subtract')
        return { calcResult: state.calcResult - action.payload.rightOperand, todolist: [...state.todolist] };

    else if (action.type === 'multiply')
        return { calcResult: state.calcResult * action.payload.rightOperand, todolist: [...state.todolist] };

    else if (action.type === 'divide')
        return { calcResult: state.calcResult / action.payload.rightOperand, todolist: [...state.todolist] };


    //todo list part
    else if (action.type === 'addTask')
        return { calcResult: state.calcResult, todolist: [...state.todolist].concat(action.payload.task) };

    else if (action.type === 'removeTask')
        return { calcResult: state.calcResult, todolist: [...state.todolist].filter(task => task.id !== action.payload.id) };

    return state;
}

const store = createStore(reducer);

export default store;