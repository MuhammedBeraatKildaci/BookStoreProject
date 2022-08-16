package com.javareactcamp.bookstoreapp.bookstoreapp.entities.dto;

import java.util.Set;

import com.javareactcamp.bookstoreapp.bookstoreapp.entities.Role;

import lombok.Data;

@Data
public class AuthDto {

    private String message;
    private int userId;
    private String userName;

    private String firstName;
    private String lastName;

    private String accessToken;
    private String refreshToken;

    private Set<Role> roles;
}
