package io.github.luciobrito.mycommerce.Models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import java.time.OffsetDateTime;

@Table(name = "login_attempt")
@Entity
@Getter
@Setter
public class LoginAttempt {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String requestIp;
    private String errorField;
    //private String username;
    private boolean successful;
    @CreationTimestamp
    private OffsetDateTime createdAt;
}
