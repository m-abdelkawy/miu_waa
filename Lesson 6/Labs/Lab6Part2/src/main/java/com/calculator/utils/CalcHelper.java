package com.calculator.utils;

import java.util.Arrays;

public class CalcHelper {
    public static double calculate(String calcString) {
        double res = 0;

        String[] arr = calcString.split("");

        System.out.println(Arrays.toString(arr));

        double left = Double.parseDouble(arr[0]);
        String operator = arr[1];
        double right = Double.parseDouble(arr[2]);

        switch (operator){
            case "+":
                res = left + right;
                break;
            case "-":
                res = left - right;
                break;
            case "/":
                res = left / right;
                break;
            case "*":
                res = left * right;
                break;
            default:
                break;
        }
        return res;
    }
}
