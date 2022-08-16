package com.javareactcamp.bookstoreapp.bookstoreapp.entities.dto;

import lombok.Data;

@Data
public class RefreshTokenDto {
    private int userId;
    private String refreshToken;
}
