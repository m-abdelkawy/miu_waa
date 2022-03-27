package com.customer.service;

import com.customer.core.Address;
import com.customer.core.Customer;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CustomerService {
    Map<Integer, Customer> customers = new HashMap<>();

    public List<Customer> getAllCustomers(int count) {
        List<Customer> customerList = customers.values()
                .stream()
                .collect(Collectors.toList());

        if (count > customerList.size())
            return customerList;

        return customerList.subList(0, count);
    }

    public Optional<Customer> getCustomer(int customerNumber) {
        return Optional.of(customers.get(customerNumber));
    }

    public Customer createCustomer(int customerNumber, String name, String email, String phone, String street, String city, String zip) {
        Address address = new Address(street, city, zip);
        Customer customer = new Customer(customerNumber, name, email, phone);
        customer.setAddress(address);
        customers.put(customerNumber, customer);
        return customer;
    }

    public List<Customer> getCustomersWithAddress(String street, String city, String zip) {
        List<Customer> customerList = customers.values()
                .stream()
                .filter(c -> c.getAddress().getStreet().toLowerCase().equals(street.toLowerCase()))
                .filter(c -> c.getAddress().getCity().toLowerCase().equals(city.toLowerCase()))
                .filter(c -> c.getAddress().getZip().toLowerCase().equals(zip.toLowerCase()))
                .collect(Collectors.toList());
        return customerList;
    }
}
