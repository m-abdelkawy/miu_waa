package mvc.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import java.util.HashMap;
import java.util.Map;

@Controller
@RequestMapping(value = "nav")
public class NavigationController {
    @GetMapping
    public ModelAndView init(){
        Map<String, Object> params = new HashMap<>();
        return new ModelAndView("page1", params);
    }

    @RequestMapping(value = "/page2", method = RequestMethod.GET)
    public ModelAndView page2(){
        Map<String, Object> params = new HashMap<>();
        return new ModelAndView("page2", params);
    }

    @RequestMapping(value = "/page3", method = RequestMethod.GET)
    public ModelAndView page3(){
        Map<String, Object> params = new HashMap<>();
        return new ModelAndView("page3", params);
    }
}
