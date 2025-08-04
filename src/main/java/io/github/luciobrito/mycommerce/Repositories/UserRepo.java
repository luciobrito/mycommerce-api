package io.github.luciobrito.mycommerce.Repositories;

import io.github.luciobrito.mycommerce.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepo extends JpaRepository<User, Integer> {
    Optional<User> findByUsername(String username);
}
