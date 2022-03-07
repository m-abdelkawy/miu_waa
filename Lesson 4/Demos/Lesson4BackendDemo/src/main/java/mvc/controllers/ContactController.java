package mvc.controllers;

import mvc.domain.Contact;
import mvc.domain.dtos.Contacts;
import mvc.services.ContactService;
import mvc.utils.CustomErrorType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
public class ContactController {
    @Autowired
    private ContactService contactService;

    @GetMapping("/contacts")
    public ResponseEntity<?> getAllContacts(){
        Collection<Contact> contacts = contactService.findAll();
        Contacts allContacts = new Contacts(contacts);
        return new ResponseEntity<Contacts>(allContacts, HttpStatus.OK);
    }

    @GetMapping("/contacts/{firstName}")
    public ResponseEntity<?> findContact(@PathVariable String firstName){
        Contact contact = contactService.findByFirstName(firstName);

        if(contact == null){
            String errMsg = "Contact with first name: " + firstName + " is not available!";
            return new ResponseEntity<CustomErrorType>(new CustomErrorType(errMsg), HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<Contact>(contact, HttpStatus.OK);
    }

    @PostMapping("/contacts")
    public ResponseEntity<?> addContact(@RequestBody Contact contact){
        contactService.add(contact);
        return new ResponseEntity<Contact>(contact, HttpStatus.CREATED);
    }

    @PutMapping("/contacts/{firstName}")
    public ResponseEntity<?> updateContact(@PathVariable String firstName, @RequestBody Contact contact){
        contactService.update(contact);
        return new ResponseEntity<Contact>(contact, HttpStatus.NO_CONTENT);
    }

    @DeleteMapping("/contacts/{firstName}")
    public ResponseEntity<?> deleteContact(@PathVariable String firstName){
        Contact contact = contactService.findByFirstName(firstName);
        if(contact == null){
            String errMsg = "contact with first name: " + firstName + " is not available";
            return new ResponseEntity<CustomErrorType>(new CustomErrorType(errMsg), HttpStatus.NOT_FOUND);
        }
        contactService.delete(firstName);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }



}
