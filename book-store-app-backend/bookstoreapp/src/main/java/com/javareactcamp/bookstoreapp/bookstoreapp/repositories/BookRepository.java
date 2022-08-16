package com.javareactcamp.bookstoreapp.bookstoreapp.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.javareactcamp.bookstoreapp.bookstoreapp.entities.Book;

public interface BookRepository extends JpaRepository<Book, Integer> {

}