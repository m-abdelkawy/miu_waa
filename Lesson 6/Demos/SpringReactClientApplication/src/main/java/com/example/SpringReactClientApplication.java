package com.example;

import com.example.core.Customer;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Flux;

import java.time.LocalDateTime;

@SpringBootApplication
public class SpringReactClientApplication {

	public static void main(String[] args) throws InterruptedException{

		SpringApplication.run(SpringReactClientApplication.class, args);

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
