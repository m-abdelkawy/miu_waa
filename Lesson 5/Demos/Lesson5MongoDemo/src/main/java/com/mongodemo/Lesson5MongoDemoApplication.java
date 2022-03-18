package com.mongodemo;

import com.mongodemo.data.CustomerRepository;
import com.mongodemo.domain.CreditCard;
import com.mongodemo.domain.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.List;

@SpringBootApplication
public class Lesson5MongoDemoApplication implements CommandLineRunner {

    @Autowired
    private CustomerRepository customerRepository;

    public static void main(String[] args) {
        SpringApplication.run(Lesson5MongoDemoApplication.class, args);
    }


    @Override
    public void run(String... args) throws Exception {
        //create Customer
//        Customer customer1 = new Customer(101, "Ahmed Ali", "a.ali@test.com", "640-587-4968");
//        CreditCard creditCard1 = new CreditCard("101-158", "Visa", "09/24");
//        customer1.setCreditCard(creditCard1);
//        customerRepository.save(customer1);
//
//
//        Customer customer2 = new Customer(102, "Mohammed Hammam", "mhammam@test.com", "641-587-9858");
//        CreditCard creditCard2 = new CreditCard("102-158", "MasterCard", "11/23");
//        customer2.setCreditCard(creditCard2);
//        customerRepository.save(customer2);
//
//        Customer customer3 = new Customer(103, "Amgad Shalaby", "ashalaby@test.com", "202-587-9699");
//        CreditCard creditCard3 = new CreditCard("103-158", "MasterCard", "08/25");
//        customer3.setCreditCard(creditCard3);
//        customerRepository.save(customer3);
//
//        Customer customer4 = new Customer(104, "Abdelrahman Emam", "aemam@test.com", "644-858-9897");
//        CreditCard creditCard4 = new CreditCard("104-158", "Electron", "07/22");
//        customer4.setCreditCard(creditCard4);
//        customerRepository.save(customer4);

        /*------------------------------Update a customer-----------------------------*/
        Customer customerFromRepo = customerRepository.findById(101).get();
        customerFromRepo.setName("Ahmed Ali 2");
        customerRepository.save(customerFromRepo);

        /*------------------------------Get from db-----------------------------*/

        System.out.println(customerRepository.findById(102).get());
        System.out.println(customerRepository.findById(104).get());

        /*------------------------------Get All Customers-----------------------------*/
        List<Customer> customers = customerRepository.findAll();
        System.out.println(customers);

        /*------------------------------find by phone-----------------------------*/
        System.out.println("phone: 641-587-9858");
        System.out.println(customerRepository.findByPhone("641-587-9858"));
        /*------------------------------find by email-----------------------------*/
        System.out.println("email: aemam@test.com");
        System.out.println(customerRepository.findCustomerWithEmail("aemam@test.com"));
        /*------------------------------find by email-----------------------------*/
        System.out.println("Credit Card Type: Visa");
        System.out.println(customerRepository.findCustomersWithCreditCardType("MasterCard"));

        //Delete all
        //customerRepository.deleteAll();
    }
}
