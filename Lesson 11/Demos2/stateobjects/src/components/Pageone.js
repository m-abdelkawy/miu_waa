import React, { useState } from 'react';

export const Pageone = (props) => {
    const cleanUser = {
        firstname: '',
        lastname: '',
        address: '',
        creditcard: ''
    }

    const [user, setUser] = useState(cleanUser);


    const handleFieldChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.history.push("/pagetwo", {user: user});
    }

    let page = (
        <div>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>First Name:</td>
                            <td>
                                <input
                                    type="text"
                                    placeholder='First Name'
                                    name='firstname'
                                    value={user.firstname}
                                    onChange={e => handleFieldChange(e)} />
                            </td>
                        </tr>
                        <tr>
                            <td>Last Name: </td>
                            <td>
                                <input
                                    type="text"
                                    placeholder='Last Name'
                                    name='lastname'
                                    value={user.lastname}
                                    onChange={e => handleFieldChange(e)} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button type='submit'>Next</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
    return page;
}