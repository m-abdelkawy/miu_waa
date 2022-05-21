import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import { Login } from './components/Login';
import { CreateAccount } from './components/CreateAccount';
import { Welcome } from './components/Welcome';
import { ShowAccounts } from './components/ShowAccounts';


function App() {
  return (
    <div>
      <Router>
        <Route  exact path={["/", "/createaccount"]} component={CreateAccount} /> 
        <Route path="/login" component={Login} /> 
        <Route path="/welcome" component={Welcome} /> 
        <Route path="/showaccounts" component={ShowAccounts} />     
      </Router>       
    </div>
  );
}

export default App;
