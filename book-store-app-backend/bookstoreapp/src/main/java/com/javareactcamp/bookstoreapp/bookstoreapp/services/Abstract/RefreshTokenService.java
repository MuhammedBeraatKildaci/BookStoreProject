package com.javareactcamp.bookstoreapp.bookstoreapp.services.Abstract;

import com.javareactcamp.bookstoreapp.bookstoreapp.entities.RefreshToken;
import com.javareactcamp.bookstoreapp.bookstoreapp.entities.User;
import com.javareactcamp.bookstoreapp.bookstoreapp.entities.models.ApiResponse;

public interface RefreshTokenService {

    ApiResponse<String> createRefreshToken(User user);

    ApiResponse<Boolean> isRefreshExpired(RefreshToken token);

    ApiResponse<RefreshToken> getByUser(int userId);
}