package com.person.controllers;

import com.person.core.Person;
import com.person.service.PersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;

@RestController
public class PersonController {
    @Autowired
    private PersonService personService;

    private int x = 10;

    @GetMapping(path = "/persons/{job}", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public Flux<Person> getPersonsByJob(@PathVariable("job") String job) {
        return personService.findByJob(job);
    }

    @GetMapping(path = "/developers", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public Flux<Person> getDevelopers() {
        return personService.findByJob("Developer");
    }

    @Scheduled(fixedRate = 3000)
    private void savePerson() {
        System.out.println("Save Person Frank Brown " + x);
        Person person = new Person(x++ + "", "Frank Brown", "Developer");
        personService.savePerson(person).block();
    }
}
