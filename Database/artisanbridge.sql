DROP DATABASE IF EXISTS artisanbridge;
CREATE DATABASE artisanbridge;
USE artisanbridge;

DROP TABLE IF EXISTS `services`;
CREATE TABLE `services` (
  `service_id` int NOT NULL AUTO_INCREMENT,
  `service_type` varchar(255) NOT NULL,
  `description` varchar(2000) DEFAULT NULL,
  PRIMARY KEY (`service_id`)
); 

DROP TABLE IF EXISTS `customers`;
CREATE TABLE `customers` (
  `customer_id` int NOT NULL AUTO_INCREMENT,
  `customer_username` varchar(255),
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `birth_date` date DEFAULT NULL,
  `phone` varchar(50) DEFAULT NULL,
  `address` varchar(50) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(400) NOT NULL,
  PRIMARY KEY (`customer_id`)
) ;

DROP TABLE IF EXISTS `artisans`;
CREATE TABLE `artisans` (
  `artisan_id` int NOT NULL AUTO_INCREMENT,
  `artisan_username` varchar(255),
  `service_id` int NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `rating` DECIMAL(2,2) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `contact` varchar(50) NOT NULL,
  `password` varchar(400) NOT NULL,
  PRIMARY KEY (`artisan_id`),
  FOREIGN KEY (service_id) REFERENCES services(service_id));


DROP TABLE IF EXISTS `records`;
CREATE TABLE `records` (
  `customer_id` int,
  `artisan_id` int,
  `date` DATETIME DEFAULT NOW(),
  FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
  FOREIGN KEY (artisan_id) REFERENCES artisans(artisan_id)
) ;

CREATE VIEW topRatedArtisans AS SELECT first_name,last_name,rating FROM artisans ORDER BY rating DESC LIMIT 3;
ALTER TABLE artisans AUTO_INCREMENT=1000;
ALTER TABLE customers AUTO_INCREMENT=1000;
