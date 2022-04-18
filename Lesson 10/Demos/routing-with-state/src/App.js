import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';
import { Pageone, Pagethree, Pagetwo, Thankyou } from './components';


function App() {

  let app =(
    <div>
      <BrowserRouter>

          <Route exact path={["/", "/pageone"]} component={Pageone} />
          <Route path="/pagetwo" component={Pagetwo} />
          <Route path="/pagethree" component={Pagethree} />
          <Route path="/thankyou" component={Thankyou} />
      </BrowserRouter>
    </div>
  );

  return app;
}

export default App;
