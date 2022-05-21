import React, { useState } from "react";

const Contacts = () => {

    const cleanContact = { firstname: '', lastname: '', email: '', phone: '' };

    const initialList = [
        { firstname: 'Frank', lastname: 'Brown', email: 'fbrown@test.com', phone: '6587458987' },
        { firstname: 'Mary', lastname: 'Jones', email: 'mjones@test.com', phone: '9874774586' }
    ]
    const [contactlist, setContactlist] = useState(initialList);

    const [contact, setContact] = useState(cleanContact);

    const removeContact = (e) => {
        const phone = e.target.value;
        const newList = contactlist.filter(contact => contact.phone !== phone);
        setContactlist(newList);
    }

    const renderList = (list) => {
        return list.map(contact => {
            return (
                <tr key={contact.phone}>
                    <td>{contact.firstname}</td>
                    <td>{contact.lastname}</td>
                    <td>{contact.email}</td>
                    <td>{contact.phone}</td>
                    <td>
                        <button value={contact.phone} onClick={removeContact}>Remove</button>
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
        setContactlist(contactlist.concat(contact));
        setContact(cleanContact);
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

export default Contacts;