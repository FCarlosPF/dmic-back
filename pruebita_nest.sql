-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-11-2023 a las 16:18:53
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pruebita_nest`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `catalogo_queretaro`
--

CREATE TABLE `catalogo_queretaro` (
  `iqms` int(11) NOT NULL,
  `familia` varchar(255) NOT NULL,
  `molde` varchar(255) NOT NULL,
  `foto` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `catalogo_queretaro`
--

INSERT INTO `catalogo_queretaro` (`iqms`, `familia`, `molde`, `foto`) VALUES
(211262, 'Grommetpue', '3443-3', 'https://i.ibb.co/KxZskYc/Imagen2.png'),
(211483, 'Grommet', '3687-3', 'https://i.ibb.co/0KjQdwD/Imagen1.png'),
(2112627, 'Grommet', '3443-3', 'https://i.ibb.co/KxZskYc/Imagen2.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` enum('user','admin') NOT NULL DEFAULT 'user'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `role`) VALUES
(30, 'are', 'are@are.com', '$2b$12$.HOcPllHotXUde4h/gqbiuimvQsmvKUh26NZKIwH8KbucC0RnO8M2', 'user'),
(42, 'a', 'Aaa@aaa.com', '$2b$12$MnPAPfQmKSdt1F6lLTGWLuyUswAI2tm5d2wpO9UG/8A0.ij.E/AQm', 'user'),
(46, 'b', 'b@b.com', '$2b$12$nDSW1aTtt/ihVSKTU3GiwOEc0f1yyslRH8R2/Q.Vnat8ASdj2DOkS', 'user'),
(51, 'da', 'da@da.com', '$2b$12$v5U/FRlfbLAzBirtO/i0j.jf6VBt8wOS7YSRZpRuRwMTsAvV0r0ga', 'admin'),
(52, 'creando aplicacion usando react native', 'jesusesteband@gmail.com', '$2b$12$OqNgGrLts8utucZHlwW5q.tYr8xPWO9G6Lvzx3.S6WK6f00nE1/De', 'user'),
(53, 'Freddy Carlos', 'paucarflorescarlos@gmail.com', '$2b$12$RHEJupIPt77URIEguYAHBudLtEpG5Q3O2G8AENVAKDc3JBNZhv85G', 'user');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `catalogo_queretaro`
--
ALTER TABLE `catalogo_queretaro`
  ADD PRIMARY KEY (`iqms`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_97672ac88f789774dd47f7c8be` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
