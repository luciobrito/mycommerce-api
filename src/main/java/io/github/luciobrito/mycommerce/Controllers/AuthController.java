package io.github.luciobrito.mycommerce.Controllers;

import io.github.luciobrito.mycommerce.DTOs.LoginRequestDTO;
import io.github.luciobrito.mycommerce.Models.User;
import io.github.luciobrito.mycommerce.Repositories.UserRepo;
import io.github.luciobrito.mycommerce.security.TokenService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {
    private final UserRepo userRepo;
    private final PasswordEncoder passwordEncoder;
    private final TokenService tokenService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequestDTO body){
        User user = userRepo.findByUsername(body.username())
                .orElseThrow(()->new RuntimeException("Usuário não encontrado"));
        Map<String,String> response = new HashMap<>();
        if(passwordEncoder.matches(body.password(), user.getPassword())){
            String token = tokenService.generateToken(user);
            response.put("Token",token);
            return ResponseEntity.ok(response);
        }
        return ResponseEntity.badRequest().build();
    }
}
