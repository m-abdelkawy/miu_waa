package com.example;

import reactor.core.publisher.Flux;

import java.time.Duration;
import java.time.LocalDateTime;

public class ApplicationFlux {
    public static void main(String[] args) throws InterruptedException{
        System.out.println(LocalDateTime.now());
        Flux<String> flux = Flux.just("Walter", "Skyler", "Soul", "Jessy")
                .delayElements(Duration.ofSeconds(3));

        flux.subscribe(ApplicationFlux::printName);

        Thread.sleep(15000);
        System.out.println("Application Exits!");
    }

    public static void printName(String name){
        System.out.print(LocalDateTime.now() + " : ");
        System.out.println(name);
    }
}
