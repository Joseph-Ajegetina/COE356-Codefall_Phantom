DROP DATABASE IF EXISTS artisanbridge;
CREATE DATABASE artisanbridge;
USE artisanbridge;

DROP TABLE IF EXISTS `services`;
CREATE TABLE `services` (
  `service_id` INT NOT NULL AUTO_INCREMENT,
  `service_type` varchar(255) NOT NULL,
  `description` varchar(2000) DEFAULT NULL,
  PRIMARY KEY (`service_id`)
); 

DROP TABLE IF EXISTS `customers`;
CREATE TABLE `customers` (
  `customer_id` INT NOT NULL AUTO_INCREMENT,
  `customer_username` varchar(255),
  `name` varchar(400) NOT NULL,
  `birth_date` date DEFAULT NULL,
  `phone` varchar(50) DEFAULT NULL,
  `address` varchar(50) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(400) NOT NULL,
  PRIMARY KEY (`customer_id`)
);

DROP TABLE IF EXISTS `artisans`;
CREATE TABLE `artisans` (
  `artisan_id` int NOT NULL AUTO_INCREMENT,
  `artisan_username` varchar(255),
  `service_id` int NOT NULL,
  `name` varchar(400) NOT NULL,
  `rating` DECIMAL(2,2) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `contact` varchar(50) NOT NULL,
  `password` varchar(400) NOT NULL,
  `birth_date` date DEFAULT NULL,
  PRIMARY KEY (`artisan_id`),
  FOREIGN KEY (service_id) REFERENCES services(service_id)
  );


DROP TABLE IF EXISTS `records`;
CREATE TABLE `records` (
  `record_id` INT NOT NULL AUTO_INCREMENT,
  `customer_id` int NOT NULL,
  `artisan_id` int NOT NULL,
  `date` DATETIME DEFAULT NOW(),
  `service_type` varchar(255) NOT NULL,
  PRIMARY KEY (record_id),
  FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
  FOREIGN KEY (artisan_id) REFERENCES artisans(artisan_id)
);

CREATE VIEW top_Rated_Artisans AS 
SELECT name, rating 
FROM artisans 
ORDER BY rating DESC 
LIMIT 3;

CREATE VIEW popular_Services AS 
SELECT service_type   
FROM records
GROUP BY service_type 
ORDER BY COUNT(service_type) DESC
LIMIT 3;

ALTER TABLE artisans AUTO_INCREMENT=1000;
ALTER TABLE customers AUTO_INCREMENT=1000;
ALTER TABLE services AUTO_INCREMENT=1000;
ALTER TABLE records AUTO_INCREMENT=1000;