package com.javareactcamp.bookstoreapp.bookstoreapp.services.Concrete;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.stereotype.Service;

import com.javareactcamp.bookstoreapp.bookstoreapp.entities.Author;
import com.javareactcamp.bookstoreapp.bookstoreapp.entities.models.ApiResponse;
import com.javareactcamp.bookstoreapp.bookstoreapp.exceptions.NotFoundExceptions.AuthorNotFoundException;
import com.javareactcamp.bookstoreapp.bookstoreapp.repositories.AuthorRepository;
import com.javareactcamp.bookstoreapp.bookstoreapp.services.Abstract.AuthorService;

@Service
public class AuthorServiceImp implements AuthorService {

    private final AuthorRepository authorRepository;

    public AuthorServiceImp(AuthorRepository authorRepository) {
        this.authorRepository = authorRepository;
    }

    @Override
    public ApiResponse<List<Author>> getAllAuthors() {
        List<Author> list = authorRepository.findAll();
        return ApiResponse.default_OK(list);
    }

    @Override
    public ApiResponse<Author> getOneAuthor(int id) {
        Author author = authorRepository
                .findById(id)
                .orElseThrow(() -> new AuthorNotFoundException(id));

        return ApiResponse.default_OK(author);
    }

    @Override
    public ApiResponse<Author> postOneAuthor(Author author) {
        Author authorAdded = authorRepository.save(author);
        return ApiResponse.default_CREATED(authorAdded);
    }

    @Override
    public ApiResponse<Author> putOneAuthor(int id, Author author) {
        getOneAuthor(id);
        author.setId(id);
        authorRepository.save(author);
        return ApiResponse.default_ACCEPTED(author);
    }

    @Override
    public void deleteOneAuthor(int id) {
        getOneAuthor(id);
        authorRepository.deleteById(id);
    }

    @Override
    public Set<Author> getAuthorsByIds(List<Integer> authorIds) {
        Set<Author> authors = new HashSet<>();
        authorIds
                .forEach(id -> authors.add(getOneAuthor(id).getData()));
        return authors;
    }

}
