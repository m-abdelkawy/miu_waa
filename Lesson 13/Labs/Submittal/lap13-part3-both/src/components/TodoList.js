import React from "react";
import { useDispatch, useSelector } from "react-redux";

const TodoList = () => {

    const dispatch = useDispatch();
    const todolist = useSelector(state => state.todolist);

    const handleRemove = (e) => {
        dispatch({ type: 'removeTask', payload: { id: parseInt(e.target.value) } });
        console.log(e.target.value);
    }

    const renderList = (list) => {
        return list.map(task => {
            return (
                <tr key={task.id}>
                    <td>{task.id}</td>
                    <td>{task.name}</td>
                    <td>
                        <button value={task.id} onClick={handleRemove}>remove</button>
                    </td>
                </tr>
            )
        })
    }

    let page = (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        renderList(todolist)
                    }
                </tbody>
            </table>
        </div>
    );
    return page;
}

export default TodoList;