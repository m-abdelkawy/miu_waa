package mvc.models;

import java.util.ArrayList;
import java.util.List;

public class Account {
    private int accountNumber;
    private String accountHolder;
    private double balance;
    private List<BankTransaction> transactions;

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
        // update balance
        this.balance+=amount;

        // create transaction
        if(this.transactions == null){
            this.transactions = new ArrayList<>();
        }
        BankTransaction transaction = new BankTransaction(TransactionType.DEPOSIT, amount);
        this.transactions.add(transaction);
    }

    public void withdraw(double amount){
        // update balance
        this.balance -= amount;

        // create transaction
        if(this.transactions == null){
            this.transactions = new ArrayList<>();
        }
        this.transactions.add(new BankTransaction(TransactionType.WITHDRAWAL, amount));
    }
}
