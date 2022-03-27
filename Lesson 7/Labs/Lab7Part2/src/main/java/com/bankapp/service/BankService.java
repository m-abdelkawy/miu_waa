package com.bankapp.service;

import com.bankapp.data.BankRepository;
import com.bankapp.domain.Account;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BankService {
    @Autowired
    private BankRepository bankRepository;

    public Account getAccount(int accountNumber) {
        return bankRepository.findById(accountNumber).orElse(null);
    }

    public Account saveAccount(int accountNumber, String accountHolder) {
        Account account = new Account(accountNumber, accountHolder);
        return bankRepository.save(account);
    }

    public void deleteAccount(int accountNumber) {
        bankRepository.deleteById(accountNumber);
    }

    public Account deposit(int accountNumber, double amount) {
        Account accountFromRepo = getAccount(accountNumber);
        if (accountFromRepo != null) {
            accountFromRepo.deposit(amount);
            bankRepository.save(accountFromRepo);
        }
        return accountFromRepo;
    }

    public Account withdraw(int accountNumber, double amount) {
        Account accountFromRepo = getAccount(accountNumber);
        if (accountFromRepo != null) {
            accountFromRepo.withdraw(amount);
            bankRepository.save(accountFromRepo);
        }
        return accountFromRepo;
    }
}
