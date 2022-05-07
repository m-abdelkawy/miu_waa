import React, { useState } from 'react';

export const TodoList = (props) => {
    const cleantask = { id: 0, name: '' };

    const [task, setTask] = useState(cleantask);
    const[counter, setCounter]=useState(0);

    const [todolist, setTodolist] = useState([]);
    const [donelist, setDonelist] = useState([]);

    const renderTaskList = (taskList, actionMethod, buttonText) => {
        return (
            taskList.map(task => {
                return (
                    <tr key={task.id}>
                        <td>{task.id}</td>
                        <td>{task.name}</td>
                        <td>
                            <button value={task.id} onClick={actionMethod}>{buttonText}</button>
                        </td>
                    </tr>
                )
            })
        )
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        setTodolist(todolist.concat(task));
        //clear fields
        setTask(cleantask);
        setCounter(counter+1);
    }

    const handleFieldChange=(e)=>{
        setTask({...task, ['id']:counter, [e.target.name]:e.target.value});
    }

    const doTask = (e) => {
        debugger;
        const newTodolist = todolist.filter(task => task.id !== parseInt(e.target.value));
        const taskdone = todolist.find(task => task.id === parseInt(e.target.value));

        setTodolist(newTodolist);
        setDonelist([...donelist, taskdone]);
    }

    const undoTask = (e) => {
        const newDonelist = donelist.filter(task => task.id !== parseInt(e.target.value));
        const tasktodo = donelist.find(task => task.id === parseInt(e.target.value));

        setDonelist(newDonelist);
        setTodolist([...todolist, tasktodo])
    }

    let page = (
        <div>
            <h2>Add a new task</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    Task
                    <input
                        type="text"
                        placeholder='Enter task'
                        name='name'
                        value={task.name}
                        onChange={handleFieldChange} />
                </div>
                <div>
                    <button>Add Task</button>
                </div>
            </form>

            <br />
            <br />
            <h2>Todo List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Task Id</th>
                        <th>Task Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        renderTaskList(todolist, doTask, 'Do')
                    }
                </tbody>
            </table>

            <br />
            <br />
            <h2>Done List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Task Id</th>
                        <th>Task Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        renderTaskList(donelist, undoTask, 'Undo')
                    }
                </tbody>
            </table>
        </div>
    );

    return page;
}