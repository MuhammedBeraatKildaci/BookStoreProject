package com.javareactcamp.bookstoreapp.bookstoreapp.entities.dto;

import lombok.Data;

@Data
public class UserRequestForRegisterDto {
    private String firstName;
    private String lastName;
    private String userName;
    private String password;
}
