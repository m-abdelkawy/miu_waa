import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Result from './components/Result';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Route exact path={["/", "/calculator"]} component={Calculator} />
          <Route path={"/result"} component={Result} />
      </BrowserRouter>
    </div>
  );
}

export default App;
