package com.javareactcamp.bookstoreapp.bookstoreapp.exceptions.NotFoundExceptions;

public class UserNotFoundException extends NotFoundException {
    public UserNotFoundException(int id) {
        super(String.format("User with %s id could not found", id));
    }
}
