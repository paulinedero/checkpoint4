CREATE DATABASE babyapp;

USE babyapp;

CREATE TABLE `user` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `username` varchar(255),
  `password` varchar(255) NOT NULL,
  `full_name` varchar(255) NOT NULL,
  `birthday` date,
  `gender` varchar(255),
  `locality` varchar(255),
  `created_at` datetime DEFAULT (now())
);

CREATE TABLE `child` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `full_name` varchar(255) NOT NULL,
  `birthday` date NOT NULL,
  `time_of_birth` varchar(255) NOT NULL,
  `place_of_birth` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `locality` varchar(255) NOT NULL,
  `doctor` varchar(255),
  `parent_id` int NOT NULL,
  `created_at` datetime DEFAULT (now())
);

CREATE TABLE `child_height_record` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `height` int NOT NULL,
  `child_id` int NOT NULL,
  `created_at` datetime DEFAULT (now())
);

CREATE TABLE `child_weight_record` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `weight` int NOT NULL,
  `child_id` int NOT NULL,
  `created_at` datetime DEFAULT (now())
);

ALTER TABLE `child` ADD FOREIGN KEY (`parent_id`) REFERENCES `user` (`id`);

ALTER TABLE `child_height_record` ADD FOREIGN KEY (`child_id`) REFERENCES `child` (`id`);

ALTER TABLE `child_weight_record` ADD FOREIGN KEY (`child_id`) REFERENCES `child` (`id`);
