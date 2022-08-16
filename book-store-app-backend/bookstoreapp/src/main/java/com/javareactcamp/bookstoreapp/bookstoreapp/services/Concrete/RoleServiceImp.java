package com.javareactcamp.bookstoreapp.bookstoreapp.services.Concrete;

import java.util.List;

import org.springframework.stereotype.Service;

import com.javareactcamp.bookstoreapp.bookstoreapp.entities.Role;
import com.javareactcamp.bookstoreapp.bookstoreapp.entities.models.ApiResponse;
import com.javareactcamp.bookstoreapp.bookstoreapp.repositories.RoleRepository;
import com.javareactcamp.bookstoreapp.bookstoreapp.services.Abstract.RoleService;

@Service
public class RoleServiceImp implements RoleService {
    private final RoleRepository roleRepository;

    public RoleServiceImp(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    @Override
    public ApiResponse<List<Role>> getAllRoles() {
        var roles = roleRepository.findAll();
        return ApiResponse.default_OK(roles);
    }

    @Override
    public ApiResponse<Role> postOneRole(Role role) {
        roleRepository.save(role);
        return ApiResponse.default_CREATED(role);
    }

}
