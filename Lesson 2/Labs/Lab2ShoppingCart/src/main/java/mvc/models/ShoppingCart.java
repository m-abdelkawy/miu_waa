package mvc.models;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ShoppingCart {
    private Map<String, ProductForCart> products;
    private double total;

    public ShoppingCart() {
        this.products = new HashMap<>();
    }

    public double getTotal() {
        return total;
    }

    public void setTotal(double total) {
        this.total = total;
    }

    public Map<String, ProductForCart> getProducts() {
        return products;
    }

    public void addProduct(Product product) {
        if (product == null) return;
        String prodNumber = product.getProductNumber();

        if (!products.containsKey(prodNumber)) {
            products.put(prodNumber, new ProductForCart());
        }

        ProductForCart productForCart = products.get(prodNumber);
        productForCart.setProduct(product);
        productForCart.setQty(productForCart.getQty() + 1);
        productForCart.setTotal(productForCart.getTotal() + product.getPrice());

        //update total
        this.total += product.getPrice();
    }

    public void removeProduct(Product product) {
        if (product == null) return;

        String prodNumber = product.getProductNumber();

        ProductForCart productForCart = products.get(prodNumber);

        if (productForCart.getQty() - 1 == 0) {
            products.remove(prodNumber);
        } else {
            productForCart.setQty(productForCart.getQty() - 1);
            productForCart.setTotal(productForCart.getTotal() - product.getPrice());
        }

        //update price
        this.total -= product.getPrice();
    }
}
