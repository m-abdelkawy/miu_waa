import React, { useState } from 'react';

export const Pageone = () => {
    const cleanUser = {
        firstname: '',
        lastname: '',
        email: ''
    }
    const [user, setUser] = useState(cleanUser);

    const [firstnameErrors, setFirstnameError] = useState({});
    const [lastnameErrors, setLastnameError] = useState({});
    const [emailErrors, setEmailError] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validateForm();
        if (isValid) {
            setUser(cleanUser);
            // setFirstnameError({});
            // setLastnameError({});
            // setEmailError({});
            alert("Form is valid!");
        }
    }

    const validateForm = () => {
        const firstnameErr = {};
        const lastnameErr = {};
        const emailErr = {};

        let isValid = true;

        if (user.firstname.trim().length < 2) {
            firstnameErr.firstnameShort = "First name is too short!";
            isValid = false;
        }
        if (user.firstname.trim().length > 10) {
            firstnameErr.firstnameLong = "First name is too long!";
            isValid = false;
        }
        if (user.lastname.trim().length < 2) {
            lastnameErr.lastnameShort = "Last name is too short!";
            isValid = false;
        }
        if (user.email.trim().length < 5) {
            emailErr.emailShort = "Email is too short!";
            isValid = false;
        }
        let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(user.email.trim())) {
            emailErr.emailNotValid = "Email is not correct!";
            isValid = false;
        }

        setFirstnameError(firstnameErr);
        setLastnameError(lastnameErr);
        setEmailError(emailErr);
        return isValid;
    }

    const handleFieldChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const displayFieldErrors = (errObj) => {
        return Object.keys(errObj).map(key => {
            return (
                <div key={key} style={{ color: 'red' }}>{errObj[key]}</div>
            )
        })
    }

    let page = (
        <div>
            <form >
                <h3>Enter your info</h3>
                <table>
                    <tbody>
                        <tr>
                            <td>First Name:</td>
                            <td>
                                <input
                                    type="text"
                                    placeholder="Firstname"
                                    name="firstname"
                                    value={user.firstname}
                                    onChange={e => handleFieldChange(e)} />
                                {
                                    displayFieldErrors(firstnameErrors)
                                }
                            </td>
                        </tr>
                        <tr>
                            <td>Last Name:</td>
                            <td>
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    name='lastname'
                                    value={user.lastname}
                                    onChange={e => handleFieldChange(e)} />
                                {
                                    displayFieldErrors(lastnameErrors)
                                }
                            </td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td>
                                <input
                                    type="text"
                                    placeholder='email'
                                    name='email'
                                    value={user.email}
                                    onChange={e => handleFieldChange(e)} />
                                {
                                    displayFieldErrors(emailErrors)
                                }
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <button type='submit' onClick={handleSubmit}>Submit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );

    return page;
}