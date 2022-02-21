package mvc.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.web.servlet.support.RequestContextUtils;

import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.Map;

@Controller
@RequestMapping("payment2")
public class Payment2Controller {
    @GetMapping("entercard")
    public ModelAndView enterCard() {
        Map<String, Object> params = new HashMap<>();

        return new ModelAndView("entercard", params);
    }

    @PostMapping("processpayment")
    public ModelAndView processPayment(@RequestParam(name = "name") String name,
                                       @RequestParam(name = "creditcardnumber") String cardnumber,
                                       RedirectAttributes redirectAttributes) {
        Map<String, Object> params = new HashMap<>();
        redirectAttributes.addFlashAttribute("name", name);
        redirectAttributes.addFlashAttribute("creditcardnumber", cardnumber);
        return new ModelAndView("redirect:thankyou", params);
    }

    @GetMapping("thankyou")
    public ModelAndView thankyou(HttpServletRequest request) {
        Map<String, Object> params = new HashMap<>();

        Map<String, ?> inputFlashMap = RequestContextUtils.getInputFlashMap(request);
        if (inputFlashMap != null) {
            params.put("name", inputFlashMap.get("name").toString());
            params.put("creditcardnumber", inputFlashMap.get("creditcardnumber"));
        }
        return new ModelAndView("thankyou", params);
    }
}
