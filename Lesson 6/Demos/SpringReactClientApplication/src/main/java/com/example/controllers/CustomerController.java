package com.example.controllers;

import com.example.core.Customer;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;

import java.time.Duration;

@RestController
public class CustomerController {
    @GetMapping(path = "/customers", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public Flux<Customer> getAllCustomers(){
        Flux<Customer> customerFlux = Flux.just(
                new Customer(1L, "Walter", "White", 45),
                new Customer(1L, "Skyler", "White", 40),
                new Customer(1L, "Saul", "Goodman", 42),
                new Customer(1L, "Jessy", "Pinkman", 29)
        ).delayElements(Duration.ofSeconds(3));

        return customerFlux;
    }
}
