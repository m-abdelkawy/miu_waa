import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {  Books } from './components/Books';

function App() {
  return (
        <div>
          <Books/>
        </div>
  );
}

export default App;
