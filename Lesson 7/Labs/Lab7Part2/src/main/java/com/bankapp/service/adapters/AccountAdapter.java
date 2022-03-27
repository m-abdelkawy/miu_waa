package com.bankapp.service.adapters;

import com.bankapp.domain.Account;
import com.bankapp.domain.BankTransaction;
import com.bankapp.service.dto.AccountDTO;

import java.util.List;

public class AccountAdapter {
    public static Account getAccount(AccountDTO accountDto) {
        Account account = new Account();

        if (accountDto != null) {
            account = new Account(accountDto.getAccountNumber(),
                    accountDto.getAccountHolder(),
                    accountDto.getBalance());
        }

        return account;
    }

    public static AccountDTO getAccountDto(Account account) {
        AccountDTO accountDto = new AccountDTO();

        if (account != null) {
            accountDto = new AccountDTO(account.getAccountNumber(),
                    account.getAccountHolder(),
                    account.getBalance());

            List<BankTransaction> transactions = account.getTransactions();
            if(transactions != null)
                accountDto.setTransactions(List.copyOf(transactions));
        }

        return accountDto;
    }
}
