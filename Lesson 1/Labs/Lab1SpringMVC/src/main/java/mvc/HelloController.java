package mvc;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
import java.util.HashMap;
import java.util.Map;

@Controller
public class HelloController {
    @RequestMapping("/hello")
    public ModelAndView hello( @RequestParam(value="firstname") String firstName,
                        @RequestParam(value="lastname") String lastName) {

        String message=firstName+" "+lastName;

        Map<String, Object> params = new HashMap<>();
        params.put("message", message);

        return new ModelAndView("hello",params);
    }
}

