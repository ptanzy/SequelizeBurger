CREATE DATABASE IF NOT EXISTS burgers_db;
USE burgers_db;

-- -- If the table already exists, remove it before trying to create the table again
-- DROP TABLE IF EXISTS burgers;

-- Create the burgers table
CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(255) NOT NULL,
    devoured BOOL DEFAULT false,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    modifiedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);
