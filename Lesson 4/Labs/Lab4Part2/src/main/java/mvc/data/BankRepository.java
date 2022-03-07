package mvc.data;

import mvc.domain.Account;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

@Repository
public class BankRepository {
    private Map<Integer, Account> accounts = new HashMap<>();

    public Account findOne(int accountNumber){
        return accounts.get(accountNumber);
    }

    public void saveAccount(Account account){
        accounts.put(account.getAccountNumber(), account);
    }

    public void deleteAccount(int accountNumber){
        accounts.remove(accountNumber);
    }

}
