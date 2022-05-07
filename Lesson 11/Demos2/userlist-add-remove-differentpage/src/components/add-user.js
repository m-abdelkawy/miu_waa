import React, { useState } from "react";

export const AddUser = (props) => {
    const cleanUser = { userid: '', firstname: '', lastname: '', email: '' }
    const [user, setUser] = useState(cleanUser);

    const handleFieldChange=(e)=>{
        setUser({...user, [e.target.name]:e.target.value});
    }

    const handleSubmit=(e)=>{
        console.log(props);
        e.preventDefault();
        props.setUsersList(props.usersList.concat(user));
        props.history.push("/userslist");
    }

    let page = (
        <div>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>User Id</td>
                            <td>
                                <input
                                    type="text"
                                    placeholder="user ID"
                                    name="userid"
                                    value={user.userid}
                                    onChange={handleFieldChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>First Name:</td>
                            <td>
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    name="firstname"
                                    value={user.firstname}
                                    onChange={handleFieldChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>Last Name:</td>
                            <td>
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    name="lastname"
                                    value={user.lastname}
                                    onChange={handleFieldChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td>
                                <input
                                    type="text"
                                    placeholder="Email"
                                    name="email"
                                    value={user.email}
                                    onChange={handleFieldChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button type="submit">Add User</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
    return page;
}