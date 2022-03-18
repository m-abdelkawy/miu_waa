package com.mongodemo.data;

import com.mongodemo.domain.Student;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface StudentRepository extends MongoRepository<Student, Integer> {
    List<Student> findStudentsByName(String name);
    Student findByPhoneNumber(String phoneNumber);

    @Query("{'address.city': ?0}")
    List<Student> findByCity(String city);
}
