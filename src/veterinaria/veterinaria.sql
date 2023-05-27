CREATE DATABASE veterinaria;

CREATE TABLE Cliente(
  ClienteId SERIAL PRIMARY KEY,
  Nombre VARCHAR(50),
  Apellido VARCHAR(100),
  Telefono VARCHAR(10),
  Correo VARCHAR(100)
);

CREATE TABLE Mascota(
  MascotaId SERIAL PRIMARY KEY,
  Nombre VARCHAR(50),
  FechaNacimiento DATE,
  Especie VARCHAR(50),
  Raza VARCHAR(50),
  Genero VARCHAR(10),
  ClienteId INT REFERENCES Cliente(ClienteId)
);

CREATE TABLE Veterinario (
  VeterinarioId SERIAL PRIMARY KEY,
  Nombre VARCHAR(50),
  Apellido VARCHAR(100),
  Telefono VARCHAR(10),
  Correo VARCHAR(100),
  Especialidad VARCHAR(50)
);

CREATE TABLE Servicio(
  ServicioId SERIAL PRIMARY KEY,
  Nombre VARCHAR(50),
  Descripcion VARCHAR(150),
  Precio DECIMAL(8, 2)
);

CREATE TABLE Cita (
  CitaId SERIAL PRIMARY KEY,
  Fecha DATE,
  Hora TIME,
  MascotaId INT REFERENCES Mascota(MascotaId),
  VeterinarioId INT REFERENCES Veterinario(VeterinarioId),
  ServicioId INT REFERENCES Servicio(ServicioId)
);