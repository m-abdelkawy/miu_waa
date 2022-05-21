import axios from "axios";
import React, { useState } from "react";

export const Bank = () => {

    const APIURL = 'http://localhost:8090/api'

    const cleanaccount = {
        accountNumber: '',
        accountHolder: '',
        balance: 0,
        entryList: []
    };
    const resultaccount = {
        accountNumber: '',
        accountHolder: '',
        balance: 0,
        entryList: []
    };

    const [opreration, setOperation] = useState('create');
    const [account, setAccount] = useState(cleanaccount);
    const [result, setResult] = useState(resultaccount);

    const handleFieldChange = (e) => {
        setAccount({ ...account, [e.target.name]: e.target.value });
    };

    const renderTransaactionHistory = (list) => {
        //debugger;
        if(list == null || list.length == 0){
            return;
        }
        return list.map(transaction => {
            return (
                <tr key={transaction.date}>
                    <td>{transaction.date}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.transactionType}</td>
                </tr>
            )
        })
    };

    const fetchBackend = (e) => {
        debugger;
        if (e.target.value === 'get') {
            axios.get(`${APIURL}/accounts/${account.accountNumber}`)
                .then(response => {
                    console.log(response.data);
                    resultaccount.accountNumber = response.data.accountNumber;
                    resultaccount.accountHolder = response.data.accountHolder;
                    resultaccount.balance = response.data.balance;
                    resultaccount.entryList = response.data.transactions;
                    setResult(resultaccount);
                })
        }
        else if (e.target.value === 'remove') {
            axios.delete(`${APIURL}/accounts/${account.accountNumber}`)
                .then(response => {
                    resultaccount.accountHolder = "";
                    resultaccount.balance = "";
                    resultaccount.accountNumber = "";
                    resultaccount.entryList = [];
                    setResult(resultaccount);
                })
        }
        else if (e.target.value === 'create') {
            debugger;
            axios.post(`${APIURL}/accounts`, account)
                .then(response => {
                    console.log(response.data);

                    resultaccount.accountHolder = response.data.accountHolder;
                    resultaccount.balance = response.data.balance;
                    resultaccount.accountNumber = response.data.accountNumber;
                    resultaccount.entryList = response.data.transactions;
                    setResult(resultaccount);
                })
        }
        else if (e.target.value === 'deposit' || e.target.value === 'withdraw') {
            axios.post(`${APIURL}/accounts/${account.accountNumber}/${e.target.value}?amount=${account.balance}`)
                .then(response => {
                    resultaccount.accountHolder = response.data.accountHolder;
                    resultaccount.balance = response.data.balance;
                    resultaccount.accountNumber = response.data.accountNumber;
                    resultaccount.entryList = response.data.transactions;
                    setResult(resultaccount);
                });
        }


        setAccount(cleanaccount);
        e.preventDefault();
    }

    let page = (
        <div>
            <form>
                <h3> MIU Bank</h3>
                <table>
                    <tbody>
                        <tr>
                            <td>Accouhnt number:</td>
                            <td>
                                <input type="text" name="accountNumber" value={account.accountNumber} onChange={handleFieldChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>Account Holder: </td>
                            <td>
                                <input type="text" name="accountHolder" value={account.accountHolder} onChange={handleFieldChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>Balancd: </td>
                            <td>
                                <input type="text" name="balance" value={account.balance} onChange={handleFieldChange} />
                            </td>
                        </tr>
                        <tr>
                            <td>Operation: </td>
                            <td>
                                <select type="text" name="operator" value={opreration} onChange={e => setOperation(e.target.value)}>
                                    <option>create</option>
                                    <option>deposit</option>
                                    <option>withdraw</option>
                                    <option>get</option>
                                    <option>remove</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <button value={opreration} onClick={fetchBackend}>Submit</button>
                            </td>
                        </tr>
                        <tr>
                            <td><strong>Account Number</strong></td>
                            <td><strong>Account Holder</strong></td>
                            <td><strong>Balance</strong></td>
                        </tr>
                        <tr>
                            <td>{result.accountNumber}</td>
                            <td>{result.accountHolder}</td>
                            <td>{result.balance}</td>
                        </tr>
                        <hr />
                        <tr><td>Transactions History</td></tr>
                        <tr>
                            <td>Date</td>
                            <td>Amount</td>
                            <td>Description</td>
                        </tr>
                        {
                            renderTransaactionHistory(result.entryList)
                        }
                    </tbody>
                </table>
            </form>
        </div>
    );

    return page;

}