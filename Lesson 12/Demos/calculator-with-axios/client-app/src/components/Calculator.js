import { useState } from "react"
import axios from 'axios';

export const Calculator = () => {
    const [first, setFirst] = useState(0);
    const [second, setSecond] = useState(0);
    const [operator, setOperator] = useState('add');
    const [result, setResult] = useState(0);

    const API_URL = `http://localhost:8080/calc/${first}/${second}/${operator}`;

    const fetchBackend = (e) => {
        // const response = axios.get(API_URL)
        //     .then(res => {
        //         setResult(res.data.result);
        //     });

        const response = fetch(API_URL)
            .then(res => {
                return res.json();
            })
            .then(data=>{
                setResult(data.result);
            });

        e.preventDefault();
    }

    let calcPage = (
        <div>
            <form>
                <h3>Calculator</h3>
                <table>
                    <tbody>
                        <tr>
                            <td>First Operand:</td>
                            <td>
                                <input
                                    type="text"
                                    name="first"
                                    value={first}
                                    onChange={e => setFirst(e.target.value)} />
                            </td>
                        </tr>
                        <tr>
                            <td>Second Operand:</td>
                            <td>
                                <input
                                    type="text"
                                    name="second"
                                    value={second}
                                    onChange={e => setSecond(e.target.value)} />
                            </td>
                        </tr>
                        <tr>
                            <td>Operator: </td>
                            <td>
                                <select
                                    type="text"
                                    value={operator}
                                    onChange={e => setOperator(e.target.value)}>
                                    <option>add</option>
                                    <option>subtract</option>
                                    <option>multiply</option>
                                    <option>divide</option>
                                    <option>clear</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <button onClick={fetchBackend}>Submit</button>
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

    return calcPage;
}