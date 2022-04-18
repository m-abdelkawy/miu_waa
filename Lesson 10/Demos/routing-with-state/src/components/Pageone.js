import React, { useState } from "react";

export const Pageone = (props) =>{
    const [username, setUsername]=useState("");

    const handleOnSubmit=()=>{
        props.history.push("/pagetwo", username);
    }

    let page1 = (
        <form>
            <h3>Page 1</h3>
            <div>
                Name:
                <input type="text"
                       placeholder="username"
                       value={username}
                       onChange={e=>setUsername(e.target.value)}/>
            </div>
            <button onClick={handleOnSubmit}>Next</button>
        </form>
    );

    return page1;
}