import React, { useState } from "react";

export const BookList = (props) => {
    const cleanbook = { isbn: "", title: "", author: "", price: "" };
    const [book, setBook] = useState(cleanbook);

    const handleAddBook = () => {
        props.history.push("/addbook");
    }

    const removeBook = (e) => {
        let newbooklist = props.booklist.filter(book => book.isbn !== e.target.value);
        props.setBooklist(newbooklist);
    }

    let booklistPage = (
        <div>
            <h1>Books</h1>
            <table>
                <thead>
                    <tr>
                        <td>Isbn</td>
                        <td>Title</td>
                        <td>Author</td>
                        <td>Price</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.booklist.map(book => (
                            <tr key={book.isbn}>
                                <td>{book.isbn}</td>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td>{book.price}</td>
                                <td><button value={book.isbn} onClick={removeBook}>Remove</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <button onClick={handleAddBook}>Add Book</button>
        </div>
    );
    return booklistPage;
}