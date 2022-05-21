import axios from "axios";
import React, { useState } from "react";

const ContactsAxios = () => {
    const APIURL = 'http://localhost:8080';

    const cleanContact = { firstname: '', lastname: '', email: '', phone: '' };

    const [contactlist, setContactlist] = useState([]);

    const [contact, setContact] = useState(cleanContact);

    const loadContacts = () => {
        axios.get(`${APIURL}/contacts`)
        .then(res =>{
            setContactlist(res.data.contacts);
        });
    }

    const addContact=(contact)=>{
        axios.post(`${APIURL}/contacts`, contact)
        .then(res=>{
            console.log('contact ' + res.data.firstname + ' added');
            loadContacts();
        });
    }

    const removeContact = (e) => {
        const firstname = e.target.value;

        axios.delete(`${APIURL}/contacts/${firstname}`)
        .then(res=>{
           loadContacts(); 
        });        
    }

    const renderList = (list) => {
        return list.map(contact => {
            return (
                <tr key={contact.firstname}>
                    <td>{contact.firstname}</td>
                    <td>{contact.lastname}</td>
                    <td>{contact.email}</td>
                    <td>{contact.phone}</td>
                    <td>
                        <button value={contact.firstname} onClick={removeContact}>Remove</button>
                    </td>
                </tr>
            );
        })
    }


    const handleFieldChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(contact){
            addContact(contact);
        }
        //clear form
        setContact(cleanContact);

        loadContacts();
    }

    let page = (
        <div>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            renderList(contactlist)
                        }
                    </tbody>
                </table>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        Firstname:
                        <input type="text" name="firstname" value={contact.firstname} onChange={e => handleFieldChange(e)} />
                    </div>
                    <div>
                        Lastname:
                        <input type="text" name="lastname" value={contact.lastname} onChange={handleFieldChange} />
                    </div>
                    <div>
                        Email:
                        <input type="text" name="email" value={contact.email} onChange={handleFieldChange} />
                    </div>
                    <div>
                        Phone:
                        <input type="text" name="phone" value={contact.phone} onChange={handleFieldChange} />
                    </div>
                    <div>
                        <button>Add Contact</button>
                    </div>
                </form>
            </div>
        </div>
    );

    return page;
}

export default ContactsAxios;