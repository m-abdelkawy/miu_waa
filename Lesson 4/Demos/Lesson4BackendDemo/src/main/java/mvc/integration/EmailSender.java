package mvc.integration;

import org.springframework.stereotype.Component;

@Component
public class EmailSender {
    public void sendEmail(String message, String emailAddress){
        System.out.println("Send email message " + message + " to " + emailAddress);
    }
}
