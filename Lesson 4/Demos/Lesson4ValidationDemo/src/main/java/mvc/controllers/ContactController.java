package mvc.controllers;

import mvc.dtos.Contacts;
import mvc.models.Contact;
import mvc.utils.CustomErrorType;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;

@RestController
public class ContactController {
    private Map<String, Contact> contacts = new HashMap<>();

    public ContactController() {
        contacts.put("Frank", new Contact("Frank", "Brown", "fbrown@acme.com", "2341678453"));
        contacts.put("Mary", new Contact("Mary", "Jones", "mjones@acme.com", "2341674376"));
    }

    @GetMapping("/contacts")
    public ResponseEntity<?> getAllContacts(){
        Contacts allContacts = new Contacts(contacts.values());
        return new ResponseEntity<Contacts>(allContacts, HttpStatus.OK);
    }

    @GetMapping("/contacts/{firstName}")
    public ResponseEntity<?> getContact(@PathVariable String firstName){
        Contact contact = contacts.get(firstName);
        if(contact == null){
            String errorMsg = "Contact with first name: " + firstName + " is not available!";
            return new ResponseEntity<CustomErrorType>(new CustomErrorType(errorMsg), HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Contact>(contact, HttpStatus.OK);
    }

    @PostMapping("/contacts")
    public ResponseEntity<?> addContact(@RequestBody @Valid Contact contact){
        contacts.put(contact.getFirstName(), contact);
        return new ResponseEntity<Contact>(contact, HttpStatus.CREATED);
    }

    @PutMapping("/contacts/{firstName}")
    public ResponseEntity<?> updateContact(@PathVariable String firstName, @RequestBody @Valid Contact contact){
        contacts.put(firstName, contact);
        return new ResponseEntity<Contact>(contact, HttpStatus.OK);
    }

    @DeleteMapping("/contacts/{firstName}")
    public ResponseEntity<?> deleteContact(@PathVariable String firstName){
        Contact contact = contacts.get(firstName);
        if(contact == null){
            String errMsg = "Conact with first name: " + firstName + " is not available!";
            return new ResponseEntity<CustomErrorType>(new CustomErrorType(errMsg), HttpStatus.NOT_FOUND);
        }
        contacts.remove(firstName);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
