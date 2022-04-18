import React from "react";

export const Thankyou = (props) => {
    let finalPage = (
        <>
            <h3>Order placed</h3>
            <div>
                <div>Username: {props.location.state.username}</div>
                <div>Address: {props.location.state.address}</div>
                <div>Credit Card: {props.location.state.payment}</div>
            </div>
        </>
    );

    return finalPage;
}