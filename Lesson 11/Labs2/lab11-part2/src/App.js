import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { BookList } from './components/BookList';
import { useState } from 'react';
import { AddBook } from './components/AddBook';

function App() {

  const [bookList, setBookList] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Route
          exact path={["/", "/booklist"]}
          render={props => {
            return <BookList {...props} bookList={bookList} setBookList={setBookList} />
          }} />
        <Route
          path={"/addbook"}
          render={props => (
            <AddBook {...props} bookList={bookList} setBookList={setBookList} />
          )} />
      </BrowserRouter>
    </div>
  );
}

export default App;
