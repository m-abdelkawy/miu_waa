import React from "react";

export const Pagefour=(props)=>{
    const user = props.location.state.user;

    let page4=(
        <div>
            <h3>
                Thank you for your order
            </h3>
            <div>First Name: {user.firstname}</div>
            <div>Last Name: {user.lastname}</div>
            <div>Address: {user.address}</div>
            <div>Payment: {user.creditcard}</div>
        </div>
    );
    return page4;
}