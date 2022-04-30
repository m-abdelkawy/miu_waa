import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import { UserList } from './components/UserList';
import { AddUser } from './components/AddUser';
import { Route } from 'react-router-dom';

function App() {

  const [userlist, setUserlist] = useState([]);

  return (
    <div>
      <BrowserRouter>
        <Route
          exact path='/' render={(props) => (
            <UserList {...props} userlist={userlist} setUserlist={setUserlist} />
          )} />

        <Route
          path='/adduser'
          render={(props) => (
            <AddUser {...props} userlist={userlist} setUserlist={setUserlist} />
          )} />
      </BrowserRouter>
    </div>
  );
}

export default App;
