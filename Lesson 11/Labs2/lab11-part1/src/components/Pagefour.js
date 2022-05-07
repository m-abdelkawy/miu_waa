import React, { useState } from "react";

export const Pagefour = (props) => {
    const [user, setUser] = useState(props.location.state.user);
    let page4 = (
        <div>
            <h3>Personal Info:</h3>
            <div>Firstname: {user.firstname}</div>
            <div>Lastname: {user.lastname}</div>
            <div>Profession: {user.profession}</div>
            <br />
            <br />
            <h3>Address Info:</h3>
            <div>Street: {user.street}</div>
            <div>City: {user.city}</div>
            <div>Zip: {user.zip}</div>
            <div>State: {user.state}</div>
            <br />
            <br />
            <h3>Payment Info</h3>
            <div>Credit Card Number: {user.creditcard}</div>
            <div>Credit Card Typr: {user.cardtype}</div>
        </div>
    );
    return page4;
}