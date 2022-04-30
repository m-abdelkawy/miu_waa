import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Pagefour, Pageone, Pagethree, Pagetwo } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Route exact path={["/", "/pageone"]} component={Pageone} />
      <Route path={"/pagetwo"} component={Pagetwo} />
      <Route path={"/pagethree"} component={Pagethree} />
      <Route path={"/pagefour"} component={Pagefour} />
    </BrowserRouter>
  );
}

export default App;
