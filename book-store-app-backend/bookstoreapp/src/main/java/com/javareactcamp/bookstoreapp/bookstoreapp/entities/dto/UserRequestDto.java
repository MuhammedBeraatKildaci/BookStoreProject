package com.javareactcamp.bookstoreapp.bookstoreapp.entities.dto;

import lombok.Data;

@Data
public class UserRequestDto {
    private String firstName;
    private String lastName;
    private String userName;
    private String password;
}
