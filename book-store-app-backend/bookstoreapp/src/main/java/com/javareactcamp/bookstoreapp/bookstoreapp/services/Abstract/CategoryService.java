package com.javareactcamp.bookstoreapp.bookstoreapp.services.Abstract;

import java.util.List;

import com.javareactcamp.bookstoreapp.bookstoreapp.entities.Category;
import com.javareactcamp.bookstoreapp.bookstoreapp.entities.models.ApiResponse;

public interface CategoryService {
    ApiResponse<List<Category>> getAllCategories();

    ApiResponse<Category> getOneCategory(int id);

    ApiResponse<Category> postOneCategory(Category category);

    ApiResponse<Category> putOneCategory(int id, Category category);

    void deleteCategory(int id);

}