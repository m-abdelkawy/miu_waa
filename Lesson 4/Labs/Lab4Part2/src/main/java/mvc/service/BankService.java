package mvc.service;

import mvc.data.BankRepository;
import mvc.domain.Account;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BankService {
    @Autowired
    private BankRepository bankRepository;

    public Account getAccount(int accountNumber){
        return bankRepository.findOne(accountNumber);
    }

    public void saveAccount(Account account){
        bankRepository.saveAccount(account);
    }

    public Account saveAccount(int accountNumber, String accountHolder){
        Account account = new Account(accountNumber, accountHolder);
        bankRepository.saveAccount(account);
        return account;
    }

    public void deleteAccount(int accountNumber){
        bankRepository.deleteAccount(accountNumber);
    }

    public Account deposit(int accountNumber, double amount){
        Account accountFromRepo = getAccount(accountNumber);
        if(accountFromRepo != null){
            accountFromRepo.deposit(amount);
            saveAccount(accountFromRepo);
        }
        return accountFromRepo;
    }

    public Account withdraw(int accountNumber, double amount){
        Account accountFromRepo = getAccount(accountNumber);
        if(accountFromRepo != null){
            accountFromRepo.withdraw(amount);
            saveAccount(accountFromRepo);
        }
        return accountFromRepo;
    }
}
