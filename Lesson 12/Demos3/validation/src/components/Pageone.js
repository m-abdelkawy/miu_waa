import React, { useState } from 'react';

export const Pageone = () => {

    const cleanUser = {
        firstname: "",
        lastname: "",
        email: ""
    };

    const [user, setUser] = useState(cleanUser);

    const [firstnameErrors, setFirstnameErrors] = useState({});
    const [lastnameErrors, setLastnameErrors] = useState({});
    const [emailErrors, setEmailErrors] = useState({});

    const handleFieldChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const isFormValid = validateForm();

        if (isFormValid) {
            setUser(cleanUser);

            alert('Form is valid');
        }
    }

    const validateForm = () => {
        let isValid = true;

        const firstnameErrs = {};
        const lastnameErrs = {};
        const emailErrs = {};

        if (user.firstname.trim().length < 2) {
            firstnameErrs.short = 'First name is too short';
            isValid = false;
        }
        if (user.firstname.trim().length > 10) {
            firstnameErrs.long = 'First name is too long';
        }
        if (user.lastname.trim().length < 2) {
            lastnameErrs.short = 'Last name is too short';
            isValid = false;
        }
        if (user.lastname.trim().length > 10) {
            lastnameErrs.long = 'Last name is too long';
        }

        let emailExpression = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

        if (!emailExpression.test(user.email.trim())) {
            emailErrs.invalid = 'Email format is invalid';
            isValid = false;
        }

        setFirstnameErrors(firstnameErrs);
        setLastnameErrors(lastnameErrs);
        setEmailErrors(emailErrs);

        return isValid;
    }


    let page = (
        <div>
            <h3>Enter your data</h3>
            <form>
                <div>
                    First Name:
                    <input type="text" placeholder='First Name' name="firstname" value={user.firstname} onChange={handleFieldChange} />
                    {
                        Object.keys(firstnameErrors).map(key => {
                            return (<div key={key} style={{color:'red'}}>{firstnameErrors[key]}</div>)
                        })
                    }
                </div>
                <div>
                    Last Name:
                    <input type="text" placeholder="Last Name" name="lastname" value={user.lastname} onChange={handleFieldChange} />
                    {
                        Object.keys(lastnameErrors).map(key => {
                            return (<div key={key} style={{color:'red'}}>{lastnameErrors[key]}</div>)
                        })
                    }
                </div>
                <div>
                    Email:
                    <input type="text" placeholder="Email" name="email" value={user.email} onChange={handleFieldChange} />
                    {
                        Object.keys(emailErrors).map(key => {
                            return (<div key={key} style={{color:'red'}}>{emailErrors[key]}</div>)
                        })
                    }
                </div>
                <div>
                    <button type="submit" onClick={handleSubmit}>Next</button>
                </div>
            </form>
        </div>
    );

    return page;
}