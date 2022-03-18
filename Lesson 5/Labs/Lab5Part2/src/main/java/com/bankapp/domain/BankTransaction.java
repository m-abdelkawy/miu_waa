package com.bankapp.domain;

import java.time.LocalDateTime;

public class BankTransaction {
    private TransactionType transactionType;
    private double amount;
    private LocalDateTime date;

    public BankTransaction(TransactionType transactionType, double amount) {
        this.transactionType = transactionType;
        this.amount = amount;
        this.date = LocalDateTime.now();
    }

    public TransactionType getTransactionType() {
        return transactionType;
    }

    public double getAmount() {
        return amount;
    }

    public LocalDateTime getDate() {
        return date;
    }

    @Override
    public String toString() {
        return "BankTransaction{" +
                "transactionType=" + transactionType +
                ", amount=" + amount +
                ", date=" + date +
                '}';
    }
}
