package mvc.controllers;

import mvc.models.Contact;
import mvc.utils.Contacts;
import mvc.utils.CustomErrorType;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

@RestController
public class ContactController {
    private Map<String, Contact> contacts = new HashMap<>();

    public ContactController(){
        contacts.put("Frank", new Contact("Frank", "Brown", "fbrown@acme.com", "6415879632"));
        contacts.put("Mary", new Contact("Mary", "Jones", "mjones@acme.com", "6425856969"));
    }

    @GetMapping(value = "/contacts")
    public ResponseEntity<?> getAllContacts(){
        Collection<Contact> lstContact = contacts.values();
        if(lstContact.size() == 0){
            return new ResponseEntity<CustomErrorType>(new CustomErrorType("no contacts to view!"), HttpStatus.OK);
        }

        return new ResponseEntity<Collection<Contact>>(lstContact, HttpStatus.OK);
    }

    @GetMapping("/contacts2")
    public ResponseEntity<?> getAllContacts2(){
        Contacts allContats = new Contacts(contacts.values());
        return new ResponseEntity<Contacts>(allContats, HttpStatus.OK);
    }

    @GetMapping("/contacts/{firstName}")
    public ResponseEntity<?> getContact(@PathVariable String firstName){
        Contact contact = contacts.get(firstName);
        if(contact == null){
            return new ResponseEntity<CustomErrorType>(new CustomErrorType("Contact with first name = " + firstName +
                    " couldn't be found"), HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<Contact>(contact, HttpStatus.OK);
    }

    @PostMapping("/contacts")
    public ResponseEntity<?> addContact(@RequestBody Contact contact){
        contacts.put(contact.getFirstName(), contact);
        return new ResponseEntity<Contact>(contact, HttpStatus.OK);
    }

    @DeleteMapping("/contacts/{firstName}")
    public ResponseEntity<?> deleteContact(@PathVariable String firstName){
        Contact contact = contacts.get(firstName);
        if(contact == null){
            return new ResponseEntity<CustomErrorType>(new CustomErrorType("Contact with first name: "
                    + firstName + " does not exist!"), HttpStatus.NOT_FOUND);
        }

        contacts.remove(firstName);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping("/contacts/{firstName}")
    public ResponseEntity<?> updateContact(@PathVariable String firstName, @RequestBody Contact contact){
        contacts.put(firstName, contact);
        return new ResponseEntity<Contact>(contact, HttpStatus.OK);
    }
}
