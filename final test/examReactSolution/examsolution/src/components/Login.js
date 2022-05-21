import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

export const Login = (props) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const accounts = useSelector(state => state.accounts);
  const [loginresult, setLoginresult] = useState("");
  
  const login = () => {
    let logincorrect = false;

    for (let i = 0; i < accounts.length; i++) {
      if (accounts[i].username === username && accounts[i].password === password){
        logincorrect = true;
        break;
      }
    }
    if (logincorrect){
      dispatch({ type : 'setuser', username : username });
      props.history.push("/welcome" );
    }
    else{
      setLoginresult ("Wrong username/password combination, please try again!"); 
    }
  }

  const createAccount = () => {
      props.history.push("/createAccount" );
  }

  return (
    <div>
     <div id="errorText">{loginresult}</div>
      <h1>Login</h1>
      <div></div>
      <div>
          Username
          <input
            id="loginUsername"
            type="text"
            placeholder="Username"
            name="username"
            value={username}
            onChange={e => setUsername(e.target.value)} />
        </div>
        <div>
          Password
          <input
            id="loginPassword"
            type="text"
            placeholder="Password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)} />
        </div>
      <div>
        <button id="btnSubmit" onClick={login}>Login</button>
        <button id="btnCreateAccount" onClick={createAccount}>Create Account</button>
      </div>
    </div>
  );
};

