import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

export const Welcome = (props) => {
  const username = useSelector(state => state.username);

  const showAccounts = () => {
    props.history.push("/showaccounts" );
  }

  return (
    <div>
      <h1>Welcome {username}</h1>
      <div>
        <button onClick={showAccounts}>ShowAccounts</button>
      </div>
    </div>
  );
};

