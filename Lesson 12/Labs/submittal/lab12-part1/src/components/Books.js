import axios from 'axios';
import React, { useState } from 'react';

export const Books = (props) => {
    const API_URL = `http://localhost:8080/api`;
    const VALIDATORS = {
        ISBN_MIN_LEN: 3,
        AUTHOR_MIN_LEN: 3,
        TITLE_MIN_LEN: 5
    }

    const cleanBook = {
        isbn: '',
        author: '',
        title: '',
        price: 0.0
    }

    const [book, setBook] = useState(cleanBook);
    const [booklist, setBooklist] = useState([]);

    const [isbnError, setIsbnError] = useState('');
    const [authorError, setAuthorError] = useState('');
    const [titleError, setTitleError] = useState('');
    const [priceError, setPriceError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        let isFormValid = validateForm();
        if (isFormValid && book) {
            addBook(book);
            
            // clean form
            setBook(cleanBook);
            loadBooks();
        }
    }

    const validateForm = () => {
        let isbnErr = '';
        let authorErr = '';
        let titleErr = '';
        let priceErr = '';

        let isValid = true;

        if (book.isbn.trim().length < VALIDATORS.ISBN_MIN_LEN) {
            isbnErr = `ISBN must not be less than ${VALIDATORS.ISBN_MIN_LEN} characters.`;
            isValid = false;
        }
        if (book.author.trim().length < VALIDATORS.AUTHOR_MIN_LEN) {
            authorErr = `Author name must not be less than ${VALIDATORS.AUTHOR_MIN_LEN} characters.`;
            isValid = false;
        }
        if (book.title.trim().length < VALIDATORS.TITLE_MIN_LEN) {
            titleErr = `Title must not be less that ${VALIDATORS.TITLE_MIN_LEN} characters.`;
            isValid = false;
        }

        if (isNaN(parseFloat(book.price))) {
            priceErr = 'price must be a valid number.';
        }

        setIsbnError(isbnErr);
        setAuthorError(authorErr);
        setTitleError(titleErr);
        setPriceError(priceErr);
        return isValid;
    }

    const handleFieldChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value });
        //validateForm();
    }

    const displaySimpleError = (error) => {
        return <div style={{ color: 'red' }}>{error}</div>;
    }

    const displayComplexError = (errorObj) => {
        return Object.keys(errorObj).map(key => {
            return <div key={key} style={{ color: 'red' }}>{errorObj[key]}</div>
        });
    }

    const loadBooks = () => {
        axios.get(`${API_URL}/books`)
            .then(res => {
                setBooklist(res.data);
            });
    }

    loadBooks();

    const renderBooklist = () => {
        return (
            booklist.map(book => {
                return (
                    <tr key={book.isbn}>
                        <td>{book.isbn}</td>
                        <td>{book.title}</td>
                        <td>{book.author}</td>
                        <td>{book.price}</td>
                        <td>
                            <button onClick={() => deleteBook(book.isbn)}>Delete</button>
                        </td>
                    </tr>
                );
            })
        );
    }

    const deleteBook = (isbn) => {
        axios.delete(`${API_URL}/books/${isbn}`)
        .then(res=>{
            console.log("book deleted: " + res.headers);
            renderBooklist();
        });
    }

    const addBook=(book)=>{
        axios.post(`${API_URL}/books`, book)
        .then(res=>{
            console.log(`book added: ${res.data.isbn}`);
            loadBooks();
        })
    }


    let bookAdd = (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ISBN</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        renderBooklist()
                    }
                    <tr>
                        <td>
                            <button onClick={loadBooks}>Load Books</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h3>Add Book Info: </h3>
            <form onSubmit={e => handleSubmit(e)}>
                <table>
                    <tbody>
                        <tr>
                            <td>ISBN: </td>
                            <td>
                                <input
                                    type="text"
                                    placeholder='ISBN'
                                    name='isbn'
                                    value={book.isbn}
                                    onChange={handleFieldChange} />
                                {
                                    displaySimpleError(isbnError)
                                }
                            </td>
                        </tr>
                        <tr>
                            <td>Author: </td>
                            <td>
                                <input
                                    type="text"
                                    placeholder='Author name'
                                    name='author'
                                    value={book.author}
                                    onChange={handleFieldChange} />
                                {
                                    displaySimpleError(authorError)
                                }
                            </td>
                        </tr>
                        <tr>
                            <td>Title: </td>
                            <td>
                                <input
                                    type="text"
                                    placeholder='Title'
                                    name='title'
                                    value={book.title}
                                    onChange={handleFieldChange} />
                                {
                                    displaySimpleError(titleError)
                                }
                            </td>
                        </tr>
                        <tr>
                            <td>Price: </td>
                            <td>
                                <input
                                    type="text"
                                    placeholder='Price'
                                    name='price'
                                    value={book.price}
                                    onChange={handleFieldChange} />
                                {
                                    displaySimpleError(priceError)
                                }
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <button type='submit'>Submit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );

    return bookAdd;
}