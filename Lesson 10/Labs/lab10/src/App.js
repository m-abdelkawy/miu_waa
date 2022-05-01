import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { Pagefour, Pageone, Pagethree, Pagetwo } from './components';

function App() {
  let app = (
    <div>
      <BrowserRouter>
        <Route exact path={["/", "/pageone"]} component={Pageone} />
        <Route path={"/pagetwo"} component={Pagetwo} />
        <Route path={"/pagethree"} component={Pagethree} />
        <Route path={"/pagefour"} component={Pagefour} />
      </BrowserRouter>
    </div>
  );
  return app;
}

export default App;
