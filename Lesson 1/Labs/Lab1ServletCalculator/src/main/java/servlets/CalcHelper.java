package servlets;

public class CalcHelper {
    public static double calculate(String operation, double num1, double num2){
        double result = 0;
        switch (operation){
            case "+":
                result = num1+num2;
                break;
            case "-":
                result = num1-num2;
                break;
            case "*":
                result = num1*num2;
                break;
            case "/":
                result = num1/num2;
                break;
        }
        return result;
    }
}
