CREATE TABLE users(
    id BIGINT UNSIGNED AUTO_INCREMENT NOT NULL,
    username varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    created_at TIMESTAMP NULL,
    updated_at TIMESTAMP NULL,
    CONSTRAINT UNIQUE(username),
    PRIMARY KEY(id)
)