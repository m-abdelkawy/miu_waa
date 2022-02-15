package mvc;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import java.util.HashMap;
import java.util.Map;

@Controller
public class CalcController {
    @RequestMapping("/calc")
    public ModelAndView calc(@RequestParam(name = "num1") double num1, @RequestParam(name = "num2") double num2
            , @RequestParam(name = "op")String op){
        double result = CalcHelper.calculate(op, num1, num2);

        Map<String, Object> params = new HashMap<>();
        params.put("num1", num1);
        params.put("num2", num2);
        params.put("operator", op);
        params.put("result", result);

        return new ModelAndView("calc", params);
    }
}
