import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Homepage, Pagefour, Pageone, Pagethree, Pagetwo } from './components';
import { Switch } from 'react-router-dom';



function App() {
  let app1 = (
    <div className='App'>
      <BrowserRouter>
        <Route exact path={["/", "/pageone"]} component={Pageone} />
        <Route path={"/pagetwo"} component={Pagetwo} />
        <Route path={"/pagethree"} component={Pagethree} />
        <Route path={"/pagefour"} component={Pagefour} />
      </BrowserRouter>
    </div>
  );

  let app2 = (
    <div>
      <BrowserRouter>
        <Link to={"/"}>Page 1</Link>
        <Link to={"/pagetwo"}>Page 2</Link>
        <Link to={"/pagethree"}>Page 3</Link>
        <Link to={"/pagefour"}>Page 4</Link>

        <Route exact path={["/", "/pageone"]}>
          <Pageone />
        </Route>

        <Route path={"/pagetwo"}>
          <Pagetwo />
        </Route>

        <Route path={"/pagethree"}>
          <Pagethree />
        </Route>

        <Route path={"/pagefour"}>
          <Pagefour />
        </Route>
      </BrowserRouter>
    </div>
  );

  return app2;
}

export default App;
