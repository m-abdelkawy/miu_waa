import React from "react";
import { useSelector } from "react-redux";

const Both = () => {

    const result = useSelector(state => state.calcResult);
    const todolist = useSelector(state => state.todolist);


    const renderList = (list) => {
        return list.map(task => {
            return (
                <tr key={task.id}>
                    <td>{task.id}</td>
                    <td>{task.name}</td>
                </tr>
            )
        });
    }

    const page = (
        <div>
            <h3>Calculator Result: {result}</h3>
            <h3>The Todo list</h3>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
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

export default Both;