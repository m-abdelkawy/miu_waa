package mvc.controllers;

import mvc.models.commandObjects.Student;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import java.util.HashMap;
import java.util.Map;

@Controller
public class StudentController {
    @GetMapping
    public String entry() {
        return "entry";
    }

    @PostMapping("/process")
    public ModelAndView process(@RequestParam(name = "firstName") String firstName,
                                @RequestParam(name = "receiveNewsLetter", required = false) boolean receiveNewsLetter,
                                @RequestParam(name = "sex") String sex,
                                @RequestParam(name = "house") String house) {
        Map<String, Object> params = new HashMap<>();
        params.put("firstName", firstName);
        params.put("receiveNewsLetter", receiveNewsLetter);
        params.put("sex", sex);
        params.put("house", house);

        return new ModelAndView("process", params);
    }

    @GetMapping("/entry2")
    public ModelAndView entry2(){
        Student student = new Student();
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.addObject("student", student);
        modelAndView.setViewName("entry2");
        return modelAndView;
    }
    @PostMapping("/process2")
    public ModelAndView process2(@ModelAttribute(name = "student") Student student){
        ModelAndView modelAndView = new ModelAndView();

        modelAndView.addObject("firstName", student.getFirstName());
        modelAndView.addObject("receiveNewsletter", student.isReceiveNewsletter());
        modelAndView.addObject("sex", student.getSex());
        modelAndView.addObject("house", student.getHouse());
        modelAndView.setViewName("process2");

        return modelAndView;
    }

}
