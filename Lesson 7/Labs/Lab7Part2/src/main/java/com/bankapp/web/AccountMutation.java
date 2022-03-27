package com.bankapp.web;

import com.bankapp.domain.Account;
import com.bankapp.service.BankService;
import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class AccountMutation implements GraphQLMutationResolver {
    @Autowired
    private BankService bankService;

    public Account createAccount(int accountNumber, String accountHolder){
        return bankService.saveAccount(accountNumber, accountHolder);
    }

    public void deleteAccount(int accountNumber){
        bankService.deleteAccount(accountNumber);
    }

    public Account deposit(int accountNumber, double amount){
        return bankService.deposit(accountNumber, amount);
    }

    public Account withdraw(int accountNumber, double amount){
        return bankService.withdraw(accountNumber, amount);
    }
}
