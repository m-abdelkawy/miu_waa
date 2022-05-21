import logo from './logo.svg';
import './App.css';
import { Counter } from './components/Counter';
import { Greeter } from './components/Greeter';

function App() {
  return (
    <div className="App">
      <Counter/>
      <br/>
      <br/>
      <hr/>
      <Greeter/>
    </div>
  );
}

export default App;
