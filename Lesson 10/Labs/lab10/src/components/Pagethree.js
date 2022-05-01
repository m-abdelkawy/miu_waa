import React, { useState } from 'react';

export const Pagethree = (props) => {
    // component state
    const [creditcardnumber, setCreditcardnumber] = useState('');
    const [type, setType] = useState('');

    // State from the previous two pages
    const { firstname, lastname, profession, street, city, zip, state } = props.location.state;

const handleSubmit=()=>{
    props.history.push("/pagefour",{
        ...props.location.state,
        creditcardnumber:creditcardnumber,
        type: type
    });
}

    let page = (
        <div>
            <div>
                <h3>Personal Info</h3>
                <p>First Name: {firstname}</p>
                <p>Last Name: {lastname}</p>
                <p>Profession: {profession}</p>
                <h3>Address Info</h3>
                <p>Street: {street}</p>
                <p>City: {city}</p>
                <p>Zip: {zip}</p>
                <p>State: {state}</p>
            </div>
            <div>
                <h3>Enter Payment Info:</h3>
                <form>
                    <table>
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td>Credit Card Number</td>
                                <td>
                                    <input
                                        type="text"
                                        placeholder='Credit Card Number'
                                        value={creditcardnumber}
                                        onChange={e => setCreditcardnumber(e.target.value)} />
                                </td>
                            </tr>
                            <tr>
                                <td>Credit Card Type:</td>
                                <td>
                                   <input type="radio" value="VISA" checked={type === 'VISA'} onChange={e=>setType(e.target.value)}/>VISA 
                                </td>
                                <td>
                                    <input type="radio" value="Mastercard" checked={type==="Mastercard"} onChange={e=>setType(e.target.value)}/>Mastercard
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="3">
                                    <button onClick={handleSubmit}>Next</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    );

    return page;
}