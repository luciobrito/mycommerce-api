CREATE TABLE compras (
    id BIGINT UNSIGNED AUTO_INCREMENT NOT NULL,
    data_compra DATE NOT NULL,
    forma_pagamento VARCHAR(255) NULL,
    desconto DECIMAL(8,2) NOT NULL,
    created_at TIMESTAMP NULL,
    updated_at TIMESTAMP NULL,
    PRIMARY KEY (id)
)