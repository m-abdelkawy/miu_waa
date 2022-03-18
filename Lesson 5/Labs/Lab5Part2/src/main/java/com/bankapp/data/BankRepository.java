package com.bankapp.data;

import com.bankapp.domain.Account;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.HashMap;
import java.util.Map;

public interface BankRepository extends MongoRepository<Account, Integer> {
}
