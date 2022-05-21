import { createStore } from 'redux';


const initalstate = { accounts: [], username : '' };

const reducer = (state = initalstate, action) => {
  if (action.type === 'createAccount') {
    return {
      accounts: state.accounts.concat(action.account),
      username : state.username
    };
  }
  if (action.type === 'setuser') {
    return {
      accounts: state.accounts,
      username : action.username
    };
  }
  return state;
}

const store = createStore(reducer);

export default store;