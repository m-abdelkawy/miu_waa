package com.customer;

import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class CustomerMutation implements GraphQLMutationResolver {
    @Autowired
    private CustomerService customerService;

    public Customer createCustomer(final int customerId, final String name, final String email, final String phone){
        return customerService.createCustomer(customerId, name, email, phone);
    }
}
