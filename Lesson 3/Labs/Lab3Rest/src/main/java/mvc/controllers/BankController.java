package mvc.controllers;

import mvc.models.Account;
import mvc.utils.CustomErrorType;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
public class BankController {
    Map<Integer, Account> accounts = new HashMap<>();

    public BankController() {

    }

    @GetMapping("/accounts/{accountNumber}")
    public ResponseEntity<?> getAccount(@PathVariable int accountNumber) {
        Account account = accounts.get(accountNumber);
        if (account == null) {
            return new ResponseEntity<CustomErrorType>(
                    new CustomErrorType("Account with number: " + accountNumber + " is not available!"),
                    HttpStatus.NOT_FOUND
            );
        }

        return new ResponseEntity<Account>(account, HttpStatus.OK);
    }

    @PostMapping("/accounts")
    public ResponseEntity<?> createAccount(@RequestParam int accountNumber, @RequestParam String accountHolder) {
        Account accountToAdd = new Account(accountNumber, accountHolder);
        this.accounts.put(accountNumber, accountToAdd);
        return new ResponseEntity<Account>(accountToAdd, HttpStatus.CREATED);
    }

    @DeleteMapping("/accounts/{accountNumber}")
    public ResponseEntity<?> removeAccount(@PathVariable int accountNumber) {
        Account accountToRemove = accounts.get(accountNumber);
        if (accountToRemove == null) {
            return new ResponseEntity<CustomErrorType>(
                    new CustomErrorType("Account with number: " + accountNumber + " is not available!")
                    , HttpStatus.NOT_FOUND);
        }
        accounts.remove(accountNumber);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PostMapping("/accounts/{accountNumber}/deposit")
    public ResponseEntity<?> deposit(@PathVariable int accountNumber, @RequestBody double amount) {
        Account account = accounts.get(accountNumber);
        if (account == null) {
            return new ResponseEntity<CustomErrorType>(
                    new CustomErrorType("Account with number: " + accountNumber + " is not available!"),
                    HttpStatus.NOT_FOUND);
        }
        account.deposit(amount);
        return new ResponseEntity<Account>(account, HttpStatus.OK);
    }

    @PostMapping("/accounts/{accountNumber}/withdraw")
    public ResponseEntity<?> withdraw(@PathVariable int accountNumber, @RequestBody double amount){
        Account account = accounts.get(accountNumber);
        if (account == null) {
            return new ResponseEntity<CustomErrorType>(
                    new CustomErrorType("Account with number: " + accountNumber + " is not available!"),
                    HttpStatus.NOT_FOUND);
        }
        account.withdraw(amount);
        return new ResponseEntity<Account>(account, HttpStatus.OK);
    }
}
