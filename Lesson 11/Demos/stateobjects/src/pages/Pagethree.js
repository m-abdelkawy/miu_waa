import React, { useState } from "react";

export const Pagethree = (props) => {
    const [user, setUser] = useState(props.location.state.user);

    const handleOnSubmit = () => {
        props.history.push("/pagefour", { user: user });
    }

    const handleFieldChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    let page3 = (
        <div>
            <div>First Name: {user.firstname}</div>
            <div>Last Name: {user.lastname}</div>
            <div>Address: {user.address}</div>
            <form>
                <h3>Page 3</h3>
                <div>
                    Credit Card
                    <input type="text"
                        placeholder="Credit Card number"
                        name="creditcard"
                        onChange={handleFieldChange}/>

                </div>
                <button onClick={handleOnSubmit}>Next</button>
            </form>
        </div>
    );

    return page3;
}