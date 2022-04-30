import React, { useState } from "react";

export const UserList = () => {
    const cleanuser = { userid: "", firstname: "", lastname: "", email: "" };
    const [user, setUser] = useState(cleanuser);
    const initialList = [
        { userid: "1", firstname: "Frank", lastname: "Jones", email: "Franky1@gmail.com" },
        { userid: "2", firstname: "John", lastname: "Doe", email: "jdoe@gmail.com" }
    ];
    const [userList, setUserList] = useState(initialList);

    const handleSubmit = (e) => {
        if (user) {
            setUserList(userList.concat(user));
        }
        //clear user
        setUser(cleanuser);
        //prevent POST request
        e.preventDefault();
    }

    const handleFieldChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const removeUser = (e)=>{
        const newUserList = userList.filter(user=>(user.userid !== e.target.value));
        setUserList(newUserList);
    }

    return (
        <div>
            <h1>Users</h1>
            <table>
                <tr>
                    <th>User Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
                {
                    userList.map(user => (
                        <tr key={user.userid}>
                            <td>{user.userid}</td>
                            <td>{user.firstname}</td>
                            <td>{user.lastname}</td>
                            <td>{user.email}</td>
                            <td><button onClick={removeUser} value={user.userid}>Delete</button></td>
                        </tr>
                    ))
                }
            </table>
                <p><h2>Add a new user</h2></p>
                <form onSubmit={handleSubmit}>
                    <div>
                        userid
                        <input
                            type="text"
                            placeholder="Userid"
                            name="userid"
                            value={user.userid}
                            onChange={handleFieldChange} />
                    </div>
                    <div>
                        Firstname
                        <input
                            type="text"
                            placeholder="First name"
                            name="firstname"
                            value={user.firstname}
                            onChange={handleFieldChange} />
                    </div>
                    <div>
                        Lastname
                        <input
                            type="text"
                            placeholder="Last name"
                            name="lastname"
                            value={user.lastname}
                            onChange={handleFieldChange} />
                    </div>
                    <div>
                        Email
                        <input
                            type="text"
                            placeholder="Email"
                            name="email"
                            value={user.email}
                            onChange={handleFieldChange} />
                    </div>
                    <button type="submit">Add User</button>
                </form>
        </div>
    );
}