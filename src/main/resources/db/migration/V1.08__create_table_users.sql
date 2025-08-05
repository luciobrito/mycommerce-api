CREATE TABLE users(
    id BIGINT UNSIGNED AUTO_INCREMENT NOT NULL,
    username varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    CONSTRAINT UNIQUE(username),
    created_at TIMESTAMP NULL,
    updated_at TIMESTAMP NULL,
    PRIMARY KEY(id)
)