import React, { useState } from "react";

const Pageone = (props) => {

    const cleanUser = {
        firstname: '',
        lastname: '',
        email: ''
    }

    const [user, setUser] = useState(cleanUser);

    const [firstnameErrors, setFirstnameErrors] = useState({});
    const [lastnameErrors, setLastnameErrors] = useState({});
    const [emailErrors, setEmailErrors] = useState({});

    const handleFieldChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let isFormValid = validateForm();
        if (isFormValid) {
            //clear form
            setUser(cleanUser);
            //alert success
            alert("Success!! form is valid!");
        }
    }

    const validateForm = () => {
        const firstnameErrs = {};
        const lastnameErrs = {};
        const emailErrs = {};

        let isValid = true;

        // First and Last Name >= 2 && First and Last Name <= 10
        if (user.firstname.trim().length < 2) {
            firstnameErrs.firstnameShort = "First name is too short!";
            isValid = false;
        }
        if (user.firstname.trim().length > 10) {
            firstnameErrs.firstnameLong = "First name is too long!";
            isValid = false;
        }
        if (user.lastname.trim().length < 2) {
            lastnameErrs.lastnameShort = "Last name is too short!";
            isValid = false;
        }
        if (user.lastname.trim().length > 10) {
            lastnameErrs.lastnameLong = "Last name is too long!";
            isValid = false;
        }

        // email must match email pattern
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(user.email.trim())) {
            emailErrs.invalid = "Email is not correct!";
            isValid = false;
        }

        //set errors
        setFirstnameErrors(firstnameErrs);
        setLastnameErrors(lastnameErrs);
        setEmailErrors(emailErrs);

        return isValid;
    }

    let page = (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Enter your info: </h3>
                <table>
                    <tbody>
                        <tr>
                            <td>First name:</td>
                            <td>
                                <input
                                    type="text"
                                    name="firstname"
                                    placeholder="First Name"
                                    value={user.firstname}
                                    onChange={handleFieldChange} />
                                {
                                    Object.keys(firstnameErrors).map(key => {
                                        return (
                                            <div key={key} style={{ color: "red" }}>{firstnameErrors[key]}</div>
                                        )
                                    })
                                }
                            </td>
                        </tr>
                        <tr>
                            <td>Last name:</td>
                            <td>
                                <input
                                    type="text"
                                    name="lastname"
                                    placeholder="Last Name"
                                    value={user.lastname}
                                    onChange={handleFieldChange} />
                                {
                                    Object.keys(lastnameErrors).map(key => {
                                        return <div key={key} style={{ color: "red" }}>{lastnameErrors[key]}</div>
                                    })
                                }
                            </td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td>
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="Email"
                                    value={user.email}
                                    onChange={handleFieldChange} />
                                {
                                    Object.keys(emailErrors).map(key => {
                                        return <div key={key} style={{ color: "red" }}>{emailErrors[key]}</div>
                                    })
                                }
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <button type="submit">Submit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );


    return page;
}

export default Pageone;