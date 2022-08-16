package com.javareactcamp.bookstoreapp.bookstoreapp.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.javareactcamp.bookstoreapp.bookstoreapp.entities.User;
import com.javareactcamp.bookstoreapp.bookstoreapp.services.Abstract.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/users")
public class UserController {

    private final UserService userService;

    @GetMapping
    public ResponseEntity<?> getAllUsers() {
        var response = userService.getAllUsers();
        return ResponseEntity
                .status(response.getHttpStatus())
                .body(response);
    }

    @PostMapping
    public ResponseEntity<?> postOneUser(@RequestBody User user) {
        var response = userService.postOneUser(user);
        return ResponseEntity
                .status(response.getHttpStatus())
                .body(response);
    }
}
