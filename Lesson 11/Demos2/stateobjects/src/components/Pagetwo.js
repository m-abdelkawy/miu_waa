import React, { useState } from "react";

export const Pagetwo = (props) => {
    const [user, setUser] = useState(props.location.state.user);

    const handleFieldChange=(e)=>{
        setUser({...user, [e.target.name]: e.target.value});
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        props.history.push("/pagethree", {user: user});
    }

    let page = (
        <div>
            <h3>Personal Info</h3>
            <div>
                <p>First Name: {user.firstname}</p>
                <p>Last Name: {user.lastname}</p>
            </div>
            <br />
            <br />
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>Address: </td>
                            <td>
                                <input
                                    type="text"
                                    placeholder="Address"
                                    name="address"
                                    value={user.address}
                                    onChange={e => handleFieldChange(e)} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button type="submit">Next</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );

    return page;
}