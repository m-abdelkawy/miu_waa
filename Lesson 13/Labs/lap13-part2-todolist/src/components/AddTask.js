import React, { useState } from "react";
import { useDispatch } from "react-redux";

const AddTask = () => {

    const dispatch = useDispatch();

    const cleanTask = { id: 0, name: '' };
    const [task, setTask] = useState(cleanTask);

    const [counterId, setCounterId] = useState(0);

    const handleFieldChange = (e) => {
        setTask({ id: counterId, [e.target.name]: e.target.value });
    }

    const handleAddTask = (e) => {
        e.preventDefault();
        if (!task.name) {
            return;
        }
        setCounterId(counterId + 1);
        dispatch({ type: 'add', payload: { task: task } });

        // clear form
        setTask(cleanTask);
    }


    const page = (
        <div>
            <form>
            <div>
                <input type='text' name="name" placeholder="Enter Task to do" value={task.name} onChange={handleFieldChange} />
            </div>
            <div>
                <button type="submit" onClick={handleAddTask}>Add Task</button>
            </div>
            </form>
        </div>
    );
    return page;
}

export default AddTask;