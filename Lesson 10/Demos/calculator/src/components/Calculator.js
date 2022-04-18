import React, { useState } from 'react';

export const Calculator = () => {
    const [first, setFirst] = useState(0);
    const [second, setSecond] = useState(0);
    const [operator, setOperator] = useState('');
    const [result, setResult] = useState(0);

    let calcForm = (
        <div>
            <form>
                <h3>Calculator</h3>
                <table>
                    <tr>
                        <td>First Number: </td>
                        <td>
                            <input type="text" name='first' value={first} onChange={e => setFirst(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>Second Number: </td>
                        <td>
                            <input type="text" name='second' value={second} onChange={e => setSecond(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>Operator: </td>
                        <td>
                            <select type="text" name='operator' value={operator} onChange={e => setOperator(e.target.value)}>
                                <option value="multiply">multiply</option>
                                <option value="divide">divide</option>
                                <option value="add">add</option>
                                <option value="subtract">subtract</option>
                                <option value="clear">clear</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={e => {
                                switch (operator) {
                                    case 'multiply':
                                        setResult(parseInt(first) * parseInt(second));
                                        break;
                                    case 'divide':
                                        setResult(parseInt(first) / parseInt(second));
                                        break;
                                    case 'add':
                                        setResult(parseInt(first) + parseInt(second));
                                        break;
                                    case 'subtract':
                                        setResult(parseInt(first) - parseInt(second));
                                        break;
                                    case 'clear':
                                        setResult(0);
                                        break;
                                    default:
                                        setResult(0);
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
                </table>
            </form>
        </div>
    );

    return calcForm;
}