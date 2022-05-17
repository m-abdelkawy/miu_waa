import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Calculator = () => {
    const[rightOperand, setRightOperand]=useState(0);

    const dispatch = useDispatch();
    const result = useSelector(state => state.calcResult);

    const handleCalculate = (e) => {
        dispatch({ type: e.target.value, payload:{rightOperand: parseInt(rightOperand)} });
    }

    let page = (
        <div>
            <p>Result: {result}</p>
            <input type='text' name="rightOperand" value={rightOperand} onChange={e => setRightOperand(e.target.value)} />
            <button value='add' onClick={handleCalculate}>+</button>
            <button value='subtract' onClick={handleCalculate}>-</button>
            <button value='multiply' onClick={handleCalculate}>*</button>
            <button value='divide' onClick={handleCalculate}>/</button>
        </div>
    );
    return page;
}

export default Calculator;