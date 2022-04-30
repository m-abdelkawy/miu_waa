import React, { useState } from "react";

export const Pagetwo=(props)=>{
    const[user, setUser] = useState(props.location.state.user);

    const handleOnSubmit=()=>{
        props.history.push("/pagethree", {user: user});
    }

    const handleFieldChange=(e)=>{
        setUser({...user, [e.target.name]: e.target.value});
    }

    let page2=(
        <div>
            <div>First Name: {user.firstname}</div>
            <div>Last Name: {user.lastname}</div>
            <form>
                <h3>Page2</h3>
                <div>
                    Address:
                    <input type="text"
                           placeholder="Address"
                           name="address"
                           onChange={handleFieldChange}/>
                </div>
                <button onClick={handleOnSubmit}>Next</button>
            </form>
        </div>
    );
    return page2;
}