import logo from './logo.svg';
import './App.css';
import CounterComponent from './components/CounterComponent';
import { useState } from 'react';

function App() {
  let [state, setState] = useState(0);
  
  return (
    <div>
      <header>
        <h3>{state}</h3>
        <table>
          <tbody>
            <tr>
              <td><CounterComponent numState={state} numCounter={1} setStateFunction={setState}/></td>
              <td><CounterComponent numState={state} numCounter={3} setStateFunction={setState}/></td>
            </tr>
            <tr>
              <td><CounterComponent numState={state} numCounter={5} setStateFunction={setState}/></td>
              <td><CounterComponent numState={state} numCounter={8} setStateFunction={setState}/></td>
            </tr>
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
