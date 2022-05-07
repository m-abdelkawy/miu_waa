import React, { useState } from "react";

export const UsersList=(props)=>{


    const addUser=()=>{
        props.history.push("/adduser");
    }

    const removeUser=(e)=>{
        const newUsersList=props.usersList.filter(user=>user.userid !== e.target.value);
        props.setUsersList(newUsersList);
    }

    const renderList=(users)=>{
        return users.map(user=>{
            return (
                <tr key={user.userid}>
                    <td>{user.userid}</td>
                    <td>{user.firstname}</td>
                    <td>{user.lastname}</td>
                    <td>{user.email}</td>
                    <td>
                        <button onClick={removeUser} value={user.userid}>Remove</button>
                    </td>
                </tr>
            )
        })
    }

    let page=(
<div>
    <table>
        <thead>
            <tr>
            <th>UserId</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                renderList(props.usersList)
            }
            <tr>
                <td>
                    <button onClick={addUser}>Add User</button>
                </td>
            </tr>
        </tbody>
    </table>
</div>
    );

    return page;
}