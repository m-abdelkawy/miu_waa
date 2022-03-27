package com.bankapp.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Document("accounts")
public class Account {
    @Id
    private int accountNumber;
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
        operateTransaction(amount, TransactionType.DEPOSIT);
    }

    public void withdraw(double amount){
        operateTransaction(amount, TransactionType.WITHDRAWAL);
    }

    private void operateTransaction(double amount, TransactionType transactionType){
        if(transactionType.equals(TransactionType.DEPOSIT))
            balance += amount;
        else if(transactionType.equals(TransactionType.WITHDRAWAL))
            balance -= amount;

        if(transactions == null)
            transactions = new ArrayList<>();

        BankTransaction transaction = new BankTransaction(transactionType, amount);
        transactions.add(transaction);
    }

    @Override
    public String toString() {
        return "Account{" +
                "accountNumber=" + accountNumber +
                ", accountHolder='" + accountHolder + '\'' +
                ", balance=" + balance +
                ", transactions=" + transactions +
                '}';
    }
}
