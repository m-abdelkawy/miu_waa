import React from "react";

export const Pagefour = (props) => {
    // state from previous pages
    const { firstname, lastname, profession, street, city, zip, state, creditcardnumber, type } = props.location.state;

    let page = (
        <div>
            <h3>Peronal Info</h3>
            <p>First Name: {firstname}</p>
            <p>Last Name: {lastname}</p>
            <p>Profession: {profession}</p>
            <br />
            <br />
            <h3>Address Info</h3>
            <p>Street: {street}</p>
            <p>City: {city}</p>
            <p>Zip: {zip}</p>
            <p>State: {state}</p>
            <br />
            <br />
            <h3>Payment Info</h3>
            <p>Credit Card Number: {creditcardnumber}</p>
            <p>Credit Card Type: {type}</p>
            <br />
            <br />
        </div>
    );
    return page;
}