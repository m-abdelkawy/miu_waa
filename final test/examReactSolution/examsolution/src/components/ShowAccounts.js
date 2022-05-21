import { useSelector, useDispatch } from 'react-redux';

export const ShowAccounts = () => {
  const accounts = useSelector(state => state.accounts);
  const username = useSelector(state => state.username);

  return (
    <div>
      <h1>User: {username}</h1>  
      <h1>List of accounts</h1>
      <table>
        <thead>
          <tr><th>username</th><th>password</th></tr>
        </thead>
        <tbody>
          {accounts.map(account => (
            <tr key={account.username}><td>{account.username}</td><td>{account.password}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

