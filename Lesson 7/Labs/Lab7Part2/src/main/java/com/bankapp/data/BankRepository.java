package com.bankapp.data;

import com.bankapp.domain.Account;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface BankRepository extends MongoRepository<Account, Integer> {
}
