package mvc;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import mvc.domain.Book;
import org.junit.BeforeClass;
import org.junit.Test;
import org.springframework.http.HttpStatus;

import static org.hamcrest.Matchers.*;

public class BooksRestTest {
    @BeforeClass
    public static void setup() {
        RestAssured.port = 8090;
        RestAssured.baseURI = "http://localhost";
        RestAssured.basePath = "api";
    }

    @Test
    public void testGetAllBooks() {
        // 01. add books
        Book book1 = new Book("1111", "Ahmed Ali", "Structural Design", 37);
        Book book2 = new Book("2222", "John Doe", "JavaScript", 40);

        RestAssured.given()
                .contentType(ContentType.JSON)
                .body(book1)
                .when().post("books")
                .then()
                .statusCode(201);
        RestAssured.given()
                .contentType("application/json")
                .body(book2)
                .when().post("books")
                .then()
                .statusCode(201);

        // 02. get all books
        RestAssured.given()
                .when().get("books")
                .then()
                .statusCode(200)
                .and()
                .body("isbn", hasItems("1111", "2222"))
                .body("author", hasItems("Ahmed Ali", "John Doe"))
                .body("title", hasItems("Structural Design", "JavaScript"))
                .body("price", hasItems(Float.valueOf(37), Float.valueOf(40)));

        // 03. cleanup
        RestAssured.given()
                .when()
                .delete("/books/1111")
                .then()
                .statusCode(204);
        RestAssured.given()
                .when()
                .delete("/books/2222")
                .then()
                .statusCode(204);
    }

    @Test
    public void testGetOneBook() {
        // 01. add book
        Book book = new Book("1111", "Ahmed Ali", "Structural Design", 37);

        RestAssured.given()
                .contentType(ContentType.JSON)
                .body(book)
                .when().post("books")
                .then()
                .statusCode(201);

        // 02. get book
        RestAssured.given()
                .when().get("books/1111")
                .then()
                .statusCode(200)
                .and()
                .body("isbn", equalTo("1111"))
                .body("author", equalTo("Ahmed Ali"))
                .body("title", equalTo("Structural Design"))
                .body("price", equalTo(Float.valueOf(37)));

        // 03. cleanup
        RestAssured.given()
                .when()
                .delete("books/1111")
                .then()
                .statusCode(204);
    }

    @Test
    public void testSearchBooks() {
        // 01. add books
        Book book1 = new Book("1111", "Ahmed Ali", "Structural Design", 37);
        Book book2 = new Book("2222", "John Doe", "JavaScript", 40);

        RestAssured.given()
                .contentType(ContentType.JSON)
                .body(book1)
                .when().post("books")
                .then()
                .statusCode(201);
        RestAssured.given()
                .contentType(ContentType.JSON)
                .body(book2)
                .when().post("books")
                .then()
                .statusCode(201);

        // 02. search books
        RestAssured.given()
                .when().get("books/search/Ahmed")
                .then()
                .statusCode(200)
                .and()
                .body("isbn", hasItems("1111"))
                .body("author", hasItems("Ahmed Ali"))
                .body("title", hasItems("Structural Design"))
                .body("price", hasItems(Float.valueOf(37)));

        // 03. cleanup
        RestAssured.given()
                .when().delete("books/1111")
                .then()
                .statusCode(204);
        RestAssured.given()
                .when().delete("books/2222")
                .then()
                .statusCode(204);
    }

    @Test
    public void testAddBook(){
        // 01. add book
        Book book = new Book("1111", "Ahmed Ali", "Structural Design", 37);
        RestAssured.given()
                .contentType(ContentType.JSON)
                .body(book)
                .when().post("books")
                .then()
                .statusCode(201);

        // 02. Get and verify
        RestAssured.given()
                .when().get("books/1111")
                .then()
                .statusCode(200)
                .and()
                .body("isbn", equalTo("1111"))
                .body("author", equalTo("Ahmed Ali"))
                .body("title", equalTo("Structural Design"))
                .body("price", equalTo(Float.valueOf(37)));

        // 03. cleanup
        RestAssured.given()
                .when().delete("books/1111")
                .then().statusCode(204);
    }

    @Test
    public void testAddBookInvalidFields(){
        // 01. add book and verify bad request
        Book book = new Book("111111", "Ahmed Ali", "Structural Design", 150);

        RestAssured.given()
                .contentType(ContentType.JSON)
                .body(book)
                .when().post("books")
                .then()
                .statusCode(400)
                .and()
                .body("fieldError.price", equalTo("must be between 10 and 100"))
                .body("fieldError.isbn", equalTo("size must be between 4 and 4"));

        // 02. verify 404 not found, the book does not exist
        RestAssured.given()
                .when().get("books/" + book.getIsbn())
                .then()
                .statusCode(404)
                .and()
                .body("errorMessage", equalTo("book with isbn: " + book.getIsbn() + " does not exist!"));

    }

    @Test
    public void testUpdateBook(){
        // 01. add book
        Book book = new Book("1111", "Ahmed Ali", "Structural Design", 37);
        Book updatedBook = new Book("1111", "Ahmed Ali 2", "Structural Design 2", 39);

        RestAssured.given()
                .contentType(ContentType.JSON)
                .body(book)
                .when().post("books")
                .then()
                .statusCode(201);

        // 02. update book
        RestAssured.given()
                .contentType(ContentType.JSON)
                .body(updatedBook)
                .when().put("books/" + book.getIsbn())
                .then()
                .statusCode(200);

        // 03. get the added book and verify
        RestAssured.given()
                .when().get("books/" + book.getIsbn())
                .then()
                .statusCode(200)
                .and()
                .body("isbn", equalTo("1111"))
                .body("author", equalTo("Ahmed Ali 2"))
                .body("title", equalTo("Structural Design 2"))
                .body("price", equalTo(Float.valueOf(39)));

        // 04. cleanup
        RestAssured.given()
                .when().delete("books/" + book.getIsbn())
                .then().statusCode(204);
    }

    @Test
    public void testDeleteBook(){
        // 01. add book
        Book book = new Book("1111", "Ahmed Ali", "Structural Design", 37);

        RestAssured.given()
                .contentType(ContentType.JSON)
                .body(book)
                .when().post("books")
                .then().statusCode(201);

        // 02. delete book
        RestAssured.given()
                .when().delete("books/" + book.getIsbn())
                .then().statusCode(204);

        // 03. verify the book deleted no longer exists
        RestAssured.given()
                .when().get("books/" + book.getIsbn())
                .then().statusCode(404)
                .and()
                .body("errorMessage", equalTo("book with isbn: " + book.getIsbn() + " does not exist!"));
    }



}
