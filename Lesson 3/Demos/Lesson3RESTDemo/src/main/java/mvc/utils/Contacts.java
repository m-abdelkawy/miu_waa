package mvc.utils;

import mvc.models.Contact;

import java.util.Collection;

public class Contacts {
    private Collection<Contact> contacts;

    public Contacts(Collection<Contact> contacts) {
        this.contacts = contacts;
    }

    public Collection<Contact> getContacts() {
        return contacts;
    }

    public void setContacts(Collection<Contact> contacts) {
        this.contacts = contacts;
    }
}
