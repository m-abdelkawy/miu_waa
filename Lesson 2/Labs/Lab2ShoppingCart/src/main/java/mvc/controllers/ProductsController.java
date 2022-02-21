package mvc.controllers;

import mvc.models.Product;
import mvc.models.ShoppingCart;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
public class ProductsController {
    @GetMapping("addproductpage")
    public ModelAndView addProduct() {
        ModelAndView mva = new ModelAndView();
        mva.addObject("product", new Product());
        mva.setViewName("addProduct");
        return mva;
    }

    @PostMapping("addproduct")
    public ModelAndView addProduct(@Valid @ModelAttribute() Product product, BindingResult bindingResult, HttpSession session) {
        ModelAndView mav = new ModelAndView();
        if (bindingResult.hasErrors()) {
            mav.setViewName("addProduct");
        } else {
            List<Product> products = (List<Product>) session.getAttribute("products");
            if (products == null) {
                products = new ArrayList<>();
                session.setAttribute("products", products);
            }
            products.add(product);
            mav.setViewName("redirect:products");
        }
        return mav;
    }

    @GetMapping("products")
    public ModelAndView listProducts(HttpSession session) {
        Map<String, List<Product>> params = new HashMap<>();
        List<Product> products = (List<Product>) session.getAttribute("products");
        if (products == null) {
            products = new ArrayList<>();
            session.setAttribute("products", products);
        }
        params.put("productList", products);
        return new ModelAndView("listProducts", params);
    }

    @PostMapping("removeproduct")
    public ModelAndView removeproduct(@RequestParam("productnumber") String productNumber, HttpSession session) {
        List<Product> products = (List<Product>) session.getAttribute("products");
        products.removeIf(p -> p.getProductNumber().equals(productNumber));
        ModelAndView mva = new ModelAndView();
        mva.setViewName("redirect:products");
        return mva;
    }

    @PostMapping("addtocart")
    public ModelAndView addtocart(@RequestParam("productnumber") String productNumber, HttpSession session) {
        ShoppingCart shoppingCart = (ShoppingCart) session.getAttribute("shoppingcart");
        List<Product> products = (List<Product>) session.getAttribute("products");
        if (shoppingCart == null) {
            shoppingCart = new ShoppingCart();
            session.setAttribute("shoppingcart", shoppingCart);
        }

        shoppingCart.addProduct(
                products.stream()
                        .filter(p -> p.getProductNumber().equals(productNumber))
                        .findFirst()
                        .orElse(null)
        );

        ModelAndView mav = new ModelAndView();
        mav.setViewName("redirect:showcart");
        return mav;
    }

    @PostMapping("removefromcart")
    public ModelAndView removeFromCart(@RequestParam("productnumber") String productNumber, HttpSession session) {
        ShoppingCart shoppingCart = (ShoppingCart) session.getAttribute("shoppingcart");
        List<Product> products = (List<Product>) session.getAttribute("products");

        shoppingCart.removeProduct(
                products.stream()
                        .filter(p -> p.getProductNumber().equals(productNumber))
                        .findFirst()
                        .orElse(null)
        );

        ModelAndView mav = new ModelAndView();
        mav.setViewName("redirect:showcart");
        return mav;
    }

    @GetMapping("showcart")
    public ModelAndView showCart(HttpSession session){
        ShoppingCart shoppingcart = (ShoppingCart) session.getAttribute("shoppingcart");
        Map<String, Object> params = new HashMap<>();
        params.put("productListInCart", shoppingcart.getProducts().values());
        params.put("total", shoppingcart.getTotal());
        return new ModelAndView("shoppingcart", params);
    }
}
