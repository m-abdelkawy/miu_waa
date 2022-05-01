import React, { useState } from "react";

export const FormPage = () => {
    const [name, setName] = useState('');
    const [country, setCountry] = useState('');
    const [hairColor, setHairColor] = useState('');

    let formPage = (
        <div>
            <form>
                <table>
                    <tbody>
                        <tr>
                            <td>Name:</td>
                            <td>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    value={name}
                                    onChange={e => setName(e.target.value)} />
                            </td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>
                                <select value={country} onChange={e => setCountry(e.target.value)}>
                                    <option value="Russia">Russia</option>
                                    <option value="USA">USA</option>
                                    <option value="Egypt">Egypt</option>
                                    <option value="India">India</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Hair Color:</td>
                            <td>
                                <input type="radio" value="Black" checked={hairColor==="Black"} onChange={e=>setHairColor(e.target.value)}/> Black
                            </td>
                            <td>
                                <input type="radio" value="Brown" checked={hairColor==="Brown"} onChange={e=>setHairColor(e.target.value)}/> Brown
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <button onClick={e=>{
                                    alert(`Name: ${name}\nCountry: ${country}\nHair Color: ${hairColor}`);
                                    e.preventDefault();
                                }}>Submit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>

            <div>
                <p>Name: {name}</p>
                <p>Country: {country}</p>
                <p>Hair Color: {hairColor}</p>
            </div>
        </div>
    );
    return formPage;
}