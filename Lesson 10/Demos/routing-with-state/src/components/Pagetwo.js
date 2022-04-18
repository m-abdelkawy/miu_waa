import React, { useState } from "react";

export const Pagetwo = (props) =>{
    const username = props.location.state;
    const [address, setAddress] = useState('');

    const handleOnSubmit=()=>{
        props.history.push("/pagethree", {username: username, address: address});
    }

    let page2 = (
        <div>
            <div>Username: {username}</div>
            <form>
                <h3>Page 2</h3>
                <div>
                    Address:
                    <input type="text"
                           placeholder="Address"
                           value={address}
                           onChange={e=>setAddress(e.target.value)}/>
                </div>
                <button onClick={handleOnSubmit}>Next</button>
            </form>
        </div>
    );

    return page2;
}