package com.javareactcamp.bookstoreapp.bookstoreapp.security;

import static com.javareactcamp.bookstoreapp.bookstoreapp.security.ApplicationUserPermission.*;

import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.security.core.authority.SimpleGrantedAuthority;

import com.google.common.collect.Sets;

public enum ApplicationUserRole {

    ADMIN(Sets.newHashSet(
            BOOK_GET, BOOK_POST, BOOK_PUT, BOOK_DELETE,
            CATEGORY_GET, CATEGORY_POST, CATEGORY_PUT, CATEGORY_DELETE,
            AUTHOR_GET, AUTHOR_POST, AUTHOR_PUT, AUTHOR_DELETE)),

    EDITOR(Sets.newHashSet(
            BOOK_GET, BOOK_POST,
            CATEGORY_GET, CATEGORY_POST,
            AUTHOR_GET, AUTHOR_POST)),

    USER(Sets.newHashSet(BOOK_GET,
            CATEGORY_GET,
            AUTHOR_GET));

    private final Set<ApplicationUserPermission> permissions;

    private ApplicationUserRole(Set<ApplicationUserPermission> permissions) {
        this.permissions = permissions;
    }

    public Set<ApplicationUserPermission> getPermissions() {
        return permissions;
    }

    public Set<SimpleGrantedAuthority> getGrantedAuthorities() {
        Set<SimpleGrantedAuthority> permissions = getPermissions()
                .stream()
                .map(permission -> new SimpleGrantedAuthority(permission.getPermission()))
                .collect(Collectors.toSet());
        permissions.add(new SimpleGrantedAuthority("ROLE_" + this.name()));
        return permissions;
    }
}