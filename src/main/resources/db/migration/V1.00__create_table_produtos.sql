CREATE TABLE produtos (
    id BIGINT UNSIGNED AUTO_INCREMENT NOT NULL,
    nome VARCHAR(255) NOT NULL,
    preco DECIMAL(8,2) NOT NULL,
    codigo_barra VARCHAR(255) NOT NULL ,
    descricao TEXT NOT NULL,
    created_at TIMESTAMP NULL,
    updated_at TIMESTAMP NULL,
    PRIMARY KEY(id),
    CONSTRAINT UNIQUE(codigo_barra)
 );