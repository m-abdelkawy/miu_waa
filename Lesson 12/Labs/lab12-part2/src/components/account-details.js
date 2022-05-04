import axios from "axios";
import React, { useState } from "react";

export const AccountDetail = (props) => {
    const[account, setAccount]=useState({
        accountNumber: '',
        accountHolder: '',
        balance: 0.0
    });
    const API_URL = `http://localhost:8080/api`;
    const getAccount=(accountNumber)=>{
        axios.get(`${API_URL}/accounts/${accountNumber}`)
        .then(res=>{
            setAccount(res.data);
        })
    }

    let page = (
        <div>
            {getAccount(props.accountNumber)}
            <h3>Account Details: </h3>
            <p>Account number: {account.accountNumber}</p>
            <p>Account holder: {account.accountHolder}</p>
            <p>Account balance: {account.balance}</p>
        </div>
    );
    return page;
}