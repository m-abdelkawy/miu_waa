import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const Greeter = () => {

    const dispatch = useDispatch();
    const greeting = useSelector(state => state.greeting);

    const[person, setPerson]=useState('');

    const handleFieldChange=(e)=>{
        setPerson(e.target.value);
    }

    const handleGreeting=()=>{
        dispatch({type:'getGreeting', payload:{name: person}});
    }

    const page = (
        <div>
            <div>{greeting}</div>
            <div>
                <input type='text' placeholder="Enter Name" name="name" value={person} onChange={handleFieldChange} />
            </div>
            <div>
                <button onClick={handleGreeting}>Greet</button>
            </div>
        </div>
    );

    return page;
}