import axios from 'axios';
import React, { useState } from 'react';

export const Calculator = () => {

    const[first, setFirst]=useState(0);
    const[second, setSecond]=useState(0);
    const[operator, setOperator]=useState('add');
    const[result, setResult]=useState(0);

    const API_URL = 'http://localhost:8080/calc';

    const handleSubmit=(e)=>{
        e.preventDefault();

        axios.get(`${API_URL}/${first}/${second}/${operator}`)
        .then(res=>{
            setResult(res.data.result);
        });
    }


    let page = (
        <form>
            <h3>Calculator</h3>
            <table>
                <tbody>
                    <tr>
                        <td>First Operand</td>
                        <td>
                            <input type="text" name="first" value={first} onChange={e => setFirst(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>Second Operand</td>
                        <td>
                            <input type="text" name='second' value={second} onChange={e => setSecond(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>Operator</td>
                        <td>
                            <select type="text" name='operator' value={operator} onChange={e=>setOperator(e.target.value)}>
                                <option value='add'>add</option>
                                <option value='subtract'>subtract</option>
                                <option value='multiply'>multiply</option>
                                <option value='divide'>divide</option>
                                <option value='clear'>clear</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={handleSubmit}>Submit</button>
                        </td>
                    </tr>
                    <tr>
                        <td>Result:</td>
                        <td>{result}</td>
                    </tr>
                </tbody>
            </table>
        </form>
    );

    return page;
}