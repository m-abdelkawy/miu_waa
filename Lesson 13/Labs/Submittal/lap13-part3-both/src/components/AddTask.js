import React, { useState } from "react";
import { useDispatch } from "react-redux";

const AddTask = () => {

    const cleanTask = { id: 0, name: '' };
    const [task, setTask] = useState(cleanTask);

    const [counterId, setCounterId] = useState(0);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!task.name)
            return
        setCounterId(counterId + 1);
        dispatch({ type: 'addTask', payload: { task: task } });

        //clear form
        setTask(cleanTask);
    }

    let form = (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    type='text'
                    name='name'
                    value={task.name}
                    onChange={e => setTask({ id: counterId, [e.target.name]: e.target.value })} />
            </div>
            <div>
                <button type='submit'>Add task</button>
            </div>
        </form>
    );

    return form;
}

export default AddTask;