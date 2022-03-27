package com.bankapp.web;

import com.bankapp.domain.Account;
import com.bankapp.service.BankService;
import com.bankapp.service.adapters.AccountAdapter;
import com.bankapp.service.dto.AccountDTO;
import com.bankapp.utils.CustomErrorType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class BankController {
    @Autowired
    private BankService bankService;

    @GetMapping("/accounts/{accountNumber}")
    public ResponseEntity<?> getAccount(@PathVariable int accountNumber) {
        Account account = bankService.getAccount(accountNumber);
        ResponseEntity<?> res;
        if (account == null) {
            String errorMessage = "Account with number: " + accountNumber + " is not available!";
            res = new ResponseEntity<CustomErrorType>(new CustomErrorType(errorMessage), HttpStatus.NOT_FOUND);
        } else {
            res = new ResponseEntity<AccountDTO>(AccountAdapter.getAccountDto(account), HttpStatus.OK);
        }
        return res;
    }

    @PostMapping("/accounts")
    public ResponseEntity<?> createAccount(@RequestBody AccountDTO accountDTO) {
        bankService.saveAccount(accountDTO.getAccountNumber(), accountDTO.getAccountHolder());
        return new ResponseEntity<AccountDTO>(accountDTO, HttpStatus.CREATED);
    }

    @DeleteMapping("/accounts/{accountNumber}")
    public ResponseEntity<?> deleteAccount(@PathVariable int accountNumber) {
        Account account = bankService.getAccount(accountNumber);
        ResponseEntity<?> res;
        if (account == null) {
            String errorMessage = "Account with number: " + accountNumber + " is not available!";
            res = new ResponseEntity<CustomErrorType>(new CustomErrorType(errorMessage), HttpStatus.NOT_FOUND);
        } else {
            bankService.deleteAccount(accountNumber);
            res = new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return res;
    }

    @PostMapping("/accounts/{accountNumber}/deposit")
    public ResponseEntity<?> deposit(@PathVariable int accountNumber, @RequestBody double amount) {
        Account account = bankService.getAccount(accountNumber);
        ResponseEntity<?> res;
        if (account == null) {
            String errorMessage = "Account with number: " + accountNumber + " is not available!";
            res = new ResponseEntity<CustomErrorType>(new CustomErrorType(errorMessage), HttpStatus.NOT_FOUND);
        } else {
            bankService.deposit(accountNumber, amount);
            res = new ResponseEntity<AccountDTO>(AccountAdapter.getAccountDto(account), HttpStatus.OK);
        }
        return res;
    }

    @PostMapping("/accounts/{accountNumber}/withdraw")
    public ResponseEntity<?> withdraw(@PathVariable int accountNumber, @RequestBody double amount) {
        Account account = bankService.getAccount(accountNumber);
        ResponseEntity<?> res;
        if (account == null) {
            String errorMessage = "Account with number: " + accountNumber + " is not available!";
            res = new ResponseEntity<CustomErrorType>(new CustomErrorType(errorMessage), HttpStatus.NOT_FOUND);
        } else {
            bankService.withdraw(accountNumber, amount);
            res = new ResponseEntity<AccountDTO>(AccountAdapter.getAccountDto(account), HttpStatus.OK);
        }
        return res;
    }
}
