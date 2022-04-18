import React, { useState } from "react";

export const FormPage=()=>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    //const name="Ahmed";
    //const email="ahmed@gmail.com";

    let formPage = (
        <form>
            <h3>Enter Login Info</h3>
            <div>
                <input type="text" placeholder="name" value={name} onChange={e=>{setName(e.target.value)}}/>
            </div>
            <div>
                <input type="text" placeholder="email" value={email} onChange={e=>setEmail(e.target.value)}/>
            </div>
            <button onClick={e=>{
                alert(`your name is ${name}, your email is ${email}`);
                e.preventDefault();
            }}>Submit</button>
        </form>
    );

    return formPage;
}