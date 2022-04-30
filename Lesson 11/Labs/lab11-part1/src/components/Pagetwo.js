import React, { useState } from "react";

export const Pagetwo = (props) => {

    const[user, setUser] = useState(props.location.state.user);
    console.log(user);

    const handleSubmit = () => {
        props.history.push("/pagethree", {user: user});
    }

    const handleFieldChange = (e) => {
        user.address[e.target.name]= e.target.value;
        setUser({ ...user  });
    }

    let page2 = (
        <div>
            <div>
                <div>First Name: {user.personalInfo.firstname}</div>
                <div>Last Name: {user.personalInfo.lastname}</div>
                <div>Profession: {user.personalInfo.profession}</div>
            </div>
            <br />
            <form>

                <table>
                    <thead>

                    </thead>
                    <tbody>

                        <tr>
                            <td>Street: </td>
                            <td>
                                <input type="text"
                                    placeholder="Street"
                                    name="street"
                                    onChange={handleFieldChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>City: </td>
                            <td>
                                <input type="text"
                                    placeholder="City"
                                    name="city"
                                    onChange={handleFieldChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>Zip: </td>
                            <td>
                                <input type="text"
                                    placeholder="Zip"
                                    name="zip"
                                    onChange={handleFieldChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>State: </td>
                            <td>
                                <input type="text"
                                    placeholder="State"
                                    name="state"
                                    onChange={handleFieldChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>

                            <button onClick={handleSubmit}>Next</button>
                            </td>
                        </tr>
                    </tbody>

                </table>

            </form>

        </div>
    );
    return page2;
}