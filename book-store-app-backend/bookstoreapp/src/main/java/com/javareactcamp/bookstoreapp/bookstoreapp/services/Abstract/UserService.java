package com.javareactcamp.bookstoreapp.bookstoreapp.services.Abstract;

import java.util.List;

import com.javareactcamp.bookstoreapp.bookstoreapp.entities.User;
import com.javareactcamp.bookstoreapp.bookstoreapp.entities.dto.UserDto;
import com.javareactcamp.bookstoreapp.bookstoreapp.entities.models.ApiResponse;

public interface UserService extends ApplicationUserDao {

    ApiResponse<List<UserDto>> getAllUsers();

    ApiResponse<UserDto> getOneUser(int id);

    ApiResponse<UserDto> postOneUser(User user);

    ApiResponse<UserDto> putOneUser(int id, User user);

    User getOneUserByUserName(String username);

    void deleteOneUser(int id);

    User saveOneUser(User user);
}