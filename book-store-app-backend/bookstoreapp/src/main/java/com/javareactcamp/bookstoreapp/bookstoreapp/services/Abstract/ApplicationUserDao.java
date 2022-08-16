package com.javareactcamp.bookstoreapp.bookstoreapp.services.Abstract;

import java.util.Optional;

import com.javareactcamp.bookstoreapp.bookstoreapp.security.ApplicationUser;

public interface ApplicationUserDao {
    Optional<ApplicationUser> selectApplicationUserByUsername(String username);
}