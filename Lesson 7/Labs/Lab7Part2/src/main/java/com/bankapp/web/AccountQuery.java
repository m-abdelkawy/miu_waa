package com.bankapp.web;

import com.bankapp.domain.Account;
import com.bankapp.service.BankService;
import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class AccountQuery implements GraphQLQueryResolver {
    @Autowired
    private BankService bankService;

    public Account getAccount(int accountNumber){
        return bankService.getAccount(accountNumber);
    }
}
