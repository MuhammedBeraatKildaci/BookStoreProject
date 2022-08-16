package com.javareactcamp.bookstoreapp.bookstoreapp.services.Abstract;

import java.util.List;

import com.javareactcamp.bookstoreapp.bookstoreapp.entities.Book;
import com.javareactcamp.bookstoreapp.bookstoreapp.entities.dto.BookDtoForPost;
import com.javareactcamp.bookstoreapp.bookstoreapp.entities.dto.BookDtoForPut;
import com.javareactcamp.bookstoreapp.bookstoreapp.entities.models.ApiResponse;

public interface BookService {
    ApiResponse<List<Book>> getAllBook();

    ApiResponse<Book> getOneBook(int id);

    ApiResponse<Book> postOneBook(BookDtoForPost bookForPost);

    ApiResponse<Book> putOneBook(int id, BookDtoForPut book);

    void deleteOneBook(int id);
}