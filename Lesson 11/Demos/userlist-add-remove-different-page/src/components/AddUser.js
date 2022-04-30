import React, { useState } from "react";

export const AddUser=(props)=>{
    const cleanuser = {userid:"", firstname:"", lastname:"", email:""};
    const [user, setUser] = useState(cleanuser);

    const handleSubmit=(e)=>{
        props.setUserlist(props.userlist.concat(user));
        props.history.push("/");
    }

    const handleFieldChange=(e)=>{
        setUser({...user, [e.target.name]: e.target.value});
    }

    let addForm=(
        <div>
            <h2>Add a new user</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    Userid
                    <input
                    type="text"
                    placeholder="User id"
                    name="userid"
                    value={user.userid}
                    onChange={handleFieldChange}/>
                </div>
                <div>
                    First Name
                    <input
                    type="text"
                    placeholder="First Name"
                    name="firstname"
                    value={user.firstname}
                    onChange={handleFieldChange}/>
                </div>
                <div>
                    Last Name
                    <input
                    type="text"
                    placeholder="Last Name"
                    name="lastname"
                    value={user.lastname}
                    onChange={handleFieldChange}/>
                </div>
                <div>
                    Email
                    <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={user.email}
                    onChange={handleFieldChange}/>
                </div>
                <button type="submit">Add User</button>
            </form>
        </div>
    );

    return addForm;
}