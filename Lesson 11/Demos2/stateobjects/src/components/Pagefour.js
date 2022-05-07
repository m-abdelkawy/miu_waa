import React, { useState } from "react";

export const Pagefour=(props)=>{
    
    const [user, setUser]=useState(props.location.state.user);
    
    let page=(
<div>
    <h3>User info:</h3>
    <div>
        <p>First Name: {user.firstname}</p>
        <p>Last Name: {user.lastname}</p>
        <p>Address: {user.address}</p>
        <p>Credit Card: {user.creditcard}</p>
    </div>
</div>
    );

    return page;
}