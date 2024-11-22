create database cientifiks;
drop database cientifiks;
use cientifiks;

CREATE TABLE tipos_usuario(
	id_tipos_usuario int auto_increment primary key,
    tipo varchar(50)
);

CREATE TABLE usuario (
	id_usuario int auto_increment primary key,
    username varchar(50) unique not null,
    password varchar(255) not null,
    email VARCHAR(100) NOT NULL UNIQUE,
    id_tipos_usuario int,
    foreign key (id_tipos_usuario) references tipos_usuario(id_tipos_usuario) ON DELETE SET NULL
);

CREATE TABLE videojuego(
id_videojuego int auto_increment primary key,
nombre varchar(100) not null,
genero varchar(50)
);

create table jugar(
id_videojuego int,
id_usuario int,
puntuacion int,
primary key (id_videojuego, id_usuario),
FOREIGN KEY (id_videojuego) REFERENCES videojuego(id_videojuego),
FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
);

INSERT INTO jugar (id_videojuego, id_usuario, puntuacion) 
VALUES (1, 2, 300);
