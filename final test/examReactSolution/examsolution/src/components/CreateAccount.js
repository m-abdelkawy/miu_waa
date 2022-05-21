import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

export const CreateAccount = (props) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState({});
  const [passwordError, setPasswordError] = useState({});



  const createAccount = () => {
    const isValid = formValidation();
    if (isValid) {
      dispatch({ type: 'createAccount', account: { username: username, password: password } });
      props.history.push("/login");
    }
  }

  const formValidation = () => {
    const usernameErr = {};
    const passwordErr = {};
    let isValid = true;
    if (username.trim().length < 5) {
      usernameErr.nameShort = "Name should be at least 5 characters"
      isValid = false;
    }
    if (username.trim().length > 10) {
      usernameErr.nameLong = "Name cannot be longer than 10 characters"
      isValid = false;
    }
    if (password.trim().length < 5) {
      passwordErr.nameShort = "Password should be at least 5 characters"
      isValid = false;
    }

    setUsernameError(usernameErr);
    setPasswordError(passwordErr);
    return isValid;
  }

  return (
    <div>
      <h1>Create account</h1>
      <div></div>
      <div>
        Username
        <input
          id="username"
          type="text"
          placeholder="Username"
          name="username"
          value={username}
          onChange={e => setUsername(e.target.value)} />
          {Object.keys(usernameError).map((key) => {
            return <div style={{ color: "red" }}>{usernameError[key]}</div>
          })}
      </div>
      <div>
        Password
        <input
          id="password"
          type="text"
          placeholder="Password"
          name="password"
          value={password}
          onChange={e => setPassword(e.target.value)} />
          {Object.keys(passwordError).map((key) => {
            return <div style={{ color: "red" }}>{passwordError[key]}</div>
          })}
      </div>
      <div>
        <button  id="btnSubmit" onClick={createAccount}>createAccount</button>
      </div>
    </div>
  );
};

