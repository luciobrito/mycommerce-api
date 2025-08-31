package io.github.luciobrito.mycommerce.Controllers;

import io.github.luciobrito.mycommerce.DTOs.ExceptionFieldDTO;
import io.github.luciobrito.mycommerce.exceptions.DescontoInvalido;
import io.github.luciobrito.mycommerce.exceptions.ProdutoDuplicadoException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class GlobalExceptionHandler {
    Map<String,String> validationObj;
    @ExceptionHandler(ProdutoDuplicadoException.class)
    public ResponseEntity<?> ProdutoDuplicadoException(ProdutoDuplicadoException e){
        validationObj = new HashMap<String,String>();
        validationObj.put(e.getField(),e.getMessage());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(validationObj);
    }
    @ExceptionHandler(DescontoInvalido.class)
    public ResponseEntity<?> DescontoInvalidoException(DescontoInvalido e){
        validationObj = new HashMap<>();
        validationObj.put("desconto", e.getMessage());
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(validationObj);
    }
}
