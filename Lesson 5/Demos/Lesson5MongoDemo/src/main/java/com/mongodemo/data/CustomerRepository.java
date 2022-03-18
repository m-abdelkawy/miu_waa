package com.mongodemo.data;

import com.mongodemo.domain.Customer;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Collection;

@Repository
public interface CustomerRepository extends MongoRepository<Customer, Integer> {
    Customer findByPhone(String phone);

    @Query("{email: ?0}")
    Customer findCustomerWithEmail(String email);

    @Query("{'creditCard.type': ?0}")
    Collection<Customer> findCustomersWithCreditCardType(String cctype);
}
