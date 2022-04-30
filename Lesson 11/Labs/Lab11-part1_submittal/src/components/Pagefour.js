import React, { useState } from "react";

export const Pagefour = (props) => {

    const[user, setUser]= useState(props.location.state.user);

    const {personalInfo, address, paymentInfo} = user;

    

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