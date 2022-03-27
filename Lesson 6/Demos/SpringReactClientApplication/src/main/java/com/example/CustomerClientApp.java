package com.example;

import com.example.core.Customer;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Flux;

import java.time.LocalDateTime;
import java.util.Collection;

public class CustomerClientApp {
    public static void main(String[] args) throws InterruptedException{
        Flux<Customer> response = WebClient.create("http://localhost:8080/customers")
                .get()
                .retrieve()
                .bodyToFlux(Customer.class);

        response.subscribe(customer->{
            System.out.println(LocalDateTime.now() + " : ");
            System.out.println(customer);
        });

        Thread.sleep(15000);
    }
}
