import React, { useState } from "react";

export const UserList=(props)=>{
    const cleanuser = {userid:"", firstname:"", lastname:"", email:""};
    const [user, setUser]=useState(cleanuser);

    const handleAddUser=()=>{
        props.history.push("/adduser");
    }

    const removeUser=(e)=>{
        console.log(e.target.value);
        let newUserList = props.userlist.filter((user)=>user.userid !== e.target.value);
        console.log(props);
        props.setUserlist(newUserList);
    }

    let userListPage=(
        <div>
            <h1>Users</h1>
            <table>
                <thead>
                    <tr>
                        <td>Userid</td>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Email</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.userlist.map(user=>(
                            <tr key={user.userid}>
                                <td>{user.userid}</td>
                                <td>{user.firstname}</td>
                                <td>{user.lastname}</td>
                                <td>{user.email}</td>
                                <td><button value={user.userid} onClick={removeUser}>Remove</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <button onClick={handleAddUser}>Add User</button>
        </div>
    );

    return userListPage;
}