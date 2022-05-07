import React, { useState } from "react";

export const UsersList = (props) => {
    const cleanUser = { userid: '', firstname: '', lastname: '', email: '' };
    const [user, setUser] = useState(cleanUser);
    const initialList = [
        { userid: 1, firstname: 'Frank', lastname: 'Jones', email: 'FrankJones@gmail.com' },
        { userid: 2, firstname: 'John', lastname: 'Doe', email: 'JohnDoe@gmail.com' },
        { userid: 3, firstname: 'Ahmed', lastname: 'Ali', email: 'AAli@gmail.com' }
    ];

    const [usersList, setUsersList] = useState(initialList);

    const removeUser = (id) => {
        setUsersList(usersList.filter(user => user.userid !== id));
    }

    const removeUser2 = (e) => {
        const newUsersList = usersList.filter(user=>user.userid !== e.target.value);
        setUsersList(newUsersList);
    }

    const handleFieldChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        // prevent form post
        e.preventDefault();
        //update List
        setUsersList(usersList.concat(user));
        // clear form
        setUser(cleanUser);
    }

    const renderList = (usersList) => {
        return (
            usersList.map(user => {
                return (
                    <tr key={user.userid}>
                        <td>{user.userid}</td>
                        <td>{user.firstname}</td>
                        <td>{user.lastname}</td>
                        <td>{user.email}</td>
                        <td>
                            {/* <button onClick={() => removeUser(user.userid)}>Delete</button> */}
                            <button onClick={removeUser2} value={user.userid}>Delete</button>
                        </td>
                    </tr>
                );
            })
        );
    };

    let page = (
        <div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>UserId</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            renderList(usersList)
                        }
                    </tbody>
                </table>
            </div>
            <div>
                <form onSubmit={e => handleSubmit(e)}>
                    <table>
                        <tbody>
                            <tr>
                                <td>User Id</td>
                                <td>
                                    <input
                                        type="text"
                                        placeholder="User Id"
                                        value={user.userid}
                                        name="userid"
                                        onChange={e => handleFieldChange(e)} />
                                </td>
                            </tr>
                            <tr>
                                <td>First Name</td>
                                <td>
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        name="firstname"
                                        value={user.firstname}
                                        onChange={e => handleFieldChange(e)} />
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
                                        onChange={e => handleFieldChange(e)} />
                                </td>
                            </tr>
                            <tr>
                                <td>Email: </td>
                                <td>
                                    <input
                                        type="text"
                                        placeholder="Email"
                                        name="email"
                                        value={user.email}
                                        onChange={e => handleFieldChange(e)} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button tybe="submit">Add User</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    );

    return page;
}