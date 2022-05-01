import React, { useState } from 'react';

export const Pageone = (props) => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [profession, setProfession] = useState('');


    const handleSubmit=()=>{
        props.history.push("/pagetwo", {firstname: firstname, lastname: lastname, profession, profession});
    }

    let page1=(
        <div>
            <form>
                <table>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td>First Name:</td>
                            <td>
                                <input
                                type="text"
                                placeholder="First Name"
                                value={firstname}
                                onChange={e=>setFirstname(e.target.value)}/>
                            </td>
                        </tr>
                        <tr>
                            <td>Last Name:</td>
                            <td>
                                <input
                                type="text"
                                placeholder="Last Name"
                                value={lastname}
                                onChange={e=>setLastname(e.target.value)}/>
                            </td>
                        </tr>
                        <tr>
                            <td>Profession:</td>
                            <td>
                                <select type="text" value={profession} onChange={e=>setProfession(e.target.value)}>
                                    <option>Select Profession</option>
                                    <option value="Programmer">Programmer</option>
                                    <option value="Manager">Manager</option>
                                    <option value="Tester">Tester</option>
                                    <option value="Architect">Architect</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <button onClick={handleSubmit}>Next</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );

    return page1;
}