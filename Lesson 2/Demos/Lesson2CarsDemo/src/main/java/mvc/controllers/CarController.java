package mvc.controllers;

import mvc.commandObjects.Car;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.Map;

@Controller
public class CarController {
    @GetMapping("addcar")
    public ModelAndView addcar() {
        Car theCar = new Car();
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.addObject("car", theCar);
        modelAndView.setViewName("addcar");
        return modelAndView;
    }

    @PostMapping("add")
    public ModelAndView add(@ModelAttribute("car") Car car, HttpSession session) {
        Map<String, Object> params = new HashMap<>();

        if (car != null) {
            Map<String, Car> carList = (Map<String, Car>) session.getAttribute("carList");
            if (carList == null) {
                carList = new HashMap<>();
                session.setAttribute("carList", carList);
            }

            carList.put(car.getLicense(), car);
            params.put("carList", carList.values());
        }
        return new ModelAndView("list", params);
    }

    @GetMapping("list")
    public ModelAndView list(HttpSession session) {
        Map<String, Car> carList = (Map<String, Car>) session.getAttribute("carList");
        if (carList == null) {
            carList = new HashMap<>();
            session.setAttribute("carList", carList);
        }
        Map<String, Object> params = new HashMap<>();
        params.put("carList", carList.values());
        return new ModelAndView("list", params);
    }

    @PostMapping("removecar")
    public ModelAndView removeCar(@RequestParam(name = "license")String license, HttpSession session) {
        Map<String, Object> params = new HashMap<>();
        Map<String, Car> carList = (Map<String, Car>)session.getAttribute("carList");
        carList.remove(license);
        params.put("carList", carList.values());
        return new ModelAndView("list", params);
    }
}
