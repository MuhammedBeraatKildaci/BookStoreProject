package com.javareactcamp.bookstoreapp.bookstoreapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.javareactcamp.bookstoreapp.bookstoreapp.entities.RefreshToken;

public interface RefreshTokenRepository extends JpaRepository<RefreshToken, Integer> {
    RefreshToken findByUserId(int userId);
}
