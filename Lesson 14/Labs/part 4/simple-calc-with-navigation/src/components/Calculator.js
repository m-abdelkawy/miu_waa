import React, { useState } from "react";

const Calculator = (props) => {
    const [first, setFirst] = useState(0);
    const [second, setSecond] = useState(0);
    const [result, setResult] = useState(0);

    const handleCalculate=(e)=>{
        //e.preventDefault();
        const operator = e.target.value;

        switch (operator) {
            case "add":
                setResult(first + second);
                break;
            case "subtract":
                setResult(first - second);
                break;
            case "multiply":
                setResult(first * second);
                break;
            default:
                break;
        }
    }
    const handleSubmit = (e) => {
        props.history.push('/result', { result: result });
    }

    let page = (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    First Operand:
                    <input
                        type="text"
                        name="first"
                        value={first}
                        onChange={e => setFirst(parseInt(e.target.value))} />
                </div>
                <div>
                    Second Operand
                    <input
                        type="text"
                        name="second"
                        value={second}
                        onChange={e => setSecond(parseInt(e.target.value))} />
                </div>
                <div>
                    <button name="add" value="add" onClick={handleCalculate}>add</button>
                    <button name="subtract" value="subtract" onClick={handleCalculate}>Subtract</button>
                    <button name="multiply" value="multiply" onClick={handleCalculate}>Multiply</button>
                </div>
            </form>
        </div>
    );

    return page;
}

export default Calculator;