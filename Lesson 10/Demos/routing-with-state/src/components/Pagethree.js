import React, { useState } from "react";

export const Pagethree = (props) => {
    const username = props.location.state.username;
    const address = props.location.state.address;

    let [payment, setPayment] = useState('');

    const handleOnSubmit = () => {
        props.history.push("/thankyou", { username: username, address: address, payment: payment });
    }

    let page3 = (
        <div>
            <div>Username: {username}</div>
            <div>Address: {address}</div>
            <div>
                Credit Card:
                <input type="text"
                    placeholder="Payment"
                    value={payment}
                    onChange={e => setPayment(e.target.value)} />
            </div>
            <button onClick={handleOnSubmit}>Next</button>
        </div>
    );

    return page3;
}