package com.javareactcamp.bookstoreapp.bookstoreapp.services.Concrete;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.javareactcamp.bookstoreapp.bookstoreapp.entities.Role;
import com.javareactcamp.bookstoreapp.bookstoreapp.entities.User;
import com.javareactcamp.bookstoreapp.bookstoreapp.entities.dto.UserDto;
import com.javareactcamp.bookstoreapp.bookstoreapp.entities.models.ApiResponse;
import com.javareactcamp.bookstoreapp.bookstoreapp.exceptions.NotFoundExceptions.UserNotFoundException;
import com.javareactcamp.bookstoreapp.bookstoreapp.repositories.RoleRepository;
import com.javareactcamp.bookstoreapp.bookstoreapp.repositories.UserRepository;
import com.javareactcamp.bookstoreapp.bookstoreapp.security.ApplicationUser;
import com.javareactcamp.bookstoreapp.bookstoreapp.services.Abstract.UserService;
import static com.javareactcamp.bookstoreapp.bookstoreapp.security.ApplicationUserRole.*;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
@Repository("mysql")
public class UserServiceImp implements UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final RoleRepository roleRepository;
    private final ModelMapper mapper;

    @Override
    public Optional<ApplicationUser> selectApplicationUserByUsername(String username) {

        User user = userRepository.findByUserName(username);

        Set<SimpleGrantedAuthority> grantedAuthorities = new HashSet<>();
        Set<Role> roles = new HashSet<>();
        roles = user.getRoles();
        for (Role role : roles) {
            switch (role.getName()) {
                case "USER":
                    grantedAuthorities.addAll(USER.getGrantedAuthorities());
                    break;
                case "EDITOR":
                    grantedAuthorities.addAll(EDITOR.getGrantedAuthorities());
                    break;
                case "ADMIN":
                    grantedAuthorities.addAll(ADMIN.getGrantedAuthorities());
                    break;
                default:
                    break;
            }
        }

        Optional<ApplicationUser> applicationUser = Optional
                .ofNullable(new ApplicationUser(username,
                        user.getPassword(),
                        grantedAuthorities,
                        true,
                        true,
                        true,
                        true));

        return applicationUser;
    }

    @Override
    public ApiResponse<List<UserDto>> getAllUsers() {
        List<UserDto> list = userRepository
                .findAll()
                .stream()
                .map(user -> mapper.map(user, UserDto.class))
                .collect(Collectors.toList());

        return ApiResponse.default_OK(list);
    }

    @Override
    public ApiResponse<UserDto> getOneUser(int id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));

        return ApiResponse.default_OK(mapper.map(user, UserDto.class));
    }

    @Override
    public ApiResponse<UserDto> postOneUser(User user) {
        Set<Role> roles = new HashSet<>();
        Role role = roleRepository.findByName("USER");
        if (role == null) {
            throw new RuntimeException("USER role is not defined.");
        }
        roles.add(role);
        user.setRoles(roles);
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
        return ApiResponse.default_CREATED(mapper.map(user, UserDto.class));
    }

    @Override
    public ApiResponse<UserDto> putOneUser(int id, User user) {

        UserDto userDto = getOneUser(id).getData();

        User userEntity = mapper.map(userDto, User.class);

        userEntity.setFirstName(user.getFirstName());
        userEntity.setLastName(user.getLastName());

        Set<Role> roles = roleRepository.findByIdIn(user.getRoles());
        userEntity.setRoles(roles);

        userRepository.save(userEntity);

        return ApiResponse.default_ACCEPTED(mapper.map(userEntity, UserDto.class));
    }

    @Override
    public User getOneUserByUserName(String username) {
        return userRepository.findByUserName(username);
    }

    @Override
    public void deleteOneUser(int id) {
        getOneUser(id);
        userRepository.deleteById(id);
    }

    @Override
    public User saveOneUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        Set<Role> roles = new HashSet<>();
        Role role = roleRepository.findByName("USER");
        roles.add(role);
        user.setRoles(roles);

        return userRepository.save(user);
    }

}
