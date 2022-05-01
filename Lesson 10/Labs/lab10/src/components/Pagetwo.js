import React, { useState } from "react";

export const Pagetwo = (props) => {
    // State of Page 2
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [state, setState] = useState('');

    // State from page 1
    const { firstname, lastname, profession } = props.location.state;

    // submit handler
    const handleSubmit = () => {
        props.history.push("/pagethree", {
            firstname: firstname,
            lastname: lastname,
            profession: profession,

            street: street,
            city: city,
            zip: zip,
            state: state
        });
    }

    let page2 = (
        <div>
            <div>
                <h3>Personal Info</h3>
                <p>First Name: {firstname}</p>
                <p>Last Name: {lastname}</p>
                <p>Profession: {profession}</p>
            </div>
            <div>
                <h3>Enter Address Info: </h3>
                <form>
                    <table>
                        <tr>
                            <td>Street</td>
                            <td>
                                <input
                                    type="text"
                                    placeholder="Street"
                                    value={street}
                                    onChange={e => setStreet(e.target.value)} />
                            </td>
                        </tr>
                        <tr>
                            <td>City</td>
                            <td>
                                <input
                                    type="text"
                                    placeholder="City"
                                    value={city}
                                    onChange={e => setCity(e.target.value)} />
                            </td>
                        </tr>
                        <tr>
                            <td>Zip</td>
                            <td>
                                <input
                                    type="text"
                                    placeholder="Zip"
                                    value={zip}
                                    onChange={e => setZip(e.target.value)} />
                            </td>
                        </tr>
                        <tr>
                            <td>State</td>
                            <td>
                                <input
                                    type="text"
                                    placeholder="State"
                                    value={state}
                                    onChange={e => setState(e.target.value)} />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <button onClick={handleSubmit}>Next</button>
                            </td>
                        </tr>
                    </table>
                </form>

            </div>
        </div>
    );

    return page2;
}