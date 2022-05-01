import React, { useState } from "react";

export const FormPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    let formElement = (
        <form>
            <div>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={e => setName(e.target.value)} />
            </div>
            <div>
                <input
                    type="text"
                    placeholder="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)} />
            </div>
            <button onClick={e => {
                alert(`Your name is ${name}\nYour email is ${email}`);
                e.preventDefault();
            }}>Submit</button>

            <p>Name: {name}</p>
            <p>Email: {email}</p>
        </form>
    );

    return formElement;
}