import React, { useState } from "react";

export const AddBook=(props)=>{
    const cleanbook = {isbn:"", title:"", author:"", price:""};
    const [book, setBook] = useState(cleanbook);

    const handleSubmit=(e)=>{
        props.setBooklist(props.booklist.concat(book));
        props.history.push("/");
    }

    const handleFieldChange=(e)=>{
        setBook({...book, [e.target.name]: e.target.value});
    }

    let addForm=(
        <div>
            <h2>Add a new user</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    ISBN
                    <input
                    type="text"
                    placeholder="ISBN"
                    name="isbn"
                    value={book.isbn}
                    onChange={handleFieldChange}/>
                </div>
                <div>
                    Title
                    <input
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={book.title}
                    onChange={handleFieldChange}/>
                </div>
                <div>
                    Last Name
                    <input
                    type="text"
                    placeholder="Author"
                    name="author"
                    value={book.author}
                    onChange={handleFieldChange}/>
                </div>
                <div>
                    Email
                    <input
                    type="text"
                    placeholder="price"
                    name="price"
                    value={book.price}
                    onChange={handleFieldChange}/>
                </div>
                <button type="submit">Add Book</button>
            </form>
        </div>
    );

    return addForm;
}