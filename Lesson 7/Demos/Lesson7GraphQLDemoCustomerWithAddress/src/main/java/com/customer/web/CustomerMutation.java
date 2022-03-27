package com.customer.web;

import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import com.customer.core.Customer;
import com.customer.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class CustomerMutation implements GraphQLMutationResolver {
    @Autowired
    private CustomerService customerService;

    public Customer createCustomer(int customerNumber, String name, String email, String phone, String street, String city, String zip) {
        return customerService.createCustomer(customerNumber, name, email, phone, street, city, zip);
    }
}
