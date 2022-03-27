package com.example;

import reactor.core.publisher.Mono;

import java.time.Duration;
import java.time.LocalDateTime;

public class ApplicationMono {
    public static void main(String[] args) throws InterruptedException{
        System.out.println(LocalDateTime.now());
        Mono<String> mono = Mono.just("Frank")
                .delayElement(Duration.ofSeconds(2));

        mono.subscribe(ApplicationMono::printName);
        System.out.println("Non Blocking code");

        Thread.sleep(10000);
        System.out.println(LocalDateTime.now());
    }

    public static void printName(String name){
        System.out.print(LocalDateTime.now() + " : ");
        System.out.println(name);
    }
}
