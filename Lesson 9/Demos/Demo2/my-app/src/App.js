import logo from './logo.svg';
import './App.css';
import TopComponent from './components/TopComponent';
import { useState } from 'react';
import BottomComponent from './components/BottomComponent';

let isMorning = (new Date()).getHours() < 12;
let greetingElement = isMorning? <h3>Good Morning</h3>: <h3>Good Evening</h3>;

function App(){
  const [message, setMessage] = useState("");
  return (
    <div>
      <TopComponent setMessageFunction={setMessage}/>
      <BottomComponent message = {message}/>
    </div>
  );
}

export default App;
