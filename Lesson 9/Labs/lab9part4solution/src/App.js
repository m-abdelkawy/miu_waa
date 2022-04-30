import logo from './logo.svg';
import './App.css';
import Counter from './components/CounterComponent';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  const increment = (value) => {
    setCounter(counter + value);
  }

  const decrement = (value) => {
    setCounter(counter - value);
  }

  return (
    <div>
      <header>
        <h3>{counter}</h3>
        <table>
          <tbody>
            <tr>
              <td><Counter value={1} counter={counter} increment={increment} decrement={decrement} /></td>
              <td><Counter value={3} counter={counter} increment={increment} decrement={decrement}/></td>
            </tr>
            <tr>
              <td><Counter value={5} counter={counter} increment={increment} decrement={decrement}/></td>
              <td><Counter value={8} counter={counter} increment={increment} decrement={decrement}/></td>
            </tr>
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
