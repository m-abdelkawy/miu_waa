package com.customer;

import com.customer.Customer;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class CustomerService {
    Map<Integer, Customer> customers = new HashMap<>();

    public List<Customer> getAllCustomers(int count){
        List<Customer> customerList = customers.values()
                .stream()
                .collect(Collectors.toList());
        return customerList.subList(0, count);
    }

    public Optional<Customer> getCustomer(int customerId){
        return Optional.of(customers.get(customerId));
    }

    public Customer createCustomer(int customerId, String name, String email, String phone){
        Customer customer = new Customer(customerId, name, email, phone);
        customers.put(customerId, customer);
        return customer;
    }
}
