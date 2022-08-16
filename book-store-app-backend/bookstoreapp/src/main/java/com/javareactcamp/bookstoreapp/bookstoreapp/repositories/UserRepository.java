package com.javareactcamp.bookstoreapp.bookstoreapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.javareactcamp.bookstoreapp.bookstoreapp.entities.User;

public interface UserRepository extends JpaRepository<User, Integer> {

    User findByUserName(String username);

}
