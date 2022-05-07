import React, { useState } from "react";

export const Pagetwo = (props) => {

    
    const [user, setUser] = useState(props.location.state.user);


    const handleFieldChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        //e.preventDefault();
        props.history.push("/pagethree", { user: user })
    }


    let page2 = (
        <div>
            <h3>Personal Info:</h3>
            <div>First name: {user.firstname}</div>
            <div>Last name:{user.lastname}</div>
            <div>Profession: {user.profession}</div>
            <br />
            <br />
            <form>
                <div>
                    <h3>Enter Address info:</h3>
                    <div>
                        Street:
                        <input
                            type="text"
                            placeholder="Street"
                            name="street"
                            value={user.street}
                            onChange={handleFieldChange} />
                    </div>
                    <div>
                        City:
                        <input
                            type="text"
                            placeholder="City"
                            name="city"
                            value={user.city}
                            onChange={handleFieldChange} />
                    </div>
                    <div>
                        Zip:
                        <input
                            type="text"
                            placeholder="Zip"
                            name="zip"
                            value={user.zip}
                            onChange={handleFieldChange} />
                    </div>
                    <div>
                        State:
                        <input
                            type="text"
                            placeholder="State"
                            name="state"
                            value={user.state}
                            onChange={handleFieldChange} />
                    </div>
                </div>
                <div>
                    <button onClick={handleSubmit}>Next</button>
                </div>
            </form>
        </div>
    );
    return page2;
}