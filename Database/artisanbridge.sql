DROP DATABASE IF EXISTS artisanbridge;
CREATE DATABASE artisanbridge;
USE artisanbridge;

DROP TABLE IF EXISTS services;
CREATE TABLE services (
  service_id INT NOT NULL AUTO_INCREMENT,
  skill VARCHAR(255) NOT NULL,
  description VARCHAR(2000) DEFAULT NULL,
  image_path VARCHAR(400) DEFAULT NULL,
  PRIMARY KEY (service_id)
); 
INSERT INTO services (skill, description, image_path) VALUES ('Electronics', 'Get your blenders, rice cookers, hot plate, etc.','Electronics.png');
INSERT INTO services (skill, description, image_path) VALUES ('Phones and Watches', 'Get a quick fix on your phone screen, or watch battery replacement.','PhoneandWatch.png');
INSERT INTO services (skill, description, image_path) VALUES ('Footwear Repair', 'Mend your shoes, sandals, sneakers, slippers, etc.','FootwearRepair.png');
INSERT INTO services (skill, description, image_path) VALUES ('Carpentry', 'All sorts of furniture services are available here.','Carpentry.png');
INSERT INTO services (skill, description, image_path) VALUES ('Painting', 'Quality personnel available for all types of paint work','painting.png');
INSERT INTO services (skill, description, image_path) VALUES ('Tailoring', 'Get beautiful clothing from our exceptional tailors','Tailoring.png');
INSERT INTO services (skill, description, image_path) VALUES ('Plumbering', 'Do you have faulty tap, broken pipe? Contact for plumbing services.','Plumbering.png');
INSERT INTO services (skill, description, image_path) VALUES ('Metal works', 'Welding services, metal art works and more','Metalworks.png');
INSERT INTO services (skill, description, image_path) VALUES ('Electric and Fridges', 'Fault meter, light, fans, fridges and all electrical problems','ElectricandFridges.png');

DROP TABLE IF EXISTS customers;
CREATE TABLE customers (
  customer_id INT NOT NULL AUTO_INCREMENT,
  customer_username VARCHAR(255),
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  contact VARCHAR(255) DEFAULT NULL,
  address VARCHAR(50) NOT NULL,
  email VARCHAR(255) DEFAULT NULL,
  password VARCHAR(400) NOT NULL UNIQUE,
  profile_image_path VARCHAR(400),
  PRIMARY KEY (customer_id)
);

DROP TABLE IF EXISTS artisans;
CREATE TABLE artisans (
  artisan_id INT NOT NULL AUTO_INCREMENT,
  service_id INT NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  rating DECIMAL(2,1) UNSIGNED, CONSTRAINT chk_Rating CHECK (rating >= 0.00 AND rating <=5.00),
  address VARCHAR(255) DEFAULT NULL,
  contact VARCHAR(255) NOT NULL,
  profile_image_path VARCHAR(400),
  services_completed INT NOT NULL DEFAULT '0',
  PRIMARY KEY (artisan_id),
  FOREIGN KEY (service_id) REFERENCES services(service_id)
  );
  
  CREATE TABLE record_statuses (
  record_status_id tinyint(4) NOT NULL,
  name varchar(50) NOT NULL,
  PRIMARY KEY (record_status_id)
);
INSERT INTO record_statuses VALUES (1, 'Pending');
INSERT INTO record_statuses VALUES (2, 'Done');
INSERT INTO record_statuses VALUES (3, 'Rated');

DROP TABLE IF EXISTS records;
CREATE TABLE records (
  record_id INT NOT NULL AUTO_INCREMENT,
  customer_id INT NOT NULL,
  artisan_id INT NOT NULL,
  service_id INT NOT NULL,
  date DATETIME DEFAULT NOW(),
  status TINYINT(4) NOT NULL DEFAULT '1',
  rating DECIMAL(2,1) UNSIGNED CONSTRAINT chk_Rating2 CHECK (rating >= 0.00 AND rating <=5.00),
  PRIMARY KEY (record_id),
  FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
  FOREIGN KEY (artisan_id) REFERENCES artisans(artisan_id),
  FOREIGN KEY (service_id) REFERENCES services(service_id),
  FOREIGN KEY (status) REFERENCES record_statuses(record_status_id)
);

DROP TABLE IF EXISTS admin;
CREATE TABLE admin(
admin_id INT NOT NULL AUTO_INCREMENT,
password VARCHAR(255),
email VARCHAR(255),
username VARCHAR(255),
PRIMARY KEY(admin_id)
);






CREATE VIEW top_Rated_Artisans AS 
SELECT artisans.artisan_id, artisans.first_name, artisans.last_name, artisans.rating, artisans.address, artisans.contact, services.skill, artisans.profile_image_path  
FROM artisans JOIN services ON artisans.service_id=services.service_id
ORDER BY artisans.rating DESC 
LIMIT 3;

CREATE VIEW popular_Services AS 
SELECT count(records.service_id) AS requests, services.skill AS service, services.description,services.service_id AS id, services.image_path AS image
FROM records JOIN services ON records.service_id=services.service_id
GROUP BY records.service_id
LIMIT 3;

ALTER TABLE artisans AUTO_INCREMENT=1000;
ALTER TABLE customers AUTO_INCREMENT=1000;
ALTER TABLE services AUTO_INCREMENT=1000;
ALTER TABLE records AUTO_INCREMENT=1000;
ALTER TABLE admin AUTO_INCREMENT=1000;

insert into customers values(
1000,'RaheemSterling','Raheem','Sterling',0505708442,'kumasi', 'arron@gmail.com','$2b$12$vWzeBCptgpg6EFQ/t7R96e8nFOEwWybZkL.kO8aNH30GXWbnUl7sC',null);
UPDATE `artisanbridge`.`services` SET `skill` = 'Laptops, Phones and Watches' WHERE (`service_id` = '2');
INSERT INTO `artisanbridge`.`services` (`service_id`, `skill`, `description`, `image_path`) VALUES ('10', 'Mechanic', 'Having problems with your engine or suspension? Check out our qualified mechanics', 'Mechanic.png');
INSERT INTO `artisanbridge`.`artisans` (`artisan_id`, `service_id`, `first_name`, `last_name`, `rating`, `address`, `contact`, `profile_image_path`) VALUES ('1000', '6', 'PK', 'McForson', '5', 'Unity hall block B ground floor', '0241490250', 'Mcforson.jpg');
INSERT INTO `artisanbridge`.`artisans` (`artisan_id`, `service_id`, `first_name`, `last_name`, `rating`, `address`, `contact`, `profile_image_path`) VALUES ('1001', '3', 'Alhassan', 'Ahmadu', '3', 'Behind hall 7', '0242737693', 'Alhassan.jpg');
INSERT INTO `artisanbridge`.`artisans` (`artisan_id`, `service_id`, `first_name`, `last_name`, `rating`, `address`, `contact`, `profile_image_path`) VALUES ('1002', '6', 'Aunty', 'Ama', '3', 'Republic hall Annex', '0543283445', 'Ama.jpg');
INSERT INTO `artisanbridge`.`artisans` (`artisan_id`, `service_id`, `first_name`, `last_name`, `rating`, `address`, `contact`, `profile_image_path`) VALUES ('1003', '2', 'Joshua', 'Nartey', '4', 'Republic hall', '0240315233', 'joshua.jpg');
INSERT INTO `artisanbridge`.`artisans` (`artisan_id`, `service_id`, `first_name`, `last_name`, `rating`, `address`, `contact`, `profile_image_path`) VALUES ('1004', '5', 'Henry', 'Addai', '4', 'Off campus oppsite Victory towers', '0551782100', 'henry.jpg');
INSERT INTO `artisanbridge`.`artisans` (`artisan_id`, `service_id`, `first_name`, `last_name`, `rating`, `address`, `contact`, `profile_image_path`) VALUES ('1005', '1', 'Nana', 'Yaw', '3', 'Off campus oppsite Victory towers', '0546112943', 'nana.jpg');
INSERT INTO `artisanbridge`.`artisans` (`artisan_id`, `service_id`, `first_name`, `last_name`, `rating`, `address`, `contact`, `profile_image_path`) VALUES ('1006', '2', 'Nana', 'Antwi', '3', 'Ayeduase gate', '0546370163', 'Antwi.jpg');
INSERT INTO `artisanbridge`.`artisans` (`artisan_id`, `service_id`, `first_name`, `last_name`, `rating`, `address`, `contact`, `profile_image_path`) VALUES ('1007', '4', 'Daniel', 'Boadu', '4', 'Kotei opposite Methodist church', '0208252758', 'dan.jpg');
INSERT INTO `artisanbridge`.`artisans` (`artisan_id`, `service_id`, `first_name`, `last_name`, `rating`, `address`, `contact`, `profile_image_path`) VALUES ('1008', '10', 'Emmanuel', 'Adankwa', '3', 'Kotei opposite Methodist church ', '0547483870', 'emma.jpg');
INSERT INTO `artisanbridge`.`records` (`record_id`, `customer_id`, `artisan_id`, `service_id`, `date`) VALUES ('1000', '1000', '1005', '1', '2021-09-10');
INSERT INTO `artisanbridge`.`records` (`record_id`, `customer_id`, `artisan_id`, `service_id`, `date`) VALUES ('1001', '1000', '1001', '3', '2021-09-10');
INSERT INTO `artisanbridge`.`records` (`record_id`, `customer_id`, `artisan_id`, `service_id`, `date`) VALUES ('1002', '1000', '1000', '6', '2021-09-10');
UPDATE `artisanbridge`.`artisans` SET `rating` = '3.0' WHERE (`artisan_id` = '1003');
SELECT `records`.`record_id`,
    `records`.`customer_id`,
    `records`.`artisan_id`,
    `records`.`service_id`,
    `records`.`date`,
    `records`.`status`,
    `records`.`rating`
FROM `artisanbridge`.`records`;