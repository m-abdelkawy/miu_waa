package mvc.web.controllers;

import mvc.domain.Account;
import mvc.service.BankService;
import mvc.utils.CustomErrorType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Min;

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
            res = new ResponseEntity<Account>(account, HttpStatus.OK);
        }
        return res;
    }

    @PostMapping("/accounts")
    public ResponseEntity<?> createAccount(@RequestBody @Valid Account account) {
        bankService.saveAccount(account);
        return new ResponseEntity<Account>(account, HttpStatus.CREATED);
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
    public ResponseEntity<?> deposit(@PathVariable int accountNumber, @RequestBody @Min(1) double amount) {
        Account account = bankService.getAccount(accountNumber);
        ResponseEntity<?> res;
        if (account == null) {
            String errorMessage = "Account with number: " + accountNumber + " is not available!";
            res = new ResponseEntity<CustomErrorType>(new CustomErrorType(errorMessage), HttpStatus.NOT_FOUND);
        } else {
            bankService.deposit(accountNumber, amount);
            res = new ResponseEntity<Account>(account, HttpStatus.OK);
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
            res = new ResponseEntity<Account>(account, HttpStatus.OK);
        }
        return res;
    }
}
