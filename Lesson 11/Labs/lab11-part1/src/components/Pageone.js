import React, { useState } from "react";

export const Pageone = (props) => {

    const [user, setUser] = useState({
        personalInfo: {
            firstname: "",
            lastname: "",
            profession: "",
        },
        address: {
            street: "",
            city: "",
            zip: "",
            state: ""
        },
        paymentInfo: {
            creditNumber: "",
            creditType: ""
        }
    });

    const handleSubmit = () => {
        props.history.push("/pagetwo", { user: user });
    }

    const handleFieldChange = (e) => {
        user.personalInfo[e.target.name]= e.target.value;
        setUser({ ...user  });
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
                                    name="firstname"
                                    onChange={handleFieldChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>Last Name: </td>
                            <td>
                                <input type="text"
                                    placeholder="Last Name"
                                    name="lastname"
                                    onChange={handleFieldChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>Profession: </td>
                            <td>
                                <select type="text" name="profession" onChange={handleFieldChange}>
                                    <option value="Programmer">Programmer</option>
                                    <option value="Manager">Manager</option>
                                    <option value="Tester">Tester</option>
                                    <option value="Architect">Architect</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button onClick={handleSubmit}>Next</button>
            </form>

        </div>
    );
    return page1;
}