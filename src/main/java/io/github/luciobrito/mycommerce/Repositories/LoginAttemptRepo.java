package io.github.luciobrito.mycommerce.Repositories;

import io.github.luciobrito.mycommerce.Models.LoginAttempt;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoginAttemptRepo extends JpaRepository<LoginAttempt, Integer> {
}
