package mvc.domain;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.List;

public class Account {
    @NotNull
    @Min(value = 1, message = "account number must not be less than 1")
    private int accountNumber;

    @NotNull
    @Size(min = 2, max = 30)
    private String accountHolder;

    private double balance;
    private List<BankTransaction> transactions;

    public Account() {
    }

    public Account(int accountNumber, String accountHolder) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
    }

    public Account(int accountNumber, String accountHolder, double balance) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    public int getAccountNumber() {
        return accountNumber;
    }

    public void setAccountNumber(int accountNumber) {
        this.accountNumber = accountNumber;
    }

    public String getAccountHolder() {
        return accountHolder;
    }

    public void setAccountHolder(String accountHolder) {
        this.accountHolder = accountHolder;
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

    public List<BankTransaction> getTransactions() {
        return transactions;
    }

    public void setTransactions(List<BankTransaction> transactions) {
        this.transactions = transactions;
    }

    public void deposit(double amount){
        // 01. update balance
        this.balance += amount;

        // 02. create transaction
        if(transactions == null){
            transactions = new ArrayList<>();
        }
        transactions.add(new BankTransaction(TransactionType.DEPOSIT, amount));
    }

    public void withdraw(double amount){
        // 01. update balance
        this.balance -= amount;

        // 02. create transaction
        if(transactions == null){
            transactions = new ArrayList<>();
        }
        transactions.add(new BankTransaction(TransactionType.WITHDRAWAL, amount));
    }
}
