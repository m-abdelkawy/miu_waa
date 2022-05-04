package calc.controllers;

import calc.domain.Result;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CalculatorController {
    @CrossOrigin
    @GetMapping("/calc/{first}/{second}/{operator}")
    public ResponseEntity<?> calculate(@PathVariable("first")int first,
                                       @PathVariable("second")int second,
                                       @PathVariable("operator") String operator){
        double result;
        switch (operator){
            case "add":
                result=first+second;
                break;
            case "subtract":
                result=first-second;
                break;
            case "multiply":
                result=first*second;
                break;
            case "divide":
                result=(double)first/second;
                break;

            case "clear":
            default:
                result=0;
                break;
        }

        return new ResponseEntity<Result>(new Result(result), HttpStatus.OK);
    }
}
