package mvc;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import mvc.models.Book;
import org.junit.BeforeClass;
import org.junit.Test;

import static org.hamcrest.Matchers.*;


public class BooksRestTest {
    @BeforeClass
    public static void setup() {
        RestAssured.port = Integer.valueOf(8090);
        RestAssured.baseURI = "http://localhost";
        RestAssured.basePath = "api";
    }


    @Test
    public void testGetOneBook() {
        // 01. add new book
        Book book = new Book("1111", "Ahmed Ali", "Structural Design", 37);

        RestAssured.given()
                .contentType(ContentType.JSON)
                .body(book)
                .when()
                .post("books")
                .then()
                .statusCode(201);

        // 02. fetch book added
        RestAssured.given()
                .when()
                .get("books/1111")
                .then()
                .contentType(ContentType.JSON)
                .and()
                .body("isbn", equalTo("1111"))
                .body("author", equalTo("Ahmed Ali"))
                .body("title", equalTo("Structural Design"))
                .body("price", equalTo(Float.valueOf(37)))
                .and()
                .statusCode(200);

        // 03. cleanup
        RestAssured.given()
                .when()
                .delete("books/1111");
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
                .contentType(ContentType.JSON)
                .body(book2)
                .when().post("books")
                .then()
                .statusCode(201);

        // 02. get all books
        RestAssured.given()
                .when()
                .get("books")
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
                .delete("books/1111");
        RestAssured.given()
                .when()
                .delete("books/2222");
    }

    @Test
    public void testSearchBooks() {
        // 01. add book
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
                .when()
                .get("books/search/Ahmed")
                .then()
                .body("isbn", hasItems("1111"))
                .body("author", hasItems("Ahmed Ali"))
                .body("title", hasItems("Structural Design"))
                .body("price", hasItems(Float.valueOf(37)));

        // 03. cleanup
        RestAssured.given()
                .when()
                .delete("books/1111");
        RestAssured.given()
                .when()
                .delete("books/2222");
    }

    @Test
    public void testAddBook() {
        // 01. add book
        Book book = new Book("1111", "Ahmed Ali", "Structural Design", 37);
        RestAssured.given()
                .contentType(ContentType.JSON)
                .body(book)
                .when().post("books")
                .then()
                .statusCode(201);

        // 02. Get the book and verify
        RestAssured.given()
                .when()
                .get("books/1111")
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
                .delete("books/1111");
    }

    @Test
    public void testUpdateBook() {
        // 01. add book
        Book book = new Book("1111", "Ahmed Ali", "Structural Design", 37);
        Book updatedBook = new Book("1111", "Ahmed Ali 2", "Structural Design 2", 39);
        RestAssured.given()
                .contentType(ContentType.JSON)
                .body(book)
                .when().post("books")
                .then().statusCode(201);

        // 02. update book
        RestAssured.given()
                .contentType("application/json")
                .body(updatedBook)
                .put("books/" + book.getIsbn())
                .then()
                .statusCode(200);

        // 03. get the book and verify
        RestAssured.given()
                .when()
                .get("books/" + book.getIsbn())
                .then()
                .statusCode(200)
                .and()
                .body("isbn", equalTo("1111"))
                .body("author", equalTo("Ahmed Ali 2"))
                .body("title", equalTo("Structural Design 2"))
                .body("price", equalTo(Float.valueOf(39)));

        // 04. cleanup
        RestAssured.given()
                .when()
                .delete("books/" + book.getIsbn());
    }

    @Test
    public void testDeleteBook() {
        // 01. add book
        Book book = new Book("1111", "Ahmed Ali", "Structural Design", 37);
        RestAssured.given()
                .contentType("application/json")
                .body(book)
                .when().post("books")
                .then()
                .statusCode(201);

        // 02. Delete book
        RestAssured.given()
                .when()
                .delete("books/" + book.getIsbn());

        // 03. verify that book deleted does not exist
        RestAssured.given()
                .when()
                .get("books/" + book.getIsbn())
                .then()
                .statusCode(404)
                .and()
                .body("errorMessage", equalTo("Book with ISBN: " +
                        book.getIsbn() + " , does not exist!"));
    }
}
