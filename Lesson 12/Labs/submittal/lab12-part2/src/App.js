import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { AccountCreate } from './components/account-create';
import { AccountDetail } from './components/account-details';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path={["/", "/account-create"]} component={AccountCreate} />
        <Route exact path={"/account-detail"} component={AccountDetail} />
      </BrowserRouter>
    </div>
  );
}

export default App;
