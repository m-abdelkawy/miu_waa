import axios from 'axios';
import React, {useState} from 'react'

const Calculator = () => {
    const APIURL = "http://localhost:8080"
    const [first, setFirst] = useState(0);
    const [second, setSecond] = useState(0);
    const [operator, setOperator] = useState("add");
    const [result, setResult] = useState(0);

    const fetchBackend = (e) => {
        e.preventDefault();
        // fetch(`${APIURL}/calc/${first}/${second}/${operator}`)
        //     .then(response => response.json())
        //     .then(data => {
        //         setResult(data.result);
        //     });

        axios.get(`${APIURL}/calc/${first}/${second}/${operator}`)
        .then(res=>{
            setResult(res.data.result);
            console.log(res.data);
        })
    }

    let page = (
        <div>
            <form onSubmit={fetchBackend}>
                <h3>Calculator</h3>
                <h3>Result: {result}</h3>
                <table>
                    <tbody>

                    <tr>
                        <td>First Operand</td>
                        <td>
                            <input
                                type="text"
                                name="first"
                                value={first}
                                onChange={e => setFirst(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>Second Operand</td>
                        <td>
                            <input
                                type="text"
                                name='second'
                                value={second}
                                onChange={e => setSecond(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <select type="text" value={operator} onChange={e => setOperator(e.target.value)}>
                                <option value="add">+</option>
                                <option value="subtract">-</option>
                                <option value="multiply">*</option>
                                <option value="divide">/</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button type='submit'>Calculate</button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
    return page;
}

export default Calculator;