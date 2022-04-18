import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Homepage, Pageone, Pagethree, Pagetwo } from './components';
import { Switch } from 'react-router-dom';



function App() {

  let app1 = (
    <div>
      <BrowserRouter>
        <Route exact path={["/", "/pageone"]} component={Pageone} />
        <Route path="/pagetwo" component={Pagetwo} />
        <Route path="/pagethree" component={Pagethree} />
      </BrowserRouter>
    </div>
  );

  let app2 = (
    <div className='App'>
      <BrowserRouter>
        <p><Link to="/">Home Page</Link></p>
        <p><Link to="/pageone">Page one</Link></p>
        <p><Link to="/pagetwo">Page two</Link></p>

        <Route path="/" exact>
          <Homepage />
        </Route>

        <Route path="/pageone">
          <Pageone />
        </Route>

        <Route path="/pagetwo">
          <Pagetwo />
        </Route>

      </BrowserRouter>
    </div>
  );

  return app1;
}

export default App;
