import React, { useState } from "react";

export const FormPage = ()=>{
    const [name, setName] = useState('');
    const [country, setCountry] = useState('')
    const [hairColor, setHairColor] = useState('')

    let formPage = (
        <div>
            <form>
                <h3>Enter your information</h3>
                <table>
                    <tr>
                        <td>Name</td>
                        <td>
                            <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Country</td>
                        <select type="text" value={country} onChange={e=>setCountry(e.target.value)}>
                            <option value="Russia">Russia</option>
                            <option value="Egypt">Egypt</option>
                            <option value="USA">USA</option>
                            <option value="Netherlands">Netherlands</option>
                        </select>
                    </tr>
                    <tr>
                        <td>Hair Color</td>
                        <td>
                            <input type="radio" value="Black" checked={hairColor === "Black"} onChange={e=>setHairColor(e.target.value)}/>Black
                        </td>
                        <td>
                            <input type="radio" value="Brown" checked={hairColor === "Brown"} onChange={e=>setHairColor(e.target.value)}/>Brown
                        </td>
                    </tr>
                </table>
            </form>

            <p>Name = {name}</p>
            <p>Country = {country}</p>
            <p>Hair Color = {hairColor}</p>
        </div>
    );

    return formPage;
}