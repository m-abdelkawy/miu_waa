package mvc.web.graphql;

import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import mvc.core.Book;
import mvc.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class BookMutation implements GraphQLMutationResolver {
    @Autowired
    private BookService bookService;

    public Book addBook(String isbn, String author, String title, double price){
        Book book = new Book(isbn, author, title, price);
        return bookService.addBook(book);
    }

    public Book updateBook(String isbn, String author, String title, double price){
        Book book = new Book(isbn, author, title, price);
        return bookService.updateBook(book);
    }

    public void deleteBook(String isbn){
        bookService.deleteBook(isbn);
    }
}
