import logo from './logo.svg';
import './App.css';
import Counter from './components/CounterComponent';
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
              <td><Counter value={1}/></td>
              <td><Counter value={3}/></td>
            </tr>
            <tr>
              <td><Counter value={5}/></td>
              <td><Counter value={8}/></td>
            </tr>
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
