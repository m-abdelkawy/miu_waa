package com.person.service;

import com.person.core.Person;
import com.person.dao.PersonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class PersonService {
    @Autowired
    private PersonRepository personRepository;

    public Flux<Person> findByJob(String job){
        return personRepository.findByJob(job);
    }

    public Mono<Person> savePerson(Person person){
        return personRepository.save(person);
    }
}
