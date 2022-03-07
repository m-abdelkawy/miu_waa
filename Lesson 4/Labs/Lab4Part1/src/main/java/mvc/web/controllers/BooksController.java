package mvc.web.controllers;

import mvc.domain.Book;
import mvc.service.BookService;
import mvc.utils.CustomErrorType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Collection;

@RestController
public class BooksController {
    @Autowired
    private BookService bookService;

    @GetMapping("/books")
    public ResponseEntity<?> getAll() {
        Collection<Book> books = bookService.getAllBooks();
        return new ResponseEntity<Collection<Book>>(books, HttpStatus.OK);
    }

    @GetMapping("/books/{isbn}")
    public ResponseEntity<?> getBook(@PathVariable String isbn) {
        Book book = bookService.getBook(isbn);
        if (book == null) {
            String errMsg = "book with isbn: " + isbn + " does not exist!";
            return new ResponseEntity<CustomErrorType>(new CustomErrorType(errMsg), HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Book>(book, HttpStatus.OK);
    }

    @GetMapping("/books/search/{author}")
    public ResponseEntity<?> searchBooks(@PathVariable String author){
        Collection<Book> books = bookService.searchByAuthor(author);
        return new ResponseEntity<Collection<Book>>(books, HttpStatus.OK);
    }

    @PostMapping("/books")
    public ResponseEntity<?> addBook(@RequestBody @Valid Book book){
        System.out.println(book);
        bookService.addBook(book);
        return new ResponseEntity<Book>(book, HttpStatus.CREATED);
    }

    @PutMapping("/books/{isbn}")
    public ResponseEntity<?> updateBook(@PathVariable String isbn, @RequestBody @Valid Book book){
        Book bookFromRepo = bookService.getBook(isbn);
        if(bookFromRepo == null){
            String errMsg = "book with isbn: " + isbn + " does not exist!";
            return new ResponseEntity<CustomErrorType>(new CustomErrorType(errMsg), HttpStatus.NOT_FOUND);
        }
        bookService.updateBook(book);
        return new ResponseEntity<Book>(book, HttpStatus.OK);
    }

    @DeleteMapping("/books/{isbn}")
    public ResponseEntity<?> deleteBook(@PathVariable String isbn){
        Book bookFromRepo = bookService.getBook(isbn);
        if(bookFromRepo == null){
            String errMsg = "book with isbn: " + isbn + " does not exist!";
            return new ResponseEntity<CustomErrorType>(new CustomErrorType(errMsg), HttpStatus.NOT_FOUND);
        }
        bookService.deleteBook(isbn);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
