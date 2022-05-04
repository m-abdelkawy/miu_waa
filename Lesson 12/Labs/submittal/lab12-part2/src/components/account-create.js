import axios from "axios";
import React, { useState } from "react";
import { AccountDetail } from "./account-details";

export const AccountCreate = (props) => {
    //let details = <></>;
    const[details, setDetails]=useState(<></>);
    const API_URL = `http://localhost:8080/api`;
    const cleanAccount = {
        accountNumber: '',
        accountHolder: '',
        initialdeposit: 0.0,
        balance: 0.0
    };

    const [account, setAccount] = useState(cleanAccount);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${API_URL}/accounts`, account)
            .then(res => {
                console.log(`account created: ${account.accountNumber}`);
renderDetails(account.accountNumber);
                //props.history.push("/account-detail", account);
            });
    }

    const handleFieldChange = (e) => {
        setAccount({ ...account, [e.target.name]: e.target.value, balance: account.initialdeposit });
        //debugger;
    }

    const renderDetails=(accountNumber)=>{
        setDetails(<AccountDetail accountNumber={accountNumber}/>);
    }

    let accountCreatePage = (
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <table>
                    <tbody>
                        <tr>
                            <td>accountnumber:</td>
                            <td>
                                <input type="text" name="accountNumber" value={account.accountNumber} onChange={e => handleFieldChange(e)} />
                            </td>
                        </tr>
                        <tr>
                            <td>Account Holder:</td>
                            <td>
                                <input type="text" name="accountHolder" value={account.accountHolder} onChange={e => handleFieldChange(e)} />
                            </td>
                        </tr>
                        <tr>
                            <td>Initial Deposit:</td>
                            <td>
                                <input type="text" name="initialdeposit" value={account.initialdeposit} onChange={e => handleFieldChange(e)} />
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <button type="submit">Submit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
            <br />
            <hr />
            <br />
            <div>
                {details}
            </div>
        </div>
    );

    return accountCreatePage;
}