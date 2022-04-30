import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BookList } from './components/BookList';
import { useState } from 'react';
import { AddBook } from './components/AddBook';

function App() {

  const [booklist, setBooklist] = useState([]);

  return (
    <div>
      <BrowserRouter>
        <Route
          exact path="/" render={(props) => (
            <BookList {...props} booklist={booklist} setBooklist={setBooklist} />
          )} />

        <Route
          path="/addbook" render={(props) => (
            <AddBook {...props} booklist={booklist} setBooklist={setBooklist} />
          )} />
      </BrowserRouter>
    </div>
  );
}

export default App;
