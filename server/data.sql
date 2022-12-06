CREATE DATABASE todoapp;

CREATE TABLE todos (
  id SERIAL PRIMARY KEY,
  user_email VARCHAR(200),
  title VARCHAR(30),
  progress INT,
  date VARCHAR(300)
);

CREATE TABLE users (
  email VARCHAR(255) PRIMARY KEY,
  hashed_password VARCHAR(255)
);