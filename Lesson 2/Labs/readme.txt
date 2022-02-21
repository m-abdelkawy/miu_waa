2.a

01. All parts are finished

Part 01
I followed the PRG in terms that the "save" button posts the form to the api "addproduct"
then the "addproduct" api redirects to the "products" api where you get the list of products

addproduct and removeproduct are implemented as requested in the lab pdf file

part 02
I did validation using the @Null and @size annotations like the cars demo in the lectures through the hibernate-validator
dependency and customized the "addProduct.html" view to show errors accordingly

part 3
I created a "ShoppingCart.java" model class to represent the data transfer object and added fields that appear in the "shoppingcart.html" view
like quantity, price, total
and the removefromcart method
I followed the PRG in terms that when you add to cart, it directs you to the shoppingcart view

internally, I have used the session to save both "products" as List<Product> and "shoppingcart" as an instance of the ShoppingCart model class


---------------------------------------------------------------------------------------------------
2.b

I hereby declare that this submission is my own original work and to the best of my
knowledge it contains no materials previously published or written by another person.
I am aware that submitting solutions that are not my own work will result in an NC of
the course.
I am aware that I am not allowed to share solutions with other students.
I am aware that if I submit only parts of this lab that points will be subtracted.
I am aware that if my lab submission does not contain this readme.txt file that I do not
get points for this lab.

Mohammed Abdelkawy