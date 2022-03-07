package mvc.controllers;

import mvc.models.Calculation;
import mvc.models.CalculationResult;
import mvc.utils.CalcHelper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
public class CalcController {
    @PostMapping("/calc")
    public ResponseEntity<?> calculate(@RequestBody Calculation calculation){
        CalculationResult calculationResult = CalcHelper
                .calculate(calculation.getNumber1(), calculation.getNumber2(), calculation.getOperation());
        return new ResponseEntity<CalculationResult>(calculationResult, HttpStatus.OK);
    }
}
