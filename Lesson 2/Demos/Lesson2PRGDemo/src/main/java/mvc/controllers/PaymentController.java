package mvc.controllers;

import mvc.commandObjects.Payment;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import java.util.HashMap;
import java.util.Map;

@Controller
public class PaymentController {
    @GetMapping("/entercard")
    public ModelAndView enterPayment() {
        ModelAndView mva = new ModelAndView();
        mva.setViewName("entercard");
        return mva;
    }

    @PostMapping("/processpayment")
    public ModelAndView processPayment(@RequestParam("name") String name,
                                       @RequestParam("creditcardnumber") String cardnumber) {
        System.out.println("Process order from: " + name + ", credit card number: " + cardnumber);
        ModelAndView mva = new ModelAndView();
        mva.setViewName("processpayment");
        mva.addObject("name", name);
        mva.addObject("creditcardnumber", cardnumber);

        return mva;
    }

    @GetMapping("/thankyou")
    public ModelAndView thankyou() {
        Map<String, Object> params = new HashMap<>();
        ModelAndView mva = new ModelAndView("thankyou", params);
        return mva;
    }

    @GetMapping("/entercard2")
    public ModelAndView enterpayment2() {
        ModelAndView mva = new ModelAndView();
        mva.addObject("payment", new Payment());
        mva.setViewName("entercard2");
        return mva;
    }

    @PostMapping("/processpayment2")
    public ModelAndView processPayment2(@ModelAttribute Payment payment) {
        System.out.println("Process order from: " + payment.getName() + ", credit card number: " + payment.getCreditcardnumber());
        ModelAndView mva = new ModelAndView();
        mva.addObject("payment", payment);
        mva.setViewName("processpayment2");
        return mva;
    }
}
