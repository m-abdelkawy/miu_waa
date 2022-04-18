import React from "react";

export const Pagefour = (props) => {

    const personalInfo = props.location.state.personalInfo;
    const address = props.location.state.address;
    const paymentInfo = props.location.state.paymentInfo;

    

    let page4 = (
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
                <br/>
                <br/>
                <div>Credit Card Number: {paymentInfo.creditNumber}</div>
                <div>Credit Card Type: {paymentInfo.creditType}</div>
            </div>
    );
    return page4;
}