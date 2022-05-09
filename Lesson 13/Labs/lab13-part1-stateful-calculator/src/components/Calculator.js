import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Calculator = () => {

    const dispatch = useDispatch();
    const value = useSelector(state=>state.result);

    const[amount, setAmount]=useState(0);

    const handleFieldChange=(e)=>{
        setAmount(parseInt(e.target.value));
    }

    const handleAction=(actiontype)=>{
        dispatch({type:actiontype, payload:{rightOperand: amount}});
    }

    const calcPage = (
        <div>
            <div>
                Value
                <p>{value}</p>
            </div>
            <div>
                Amount
                <input type='text' name='amount' value={amount} onChange={handleFieldChange}/>
            </div>
            <div>
                <button onClick={()=>handleAction('add')}>+</button>
                <button onClick={()=>handleAction('subtract')}>-</button>
                <button onClick={()=>handleAction('multiply')}>*</button>
                <button onClick={()=>handleAction('divide')}>/</button>
            </div>
        </div>
    );

    return calcPage;
}

export default Calculator;