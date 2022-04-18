import React, { useState } from "react";

export const Pagethree = (props) => {

    const personalInfo = props.location.state.personalInfo;
    const address = props.location.state.address;

    const [creditNumber, setCreditNumber] = useState('');
    const [creditType, setCreditType] = useState('');

    const handleSubmit = () => {
        props.history.push("/pagefour", {
            personalInfo: {
                firstName: personalInfo.firstName,
                lastName: personalInfo.lastName,
                profession: personalInfo.profession
            },
            address: {
                street: address.street,
                city: address.city,
                zip: address.zip,
                state: address.state
            },
            paymentInfo:{
                creditNumber: creditNumber,
                creditType: creditType
            }
        });
    }

    let page3 = (
        <div>
            <div>
                <div>First Name: {personalInfo.firstName}</div>
                <div>Last Name: {personalInfo.lastName}</div>
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
                                value={creditNumber}
                                onChange={e => setCreditNumber(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>Credit Card Type: </td>
                        <td>
                            <input type="radio"
                                value="VISA"
                                checked={creditType === 'VISA'}
                                onChange={e => setCreditType(e.target.value)} /> VISA
                        </td>
                        <td>
                            <input type="radio"
                                value="Master Card"
                                checked={creditType === 'Master Card'}
                                onChange={e => setCreditType(e.target.value)} /> Master Card
                        </td>
                    </tr>
                    <tr>
                        <button onClick={handleSubmit}>Next</button>
                    </tr>
                    </tbody>
                </table>

            </form>

        </div>
    );
    return page3;
}