import React, { useState } from 'react';

export const AddBook = (props) => {
    const cleanBook = { isbn: '', title: '', author: '', price: 0 };
    const [book, setBook] = useState(cleanBook);

    const handleFieldChange=(e)=>{
        setBook({...book, [e.target.name]: e.target.value});
    }

    const handleOnSubmit=(e)=>{
        e.preventDefault();
        props.setBookList(props.bookList.concat(book));
        props.history.push("/booklist");
    }

    let addBookPage = (
        <form onSubmit={handleOnSubmit}>
            <h3>Add a book</h3>
            <table>
                <tbody>
                    <tr>
                        <td>Isbn:</td>
                        <td>
                            <input
                                type="text"
                                placeholder="isbn"
                                name="isbn"
                                value={book.isbn}
                                onChange={handleFieldChange} />
                        </td>
                    </tr>
                    <tr>
                        <td>Title:</td>
                        <td>
                            <input
                            type="text"
                            placeholder='Title'
                            name='title'
                            value={book.title}
                            onChange={handleFieldChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Author:</td>
                        <td>
                            <input
                            type="text"
                            placeholder='author'
                            name='author'
                            value={book.author}
                            onChange={handleFieldChange}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Price:</td>
                        <td>
                            <input
                            type="text"
                            placeholder='price'
                            name='price'
                            value={book.price}
                            onChange={handleFieldChange}/>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );

    return addBookPage;
}