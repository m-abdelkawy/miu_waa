import React, { useState } from "react";

export const Pagetwo = (props) => {

    const firstName = props.location.state.firstName;
    const lastName = props.location.state.lastName;
    const profession = props.location.state.profession;

    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [state, setState] = useState('');

    const handleSubmit = () => {
        props.history.push("/pagethree", {
            personalInfo: {
                firstName: firstName,
                lastName: lastName,
                profession: profession
            },
            address: {
                street: street,
                city: city,
                zip: zip,
                state: state
            }
        });
    }

    let page2 = (
        <div>
            <div>
                <div>First Name: {firstName}</div>
                <div>Last Name: {lastName}</div>
                <div>Profession: {profession}</div>
            </div>
            <br />
            <form>

                <table>
                    <thead>

                    </thead>
                    <tbody>

                        <tr>
                            <td>Street: </td>
                            <td>
                                <input type="text"
                                    placeholder="Street"
                                    value={street}
                                    onChange={e => setStreet(e.target.value)} />
                            </td>
                        </tr>
                        <tr>
                            <td>City: </td>
                            <td>
                                <input type="text"
                                    placeholder="City"
                                    value={city}
                                    onChange={e => setCity(e.target.value)} />
                            </td>
                        </tr>
                        <tr>
                            <td>Zip: </td>
                            <td>
                                <input type="text"
                                    placeholder="Zip"
                                    value={zip}
                                    onChange={e => setZip(e.target.value)} />
                            </td>
                        </tr>
                        <tr>
                            <td>State: </td>
                            <td>
                                <input type="text"
                                    placeholder="State"
                                    value={state}
                                    onChange={e => setState(e.target.value)} />
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
    return page2;
}