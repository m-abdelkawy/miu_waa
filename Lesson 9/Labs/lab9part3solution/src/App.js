import logo from './logo.svg';
import './App.css';
import CounterComponent from './components/CounterComponent';
import { useState } from 'react';

function App() {

  let [state1, setState1] = useState(0);
  let [state2, setState2] = useState(0);
  let [state3, setState3] = useState(0);
  let [state4, setState4] = useState(0);
  
  return (
    <div>
      <header>
        <table>
          <tbody>
            <tr>
              <td><CounterComponent numState={state1} numCounter={1} setStateFunction={setState1}/></td>
              <td><CounterComponent numState={state2} numCounter={3} setStateFunction={setState2}/></td>
            </tr>
            <tr>
              <td><CounterComponent numState={state3} numCounter={5} setStateFunction={setState3}/></td>
              <td><CounterComponent numState={state4} numCounter={8} setStateFunction={setState4}/></td>
            </tr>
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
