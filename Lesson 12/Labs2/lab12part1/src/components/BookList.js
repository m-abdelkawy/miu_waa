import axios from 'axios';
import React, { useState } from 'react';

export const BookList = () => {

    const APIURL = 'http://localhost:8090/api';

    const cleanBook = { isbn: '', title: '', author: '', price: '' };
    const [book, setBook] = useState(cleanBook);
    const [bookList, setBookList] = useState([]);

    const [isbnErrors, setIsbnErrors] = useState({});
    const [titleErrors, setTitleErrors] = useState({});
    const [authorErrors, setAuthorErrors] = useState({});
    const [priceErrors, setPriceErrors] = useState({});

    const handleFieldChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value });
    }

    const renderList = (list) => {
        return list.map(book => {
            return (
                <tr key={book.isbn}>
                    <td>{book.isbn}</td>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.price}</td>
                    <td>
                        <button value={book.isbn} onClick={removeBook}>Remove</button>
                    </td>
                </tr>
            );
        });
    }

    const addBook=(book)=>{
        axios.post(`${APIURL}/books`, book)
        .then(res=>{
            console.log(res.headers);
            console.log('Book -- ' + res.data.title + ' -- added successfully!');
            //loadBooks();
        });
    }

    const removeBook=(e)=>{
        const isbn = e.target.value;
        axios.delete(`${APIURL}/books/${isbn}`)
        .then(res=>{
            console.log(res.headers);
            console.log(`book ${isbn} deleted successfully!`);
            loadBooks();
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const isFormValid = validateForm();
        //debugger;
        if (isFormValid) {
            addBook(book);

            //clear form
            setBook(cleanBook);

            loadBooks();
        }
        //load books
    }

    const loadBooks = () => {
        axios.get(`${APIURL}/books`)
            .then(res => {
                setBookList(res.data);
            });
    }

    const validateForm = () => {
        let isValid = true;

        const isbnErrs = {};
        const titleErrs = {};
        const authorErrs = {};
        const priceErrs = {};

        if (book.isbn.trim().length < 2) {
            isbnErrs.short = 'isbn is too short!'
            isValid = false;
        }
        if (book.isbn.trim().length > 5) {
            isbnErrs.long = 'isbn is too long';
            isValid = false;
        }
        if (book.title.trim().length < 2) {
            titleErrs.short = 'title needs to be more than 2 characters!';
            isValid = false;
        }
        if (book.author.trim().length < 2) {
            authorErrs.short = 'author name should be more than 2 characters in length!';
            isValid = false;
        }
        if (book.price == 0 || parseInt(book.price) < 0) {
            priceErrs.invalid = 'price cannot be zero or less';
            isValid = false;
        }

        //set errors
        setIsbnErrors(isbnErrs);
        setTitleErrors(titleErrs);
        setAuthorErrors(authorErrs);
        setPriceErrors(priceErrs);

        return isValid;
    }



    let page = (
        <div>
            <h1>Book List</h1>
            <table>
                <thead>
                    <tr>
                        <th>Isbn</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        renderList(bookList)
                    }
                </tbody>
            </table>
            <button onClick={loadBooks}>Load Books</button>
            <h1>Book register</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    ISBN:
                    <input type="text" name="isbn" placeholder='ISBN' value={book.isbn} onChange={handleFieldChange} />
                    {
                        Object.keys(isbnErrors).map(key => {
                            return (<div style={{ color: 'red' }}>{isbnErrors[key]}</div>)
                        })
                    }
                </div>
                <div>
                    Title:
                    <input type="text" name='title' placeholder="Title" value={book.title} onChange={handleFieldChange} />
                    {
                        Object.keys(titleErrors).map(key => {
                            return (<div style={{ color: 'red' }}>{titleErrors[key]}</div>)
                        })
                    }
                </div>
                <div>
                    Author:
                    <input type='text' name="author" placeholder="Author" value={book.author} onChange={handleFieldChange} />
                    {
                        Object.keys(authorErrors).map(key => {
                            return (<div style={{ color: 'red' }}>{authorErrors[key]}</div>)
                        })
                    }
                </div>
                <div>
                    Price:
                    <input type="price" name="price" placeholder="Price" value={book.price} onChange={handleFieldChange} />
                    {
                        Object.keys(priceErrors).map(key => {
                            return (<div style={{ color: 'red' }}>{priceErrors[key]}</div>)
                        })
                    }
                </div>
                <div>
                    <button type='submit'>Add Book</button>
                </div>
            </form>
        </div>
    );

    return page;
}