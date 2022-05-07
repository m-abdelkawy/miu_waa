import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { UsersList } from './components/usersList';
import { AddUser } from './components/add-user';
import { useState } from 'react';

function App() {
  const [usersList, setUsersList] = useState([]);
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path={["/", "/userslist"]} render={props => (
          <UsersList {...props} usersList={usersList} setUsersList={setUsersList} />
        )} />
        <Route path={"/adduser"} render={props => (
          <AddUser {...props} usersList={usersList} setUsersList={setUsersList} />
        )} />
      </BrowserRouter>
    </div>
  );
}

export default App;
