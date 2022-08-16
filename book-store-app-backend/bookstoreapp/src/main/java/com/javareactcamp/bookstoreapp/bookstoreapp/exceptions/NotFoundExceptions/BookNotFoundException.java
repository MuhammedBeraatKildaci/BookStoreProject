package com.javareactcamp.bookstoreapp.bookstoreapp.exceptions.NotFoundExceptions;

public class BookNotFoundException extends NotFoundException {

    public BookNotFoundException(int id) {
        super(String.format("Book with %s id could not found", id));
    }
}
