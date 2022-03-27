package mvc.service;

import mvc.core.Book;
import mvc.data.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class BookService {
    @Autowired
    private BookRepository bookRepository;

    public List<Book> getAllBooks(){
        return bookRepository.findAll()
                .stream()
                .collect(Collectors.toList());
    }

    public Book getBook(String isbn){
        return bookRepository.findOne(isbn);
    }

    public Collection<Book> searchByAuthor(String author){
        return bookRepository.searchByAuthor(author);
    }

    public Book addBook(Book book){
        return bookRepository.save(book);
    }

    public Book updateBook(Book book){
        return bookRepository.update(book);
    }

    public void deleteBook(String isbn){
        bookRepository.delete(isbn);
    }
}
