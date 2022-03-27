package com.customer;

import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class CustomerQuery implements GraphQLQueryResolver {
    @Autowired
    private CustomerService customerService;

    public List<Customer> getCustomers(final int count){
        return customerService.getAllCustomers(count);
    }

    public Optional<Customer> getCustomer(int customerId){
        return customerService.getCustomer(customerId);
    }
}
