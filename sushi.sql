-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Mar 20, 2024 alle 16:13
-- Versione del server: 10.4.25-MariaDB
-- Versione PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sushi`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `sushi_type`
--

CREATE TABLE `sushi_type` (
  `id` int(11) NOT NULL,
  `nome` varchar(30) NOT NULL,
  `immagine` varchar(30) NOT NULL,
  `prezzo` decimal(5,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `sushi_type`
--

INSERT INTO `sushi_type` (`id`, `nome`, `immagine`, `prezzo`) VALUES
(1, 'California Roll', 'california', '3.50'),
(2, 'Dragon Roll', 'dragon', '2.50'),
(3, 'Dynamite Roll', 'dynamite', '1.50'),
(4, 'Philadelphia Roll', 'philadelphia', '0.50'),
(5, 'Rainbow Roll', 'rainbow', '2.70'),
(6, 'Shrimp Roll', 'shrimp', '3.50');

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `sushi_type`
--
ALTER TABLE `sushi_type`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `sushi_type`
--
ALTER TABLE `sushi_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
