package com.javareactcamp.bookstoreapp.bookstoreapp.exceptions.NotFoundExceptions;

public class NotFoundException extends RuntimeException {
    public NotFoundException(String message) {
        super(message);
    }
}
