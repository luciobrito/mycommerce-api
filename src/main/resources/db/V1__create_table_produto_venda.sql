CREATE TABLE produto_venda (
    id BIGINT UNSIGNED AUTO_INCREMENT NOT NULL,
    id_venda BIGINT UNSIGNED NOT NULL,
    id_produto BIGINT UNSIGNED NOT NULL,
    quantidade INT UNSIGNED NOT NULL,

    PRIMARY KEY(id),
    CONSTRAINT fk_produto_venda_id_produto FOREIGN KEY (id_produto) REFERENCES produtos(id),
    CONSTRAINT fk_produto_venda_id_venda FOREIGN KEY (id_venda) REFERENCES venda(id)
)