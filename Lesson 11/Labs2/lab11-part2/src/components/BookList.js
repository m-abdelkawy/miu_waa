import React from "react";

export const BookList = (props) => {

    const removeBook = (e) => {
        const bookIsbn = e.target.value;
        const newBookList = props.bookList.filter(book => book.isbn !== bookIsbn);
        props.setBookList(newBookList);
    }

    const handleAddBook=()=>{
        props.history.push("/addbook");
    }

    const renderBookList = () => {
        return props.bookList.map(book => {
            return (
                <tr key={book.isbn}>
                    <td>{book.isbn}</td>
                    <td>{book.title}</td>
                    <td>{book.aithor}</td>
                    <td>{book.price}</td>
                    <td>
                        <button value={book.isbn} onClick={removeBook}>Remove</button>
                    </td>
                </tr>
            )
        })
    }

    let booklistpage = (
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
                    renderBookList()
                }
                <tr>
                    <td>
                        <button onClick={handleAddBook}>Add Book</button>
                    </td>
                </tr>
            </tbody>
        </table>
    );

    return booklistpage;
}