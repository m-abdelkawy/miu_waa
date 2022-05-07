import React, { useState } from "react";

export const Pageone = (props) => {

    const [user, setUser] = useState({
        firstname: '',
        lastname: '',
        profession: '',
        street: '',
        city: '',
        zip: '',
        state: '',
        creditcard: '',
        cardtype: ''
    });

    const handleFieldChange = (e) => {
        console.log(e.target.name + ": " + e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log(user);
    }

    const handleSubmit = (e) => {
        //e.preventDefault();
        props.history.push("/pagetwo", { user: user });
    }


    let page1 = (
        <form>
            <h3>Enter your personal data:</h3>
            <div>
                First name:
                <input
                    type="text"
                    placeholder="First Name"
                    name="firstname"
                    value={user.firstname}
                    onChange={handleFieldChange} />
            </div>
            <div>
                Last Name:
                <input
                    type="text"
                    placeholder="Last Name"
                    name="lastname"
                    value={user.lastname}
                    onChange={handleFieldChange} />
            </div>
            <div>
                Profession:
                <select type="text" name="profession" value={user.profession} onChange={handleFieldChange}>
                    <option value=''>Select Profession</option>
                    <option value="programmer">Programmer</option>
                    <option value="tester">Tester</option>
                    <option value="architect">Architect</option>
                </select>
            </div>
            <div>
                <button onClick={handleSubmit}>Next</button>
            </div>
        </form>
    );
    return page1;
}