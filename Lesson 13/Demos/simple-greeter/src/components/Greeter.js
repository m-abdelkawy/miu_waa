import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Greeter = () => {

    const dispatch = useDispatch();
    const greeting = useSelector(state => state.greeting);
    const [person, setPerson] = useState('');

    const handleFieldChange = (e) => {
        setPerson(e.target.value);
    }

    const handleGreet = (e) => {
        dispatch({ type: 'getGreeting', payload: { name: person } });
    }

    return (
        <div>
            <div>greeting
                <div>{greeting}</div>
            </div>
            <div>
                <input type="text" placeholder="Name" name="name" value={person} onChange={handleFieldChange} />
            </div>
            <div>
                <button onClick={handleGreet}>Greet</button>
            </div>
        </div>
    );
}

export default Greeter;