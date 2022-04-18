import React, { useState } from "react";

export const Pageone = (props) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [profession, setProfession] = useState('');

    const handleSubmit = () => {
        props.history.push("/pagetwo", {
            firstName: firstName,
            lastName: lastName,
            profession: profession
        });
    }

    let page1 = (
        <div>
            <form>

                <table>
                    <thead></thead>
                    <tbody>

                    <tr>
                        <td>First Name: </td>
                        <td>
                            <input type="text"
                                placeholder="First Name"
                                value={firstName}
                                onChange={e => setFirstName(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>Last Name: </td>
                        <td>
                            <input type="text"
                                placeholder="Last Name"
                                value={lastName}
                                onChange={e => setLastName(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>Profession: </td>
                        <td>
                            <select type="text" value={profession} onChange={e => setProfession(e.target.value)}>
                                <option value="Programmer">Programmer</option>
                                <option value="Manager">Manager</option>
                                <option value="Tester">Tester</option>
                                <option value="Architect">Architect</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <button onClick={handleSubmit}>Next</button>
                    </tr>
                    </tbody>
                </table>
            </form>

        </div>
    );
    return page1;
}