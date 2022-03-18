package com.bankapp.service.adapters;

import com.bankapp.domain.Account;
import com.bankapp.domain.BankTransaction;
import com.bankapp.service.dto.AccountDTO;

import java.util.Arrays;
import java.util.List;

public class AccountAdapter {
    public static Account getAccount(AccountDTO accountDTO) {
        Account account = new Account();

        if (accountDTO != null) {
            account = new Account(accountDTO.getAccountNumber(),
                    accountDTO.getAccountHolder(),
                    accountDTO.getBalance());

            //account.setTransactions(List.copyOf(accountDTO.getTransactions()));
        }

        return account;
    }

    public static AccountDTO getAccountDto(Account account) {
        AccountDTO accountDTO = new AccountDTO();

        if (account != null) {
            accountDTO = new AccountDTO(account.getAccountNumber(),
                    account.getAccountHolder(),
                    account.getBalance());

            List<BankTransaction> transactions = account.getTransactions();
            if (transactions != null)
                accountDTO.setTransactions(List.copyOf(account.getTransactions()));
        }

        return accountDTO;
    }
}
