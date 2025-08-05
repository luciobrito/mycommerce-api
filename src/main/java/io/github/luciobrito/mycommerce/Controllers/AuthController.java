package io.github.luciobrito.mycommerce.Controllers;

import io.github.luciobrito.mycommerce.DTOs.LoginRequestDTO;
import io.github.luciobrito.mycommerce.Models.LoginAttempt;
import io.github.luciobrito.mycommerce.Models.User;
import io.github.luciobrito.mycommerce.Repositories.LoginAttemptRepo;
import io.github.luciobrito.mycommerce.Repositories.UserRepo;
import io.github.luciobrito.mycommerce.security.TokenService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {
    private final UserRepo userRepo;
    private final PasswordEncoder passwordEncoder;
    private final TokenService tokenService;
    private final LoginAttemptRepo loginAttemptRepo;
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequestDTO body, HttpServletRequest request){
        User user = userRepo.findByUsername(body.username())
                .orElseThrow(()-> new RuntimeException("Usuário não encontrado"));
        Map<String,String> response = new HashMap<>();
        if(passwordEncoder.matches(body.password(), user.getPassword())){
            saveLoginAttempt(true, request.getRemoteAddr(),null);
            String token = tokenService.generateToken(user);
            response.put("Token",token);
            return ResponseEntity.ok(response);
        }
        saveLoginAttempt(false,request.getRemoteAddr(),"password");
        return ResponseEntity.badRequest().build();
    }
    private void saveLoginAttempt(boolean success, String requestIp, String errorField){
        LoginAttempt loginAttempt = new LoginAttempt();
        loginAttempt.setSuccessful(success);
        loginAttempt.setRequestIp(requestIp);
        loginAttempt.setErrorField(errorField);
        loginAttemptRepo.save(loginAttempt);
    }
}
