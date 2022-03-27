package mvc.web.graphql;

import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import mvc.core.Book;
import mvc.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class BookQuery implements GraphQLQueryResolver {
    @Autowired
    private BookService bookService;

    public List<Book> getBooks(){
        return bookService.getAllBooks();
    }

    public Book getBook(String isbn){
        return bookService.getBook(isbn);
    }

    public List<Book> getBooksByAuthor(String author){
        return bookService.searchByAuthor(author)
                .stream()
                .collect(Collectors.toList());
    }
}
