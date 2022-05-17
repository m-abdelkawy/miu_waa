import React, { useState } from 'react';

const Calculator = (props) => {
    const [first, setFirst] = useState(0);
    const [second, setSecond] = useState(0);
    const [operator, setOperator] = useState("add");
    const [result, setResult] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        let res = 0;
        if (operator === "add") {
            res = first + second;
        }
        else if (operator === "subtract") {
            res = first - second;
        }
        else if (operator === "divide") {
            res = first / second;
        }
        else if (operator === "multiply") {
            res = first * second;
        }
        setResult(res);
    }

    const renderResult = () => {
        return (
            <div name="result">{result}</div>
        )
    }

    let page = (
        <div>
            <div>
                <form>
                    <div>
                        First:
                        <input
                            type="text"
                            name='first'
                            value={first}
                            onChange={e => setFirst(parseInt(e.target.value))} />
                    </div>
                    <div>
                        second
                        <input
                            type="text"
                            name='second'
                            value={second}
                            onChange={e => setSecond(parseInt(e.target.value))} />
                    </div>
                    <div>
                        <select type="text" name='operator' value={operator} onChange={e => setOperator(e.target.value)}>
                            <option value="add">add</option>
                            <option value="subtract">subtract</option>
                            <option value="multiply">multiply</option>
                            <option value="divide">divide</option>
                        </select>
                    </div>
                    <div>
                        <button name='submit' onClick={handleSubmit}>Submit</button>
                    </div>
                </form>
            </div>
            <div>
                Result:
                {
                    renderResult()
                }
            </div>
        </div>

    );

    return page;
}

export default Calculator;