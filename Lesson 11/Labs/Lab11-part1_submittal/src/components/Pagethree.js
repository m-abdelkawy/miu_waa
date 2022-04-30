import React, { useState } from "react";

export const Pagethree = (props) => {

    const[user, setUser]= useState(props.location.state.user);
    const {personalInfo, address, _} = user;

    const handleSubmit = () => {
        props.history.push("/pagefour", {user: user});
    }

    const handleFieldChange = (e) => {
        user.paymentInfo[e.target.name]= e.target.value;
        setUser({ ...user  });
    }

    let page3 = (
        <div>
            <div>
                <div>First Name: {personalInfo.firstname}</div>
                <div>Last Name: {personalInfo.lastname}</div>
                <div>Profession: {personalInfo.profession}</div>
                <br/>
                <br/>
                <div>Street: {address.street}</div>
                <div>City: {address.city}</div>
                <div>Zip: {address.zip}</div>
                <div>State: {address.state}</div>
            </div>
            <br />
            <form>

                <table>
                    <thead></thead>
                    <tbody>

                    <tr>
                        <td>Credit Card Number: </td>
                        <td>
                            <input type="text"
                                placeholder="Credit Card Number"
                                name="creditNumber"
                                onChange={handleFieldChange} />
                        </td>
                    </tr>
                    <tr>
                        <td>Credit Card Type: </td>
                        <td>
                            <input type="radio"
                                value="VISA"
                                name="creditType"
                                checked={user.paymentInfo.creditType === 'VISA'}
                                onChange={handleFieldChange} /> VISA
                        </td>
                        <td>
                            <input type="radio"
                                value="Master Card"
                                name="creditType"
                                checked={user.paymentInfo.creditType === 'Master Card'}
                                onChange={handleFieldChange} /> Master Card
                        </td>
                    </tr>
                    <tr>
                        <td>

                        <button onClick={handleSubmit}>Next</button>
                        </td>
                    </tr>
                    </tbody>
                </table>

            </form>

        </div>
    );
    return page3;
}