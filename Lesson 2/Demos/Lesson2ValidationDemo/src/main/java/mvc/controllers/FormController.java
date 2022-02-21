package mvc.controllers;

import mvc.commandObjects.Person;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.ModelAndView;

import javax.validation.Valid;

@Controller
public class FormController {
    @GetMapping("/form")
    public ModelAndView form(){
        ModelAndView modelAndView = new ModelAndView();
        Person person = new Person();
        modelAndView.addObject("person", person);
        modelAndView.setViewName("form");
        return modelAndView;
    }

    @PostMapping("/form")
    public ModelAndView formSubmit(@Valid Person person, BindingResult bindingResult){
        ModelAndView mav = new ModelAndView();
        if(bindingResult.hasErrors()){
            mav.setViewName("form");
            return mav;
        }
        mav.setViewName("success");
        mav.addObject("person", person);
        return mav;
    }
}
