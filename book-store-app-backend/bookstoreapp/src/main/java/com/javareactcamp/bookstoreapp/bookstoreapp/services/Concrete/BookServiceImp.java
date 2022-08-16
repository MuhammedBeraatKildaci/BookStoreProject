package com.javareactcamp.bookstoreapp.bookstoreapp.services.Concrete;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.javareactcamp.bookstoreapp.bookstoreapp.entities.Author;
import com.javareactcamp.bookstoreapp.bookstoreapp.entities.Book;
import com.javareactcamp.bookstoreapp.bookstoreapp.entities.Category;
import com.javareactcamp.bookstoreapp.bookstoreapp.entities.dto.BookDtoForPost;
import com.javareactcamp.bookstoreapp.bookstoreapp.entities.dto.BookDtoForPut;
import com.javareactcamp.bookstoreapp.bookstoreapp.entities.models.ApiResponse;
import com.javareactcamp.bookstoreapp.bookstoreapp.exceptions.NotFoundExceptions.BookNotFoundException;
import com.javareactcamp.bookstoreapp.bookstoreapp.repositories.BookRepository;
import com.javareactcamp.bookstoreapp.bookstoreapp.services.Abstract.AuthorService;
import com.javareactcamp.bookstoreapp.bookstoreapp.services.Abstract.BookService;
import com.javareactcamp.bookstoreapp.bookstoreapp.services.Abstract.CategoryService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BookServiceImp implements BookService {

    private final BookRepository bookRepository;
    private final CategoryService categoryService;
    private final AuthorService authorService;
    private final ModelMapper mapper;

    @Override
    public ApiResponse<List<Book>> getAllBook() {
        List<Book> list = bookRepository.findAll();
        return ApiResponse.default_OK(list);
    }

    @Override
    public ApiResponse<Book> getOneBook(int id) {
        Book book = bookRepository
                .findById(id)
                .orElseThrow(() -> new BookNotFoundException(id));

        return ApiResponse.default_OK(book);
    }

    @Override
    public ApiResponse<Book> postOneBook(BookDtoForPost request) {
        Category category = categoryService
                .getOneCategory(request.getCategoryId()).getData();

        Set<Author> authors = authorService.getAuthorsByIds(request.getAuthorIds());

        Book book = mapper.map(request, Book.class);

        book.setCategory(category);
        book.setBookAuthors(authors);

        bookRepository.save(book);
        return ApiResponse.default_CREATED(book);
    }

    @Override
    public ApiResponse<Book> putOneBook(int id, BookDtoForPut request) {
        Category category = categoryService
                .getOneCategory(request.getCategoryId())
                .getData();

        Set<Author> authors = authorService
                .getAuthorsByIds(request.getAuthorIds());

        Book book = getOneBook(id).getData();
        book.setTitle(request.getTitle());
        book.setPrice(request.getPrice());
        book.setDiscountPrice(request.getDiscountPrice());
        book.setIsbn(request.getIsbn());
        book.setCategory(category);
        book.setBookAuthors(authors);
        book.setDescription(request.getDescription());
        return ApiResponse.default_ACCEPTED(bookRepository.save(book));
    }

    @Override
    public void deleteOneBook(int id) {
        bookRepository.delete(getOneBook(id).getData());
    }

}