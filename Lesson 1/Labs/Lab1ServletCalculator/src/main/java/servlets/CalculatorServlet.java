package servlets;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@WebServlet("/calc")
public class CalculatorServlet extends HttpServlet {

    //List<List<String>> calcs = new ArrayList<>();

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        //show calculator page
        PrintWriter out = response.getWriter();
        out.println("<html>");
        out.println("<head>SIMPLE CALCULATOR<br><br><br></head>");
        out.println("<body>");
        displayForm(out);

        /*String num1String = request.getParameter("number1");
        String num2String = request.getParameter("number2");


        double num1 = Double.valueOf(num1String);
        double num2 = Double.valueOf(num2String);

        String operation = request.getParameter("op");
        double res = 0;

        switch (operation){
            case "+":
                res = num1+num2;
                break;
            case "-":
                res = num1-num2;
                break;
            case "*":
                res = num1*num2;
                break;
            case "/":
                res = num1/num2;
                break;
        }

        out.println("<br><br><p>The result of " + num1 + " " + operation + " " +num2+" = " + res + "</p>");
        calcs.add(new ArrayList<>(Arrays.asList(num1String, operation, num2String, String.valueOf(res))));

        if(calcs.size() > 1){
            out.println("<br><br><table> <th>first</th> <th>operation</th> <th>second</th> <th>result</th>");

            for (List calcArr: calcs) {
                out.println("<tr><td>" + calcArr.get(0) + "</td> <td>" + calcArr.get(1)
                        + "</td> <td>" + calcArr.get(2) + "</td> <td>" + calcArr.get(3) +"</td></tr>");
            }

            out.println("</table>");
        }*/

        out.println("</body>");
        out.println("</html>");
        out.flush();
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        double result = 0;
        String num1String = request.getParameter("number1");
        String num2String = request.getParameter("number2");
        String operation = request.getParameter("op");
        double num1 = Double.parseDouble(num1String);
        double num2 = Double.parseDouble(num2String);
        result = CalcHelper.calculate(operation, num1, num2);

        //show result page
        PrintWriter out = response.getWriter();
        out.println("<html>");
        out.println("<head>SIMPLE CALCULATOR<br><br><br> <style>table, th, td{border: 1px solid black; width:150px; text-align: center;}</style> </head> ");
        out.println("<body>");
        displayForm(out);

        out.println("<br><br><p>The result of " + num1 + " " + operation + " " +num2+" = " + result + "</p>");

        createCalcSession(request, result, operation, num1, num2);
        displayTable(out, request);


        //out.println("doPost is called");
        //doGet(request, response);
        out.flush();
    }




    private void displayForm(PrintWriter out) {
        StringBuilder sb = new StringBuilder();

        sb.append("<form method = 'post' action = 'calc'>");
        sb.append("enter the first number:<br>");
        sb.append("<input type = 'text' name='number1'><br><br>");
        sb.append("enter the second number:<br>");
        sb.append("<input type = 'text' name='number2'><br><br>");
        sb.append("enter the operation:<br><br>");
        sb.append("<input type ='radio' name = 'op' value = '+'>add<br>");
        sb.append("<input type = 'radio' name = 'op' value = '-'>sub<br>");
        sb.append("<input type = 'radio' name = 'op' value = '*'>mul<br>");
        sb.append("<input type = 'radio' name = 'op' value = '/'>div<br><br>");
        sb.append("<input type = 'submit' name = 'result' value = 'submit'><br>");
        sb.append("</form>");

        out.println(sb.toString());
    }

    private void displayTable(PrintWriter out, HttpServletRequest request) {
        HttpSession session = request.getSession();
        List<List<String>> history = (List<List<String>>) session.getAttribute("history");
        if(history.size() > 1){
            out.println("<br><br><table> <th>first</th> <th>operation</th> <th>second</th> <th>result</th>");

            for (List calcArr: history) {
                out.println("<tr><td>" + calcArr.get(0) + "</td> <td>" + calcArr.get(1)
                        + "</td> <td>" + calcArr.get(2) + "</td> <td>" + calcArr.get(3) +"</td></tr>");
            }

            out.println("</table>");
        }

    }

    private void createCalcSession(HttpServletRequest request, double result, String operation, double num1, double num2) {
        HttpSession session = request.getSession();
        List<List<String>> history = (List<List<String>>) session.getAttribute("history");
        if(history == null){
            history = new ArrayList<>();
        }
        history.add(Arrays.asList(String.valueOf(num1), operation,String.valueOf(num2), String.valueOf(result)));
        session.setAttribute("history", history);
    }

}
