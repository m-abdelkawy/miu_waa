import React, { useState } from "react";

export const Pagethree = (props) => {

    const [user, setUser] = useState(props.location.state.user);


    const handleFieldChange=(e)=>{
        setUser({...user, [e.target.name]: e.target.value});
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        props.history.push("/pagefour", {user: user});
    }

    let page = (
        <div>
            <h3>User info: </h3>
            <div>
                <p>First Name: {user.firstname}</p>
                <p>Last Name: {user.lastname}</p>
                <p>Address: {user.address}</p>
            </div>
            <br />
            <br />
            <h3>Enter Payment Details:</h3>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>Credit Card: </td>
                            <td>
                                <input
                                    type="text"
                                    placeholder="Credit Card Number"
                                    name="creditcard"
                                    value={user.creditcard}
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