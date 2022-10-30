-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : ven. 14 jan. 2022 à 12:18
-- Version du serveur : 10.4.21-MariaDB
-- Version de PHP : 7.3.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `berguer`
--

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'menus'),
(2, 'burgers'),
(3, 'salades'),
(4, 'drinks');

-- --------------------------------------------------------

--
-- Structure de la table `items`
--

CREATE TABLE `items` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` varchar(250) NOT NULL,
  `price` float NOT NULL,
  `image` varchar(250) NOT NULL,
  `category` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `items`
--

INSERT INTO `items` (`id`, `name`, `description`, `price`, `image`, `category`) VALUES
(3, 'Big Menu', 'Sandwich: Double Burger, Fromage, Cornichon, Salade + Frites + Boisson', 10.9, 'm3.png', 1),
(4, 'Chicken Menu', 'Sandwich: Poulet Frit, Tomate, Salade, Mayonnaise + Frites + Boisson', 9.9, 'm4.png', 1),
(5, 'Fish Menu', 'Sandwich: Poisson, Salade, Mayonnaise, Cornichon + Frites + Boisson', 10.9, 'm5.png', 1),
(6, 'Double Steak Menu', 'Sandwich: Double Burger, Fromage, Bacon, Salade, Tomate + Frites + Boisson', 11.9, 'm6.png', 1),
(8, 'Bacon', 'Sandwich: Burger, Fromage, Bacon, Salade, Tomate', 6.5, 'b2.png', 2),
(9, 'Big', 'Sandwich: Double Burger, Fromage, Cornichon, Salade', 6.9, 'b3.png', 2),
(10, 'Chicken', 'Sandwich: Poulet Frit, Tomate, Salade, Mayonnaise', 5.9, 'b4.png', 2),
(11, 'Fish', 'Sandwich: Poisson, Salade, Mayonnaise, Cornichon', 6.9, 'b5.png', 2),
(12, 'Double Steak', 'Sandwich: Double Burger, Fromage, Bacon, Salade, Tomate', 7.5, 'b6.png', 2),
(13, 'Frites', 'Pommes de terre frites', 3.9, 'sa1.png', 3),
(14, 'Onion Rings', 'Rondelles d\'oignon frits', 3.4, 'sa2.png', 3),
(15, 'Nuggets', 'Nuggets de poulet frits', 5.9, 'sa3.png', 3),
(16, 'Nuggets Fromage', 'Nuggets de fromage frits', 3.5, 'sa4.png', 3),
(17, 'Ailes de Poulet', 'Ailes de poulet Barbecue', 5.9, 'sa5.png', 3),
(18, 'Coca-Cola', 'Au choix: Petit, Moyen ou Grand', 1.9, 'd1.png', 4),
(19, 'Coca-Cola Light', 'Au choix: Petit, Moyen ou Grand', 1.5, 'd2.png', 4),
(20, 'Coca-Cola Zéro', 'Au choix: Petit, Moyen ou Grand', 1.9, 'd3.png', 4),
(21, 'Fanta', 'Au choix: Petit, Moyen ou Grand', 1.9, 'd4.png', 4),
(22, 'sprite', 'Au choix: Petit, Moyen ou Grand', 1.9, 'd5.png', 4);

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `password` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category` (`category`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `items`
--
ALTER TABLE `items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `items`
--
ALTER TABLE `items`
  ADD CONSTRAINT `items_ibfk_1` FOREIGN KEY (`category`) REFERENCES `categories` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
