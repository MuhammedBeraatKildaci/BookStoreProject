package com.javareactcamp.bookstoreapp.bookstoreapp.services.Abstract;

import java.util.List;

import com.javareactcamp.bookstoreapp.bookstoreapp.entities.Role;
import com.javareactcamp.bookstoreapp.bookstoreapp.entities.models.ApiResponse;

public interface RoleService {
    ApiResponse<List<Role>> getAllRoles();

    ApiResponse<Role> postOneRole(Role role);
}