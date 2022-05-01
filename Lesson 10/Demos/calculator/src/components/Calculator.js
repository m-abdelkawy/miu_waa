import React, { useState } from 'react';

export const Calculator = () => {
    const [first, setFirst] = useState(0);
    const [second, setSecond] = useState(0);
    const [operator, setOperator] = useState('+');
    const [result, setResult] = useState(0);

    let calcForm = (
        <div>
            <form>
                <table>
                    <tbody>
                        <tr>
                            <td>First Number: </td>
                            <td>
                                <input
                                    type="text"
                                    placeholder='Enter First Operand'
                                    value={first}
                                    onChange={e => setFirst(parseFloat(e.target.value))} />
                            </td>
                        </tr>
                        <tr>
                            <td>Second Number: </td>
                            <td>
                                <input
                                    type="text"
                                    placeholder="Enter Second Operand"
                                    value={second}
                                    onChange={e => setSecond(parseFloat(e.target.value))} />
                            </td>
                        </tr>
                        <tr>
                            <td>Operator: </td>
                            <td>
                                <select type="text" value={operator} onChange={e => setOperator(e.target.value)}>
                                    <option value="+">+</option>
                                    <option value="-">-</option>
                                    <option value="*">*</option>
                                    <option value="/">/</option>
                                    <option value="clear">clear</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <button onClick={e => {
                                    
                                    switch (operator) {
                                        case "+":
                                            setResult(first + second);
                                            break;
                                        case "-":
                                            setResult(first - second);
                                            break;
                                        case "*":
                                            setResult(first * second);
                                            break;
                                        case "/":
                                            setResult(first / second);
                                            break;
                                            case "clear":
                                                setFirst(0);
                                                setSecond(0);
                                                setResult(0);
                                                setOperator('+');
                                                break;
                                        default:
                                            break;
                                    }
                                    e.preventDefault();
                                }}>Submit</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Result: </td>
                            <td>{result}</td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );

    return calcForm;
}