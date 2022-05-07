import React, { useState } from "react";

export const Pagethree = (props) => {

    const [user, setUser] = useState(props.location.state.user);

    const handleFieldChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        //e.preventDefualt();
        props.history.push("/pagefour", { user: user });
    }

    let page3 = (
        <div>
            <h3>Personal Info</h3>
            <div>First name: {user.firstname}</div>
            <div>Last name:{user.lastname}</div>
            <div>Profession: {user.profession}</div>

            <br />
            <h3>Address Info</h3>
            <div>Street: {user.street}</div>
            <div>City: {user.city}</div>
            <div>Zip: {user.zip}</div>
            <div>State: {user.state}</div>

            <br />
            <br />

            <form>
                <h3>Enter Payment info:</h3>
                <div>
                    Credit card number:
                    <input
                        type="text"
                        placeholder="credit number"
                        name="creditcard"
                        value={user.creditcard}
                        onChange={handleFieldChange} />
                </div>
                <div>
                    Credit type:
                    <input type="radio" name="cardtype" value="VISA" checked={user.cardtype === 'VISA'} onChange={handleFieldChange}/> VISA
                    <input type="radio" name="cardtype" value="MASTER Card" checked={user.cardtype === 'MASTER Card'} onChange={handleFieldChange}/> Master Card
                </div>
                <div>
                    <button onClick={handleSubmit}>Next</button>
                </div>
            </form>
        </div>
    );

    return page3;
}