create table produto_estoque (
    id BIGINT UNSIGNED AUTO_INCREMENT NOT NULL,
    quantidade INTEGER UNSIGNED NOT NULL DEFAULT 0,
    id_produto BIGINT UNSIGNED NOT NULL,
    created_at TIMESTAMP NULL,
    updated_at TIMESTAMP NULL,
    PRIMARY KEY (id),
    CONSTRAINT fk_produto_estoque FOREIGN KEY (id_produto) REFERENCES produtos(id)
)