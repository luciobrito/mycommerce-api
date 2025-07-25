package io.github.luciobrito.mycommerce.exceptions;

public class ProdutoDuplicadoException extends RuntimeException {
    private String field;
    public ProdutoDuplicadoException(String message, String field) {
        super(message); this.field = field;
    }
    public String getField(){
        return field;
    }
}
