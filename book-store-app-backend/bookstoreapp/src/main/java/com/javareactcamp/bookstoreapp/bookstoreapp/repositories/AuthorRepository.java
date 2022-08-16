package com.javareactcamp.bookstoreapp.bookstoreapp.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.javareactcamp.bookstoreapp.bookstoreapp.entities.Author;

public interface AuthorRepository extends JpaRepository<Author, Integer> {
    Iterable<Author> findByIdIn(List<Integer> authorIds);
}