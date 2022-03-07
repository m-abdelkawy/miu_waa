package mvc.utils;

import mvc.models.CalculationResult;

public class CalcHelper {
    private static double calcResult(int num1, int num2, String operation) {
        double res = 0;
        switch (operation) {
            case "*":
                res = num1 * num2;
                break;
            case "-":
                res = num1 - num2;
                break;
            case "+":
                res = num1 + num2;
                break;
            case "/":
                res = num1 / num2;
                break;
        }
        return res;
    }

    public static CalculationResult calculate(int num1, int num2, String operation){
        double result = calcResult(num1, num2, operation);
        return new CalculationResult(num1, num2, operation, result);
    }
}
