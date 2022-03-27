package com.customer.web;

import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import com.customer.core.Address;
import com.customer.core.Customer;
import com.customer.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class CustomerQuery implements GraphQLQueryResolver {

    @Autowired
    private CustomerService customerService;

    public List<Customer> getCustomers(int count){
        return customerService.getAllCustomers(count);
    }

    public Optional<Customer> getCustomer(final int customerNumber){
        return customerService.getCustomer(customerNumber);
    }

    public List<Customer> getCustomers2(String street, String city, String zip){
        return customerService.getCustomersWithAddress(street, city, zip);
    }

    public Optional<Address> getAddress(final int CustomerNumber){
        Optional<Customer> customerOptional = customerService.getCustomer(CustomerNumber);

        if(customerOptional.isPresent())
            return Optional.of(customerOptional.get().getAddress());

        return Optional.of(null);
    }
}
