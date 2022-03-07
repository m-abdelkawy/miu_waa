package mvc.services;

import mvc.data.ContactRepository;
import mvc.domain.Contact;
import mvc.integration.EmailSender;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class ContactService {
    @Autowired
    private ContactRepository contactRepository;

    @Autowired
    private EmailSender emailSender;

    public void add(Contact contact){
        contactRepository.save(contact);
        emailSender.sendEmail("welcome", contact.getEmail());
    }

    public void update(Contact contact){
        contactRepository.save(contact);
    }

    public Contact findByFirstName(String firstName){
        return contactRepository.findByFirstName(firstName);
    }

    public void delete(String firstName){
        Contact contact = contactRepository.findByFirstName(firstName);
        emailSender.sendEmail("Goodbye", contact.getEmail());
        contactRepository.delete(firstName);
    }

    public Collection<Contact> findAll(){
        return contactRepository.findAll();
    }
}
