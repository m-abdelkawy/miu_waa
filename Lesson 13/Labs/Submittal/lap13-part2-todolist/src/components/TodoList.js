import React from "react";
import { useDispatch, useSelector } from "react-redux";



const TodoList = () => {


    const dispatch = useDispatch();
    const todoList = useSelector(state => state.list);

    const handelRemoveTask = (e) => {
        dispatch({type:'remove', payload:{id: parseInt(e.target.value)}})
    }

    const renderList = (list) => {
        return list.map(task => {
            return (
                <tr key={task.id}>
                    <td>{task.id}</td>
                    <td>{task.name}</td>
                    <td>
                        <button value={task.id} onClick={handelRemoveTask}>remove</button>
                    </td>
                </tr>
            )
        })
    }

    const page = (
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
                        renderList(todoList)
                    }
                </tbody>
            </table>
        </div>
    );

    return page;
}

export default TodoList;