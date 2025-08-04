CREATE TABLE login_attempt (
    id BIGINT UNSIGNED AUTO_INCREMENT NOT NULL,
    request_ip VARCHAR(255),
    successful BOOLEAN,
    error_field VARCHAR(255),
    created_at TIMESTAMP NULL,
    PRIMARY KEY(id)
)