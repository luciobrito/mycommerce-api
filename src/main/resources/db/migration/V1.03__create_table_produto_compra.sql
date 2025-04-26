CREATE TABLE produto_compra (
    id BIGINT UNSIGNED AUTO_INCREMENT NOT NULL,
    id_produto BIGINT UNSIGNED NOT NULL,
    id_compra BIGINT UNSIGNED NOT NULL,
    quantidade INT NOT NULL,
    valor_unitario DECIMAL(8,2) NOT NULL,
    created_at TIMESTAMP NULL,
    updated_at TIMESTAMP NULL,
    PRIMARY KEY(id),
    CONSTRAINT fk_produto_compra_id_produto FOREIGN KEY (id_produto) REFERENCES produtos(id),
    CONSTRAINT fk_produto_compra_id_compra FOREIGN KEY (id_compra) REFERENCES compras(id)
)