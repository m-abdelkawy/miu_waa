package mvc.controllers;

import mvc.models.Book;
import mvc.utils.CustomErrorType;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.stream.Collectors;

@CrossOrigin
@RestController
public class BookController {
    Map<String, Book> books = new HashMap<>();

    public BookController() {
        List<Book> lstBook = new ArrayList<>() {{
            add(new Book("1111", "Ahmed Ali", "Structural Design", 37));
            add(new Book("2222", "John Doe", "JavaScript", 40));
            add(new Book("3333", "Mohammed Abdelkawy", "Object Oriented Programming", 25));
            add(new Book("4444", "Sarah Michaels", "Spring 2.0", 50));
        }};

        for (Book book : lstBook) {
            books.put(book.getIsbn(), book);
        }
    }

    @GetMapping("/books")
    public ResponseEntity<?> getAll() {
        Collection<Book> booksForReturn = books.values();
        return new ResponseEntity<Collection<Book>>(booksForReturn, HttpStatus.OK);
    }

    @GetMapping("/books/{isbn}")
    public ResponseEntity<?> getBook(@PathVariable String isbn) {
        Book bookForReturn = books.get(isbn);
        if (bookForReturn == null) {
            return new ResponseEntity<CustomErrorType>(new CustomErrorType("Book with ISBN: " +
                    isbn + " , does not exist!"), HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<Book>(bookForReturn, HttpStatus.OK);
    }

    @GetMapping("/books/search/{author}")
    public ResponseEntity<?> searchBooks(@PathVariable String author) {
        List<Book> booksForReturn = books.values().stream()
                .filter(book -> book.getAuthor().toLowerCase().contains(author.toLowerCase()))
                .collect(Collectors.toList());

        return new ResponseEntity<Collection<Book>>(booksForReturn, HttpStatus.OK);
    }

    @PostMapping("/books")
    public ResponseEntity<?> addBook(@RequestBody Book book) {
        books.put(book.getIsbn(), book);
        return new ResponseEntity<Book>(book, HttpStatus.CREATED);
    }

    @PutMapping("/books/{isbn}")
    public ResponseEntity<?> updateBook(@PathVariable String isbn, @RequestBody Book book) {
        books.put(isbn, book);
        return new ResponseEntity<Book>(book, HttpStatus.OK);
    }

    @DeleteMapping("/books/{isbn}")
    public ResponseEntity<?> deleteBook(@PathVariable String isbn) {
        Book bookFromStorage = books.get(isbn);
        if (bookFromStorage == null) {
            return new ResponseEntity<CustomErrorType>(new CustomErrorType(
                    "Book with isbn: " + isbn + " is not available"
            ), HttpStatus.NOT_FOUND);
        }
        books.remove(isbn);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
