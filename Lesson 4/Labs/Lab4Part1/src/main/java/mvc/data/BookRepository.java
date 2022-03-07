package mvc.data;

import mvc.domain.Book;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Repository
public class BookRepository {
    Map<String, Book> books = new HashMap<>();

    public Collection<Book> findAll() {
        return books.values();
    }

    public Book findOne(String isbn) {
        return books.get(isbn);
    }

    public Collection<Book> searchByAuthor(String author) {
        List<Book> booksForReturn = books.values()
                .stream()
                .filter(book -> book.getAuthor().toLowerCase().contains(author.toLowerCase()))
                .collect(Collectors.toList());
        return booksForReturn;
    }

    public void save(Book book) {
        books.put(book.getIsbn(), book);
    }

    public void update(Book book) {
        save(book);
    }

    public void delete(String isbn) {
        books.remove(isbn);
    }


}
