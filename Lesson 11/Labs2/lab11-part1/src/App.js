import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Pagefour, Pageone, Pagethree, Pagetwo } from './components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Route exact path={["/", "/pageone"]} component={Pageone} />
          <Route path={"/pagetwo"} component={Pagetwo} />
          <Route path={"/pagethree"} component={Pagethree} />
          <Route path={"/pagefour"} component={Pagefour} />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
