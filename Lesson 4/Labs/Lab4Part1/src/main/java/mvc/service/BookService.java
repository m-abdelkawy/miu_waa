package mvc.service;

import mvc.data.BookRepository;
import mvc.domain.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class BookService {
    @Autowired
    private BookRepository bookRepository;

    public Collection<Book> getAllBooks(){
        return bookRepository.findAll();
    }

    public Book getBook(String isbn){
        return bookRepository.findOne(isbn);
    }

    public Collection<Book> searchByAuthor(String author){
        return bookRepository.searchByAuthor(author);
    }

    public void addBook(Book book){
        bookRepository.save(book);
    }

    public void updateBook(Book book){
        bookRepository.update(book);
    }

    public void deleteBook(String isbn){
        bookRepository.delete(isbn);
    }
}
