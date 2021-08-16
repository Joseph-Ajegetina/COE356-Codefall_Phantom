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

DROP TABLE IF EXISTS customers;
CREATE TABLE customers (
  customer_id INT NOT NULL AUTO_INCREMENT,
  customer_username VARCHAR(255),
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  contact VARCHAR(255) DEFAULT NULL,
  address VARCHAR(50) NOT NULL,
  email VARCHAR(255) DEFAULT NULL,
  password VARCHAR(400) NOT NULL,
  profile_image_path VARCHAR(400),
  PRIMARY KEY (customer_id)
);

DROP TABLE IF EXISTS artisans;
CREATE TABLE artisans (
  artisan_id INT NOT NULL AUTO_INCREMENT,
  service_id INT NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  rating DECIMAL(2,1) UNSIGNED CONSTRAINT chk_Rating CHECK (rating >= 0.00 AND rating <=5.00),
  address VARCHAR(255) DEFAULT NULL,
  contact VARCHAR(255) NOT NULL,
  profile_image_path VARCHAR(400),
  PRIMARY KEY (artisan_id),
  FOREIGN KEY (service_id) REFERENCES services(service_id)
  );

DROP TABLE IF EXISTS records;
CREATE TABLE records (
  record_id INT NOT NULL AUTO_INCREMENT,
  customer_id INT NOT NULL,
  artisan_id INT NOT NULL,
  service_id INT NOT NULL,
  date DATETIME DEFAULT NOW(),
  PRIMARY KEY (record_id),
  FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
  FOREIGN KEY (artisan_id) REFERENCES artisans(artisan_id),
  FOREIGN KEY (service_id) REFERENCES services(service_id)
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
SELECT count(records.service_id) AS requests, services.skill, services.description, artisanbridge.services.image_path AS image
FROM records JOIN services ON records.service_id=services.service_id
GROUP BY records.service_id
LIMIT 3;

ALTER TABLE artisans AUTO_INCREMENT=1000;
ALTER TABLE customers AUTO_INCREMENT=1000;
ALTER TABLE services AUTO_INCREMENT=1000;
ALTER TABLE records AUTO_INCREMENT=1000;
ALTER TABLE admin AUTO_INCREMENT=1000;




INSERT INTO services (skill, description, image_path) VALUES ('Electronics', 'Get your blenders, rice cookers, hot plate, etc.','images/Electronics.png');
INSERT INTO services (skill, description, image_path) VALUES ('Phones and Watches', 'Get a quick fix on your phone screen, or watch battery replacement.','images/PhoneandWatch.png');
INSERT INTO services (skill, description, image_path) VALUES ('Footwear Repair', 'Mend your shoes, sandals, sneakers, slippers, etc.','images/FootwearRepair.png');
INSERT INTO services (skill, description, image_path) VALUES ('Carpentry', 'All sorts of furniture services are available here.','images/Carpentry.png');
INSERT INTO services (skill, description, image_path) VALUES ('Painting', 'Quality personnel available for all types of paint work','images/painting.png');
INSERT INTO services (skill, description, image_path) VALUES ('Tailoring', 'Get beautiful clothing from our exceptional tailors','images/Tailoring.png');
INSERT INTO services (skill, description, image_path) VALUES ('Plumbering', 'Do you have faulty tap, broken pipe? Contact for plumbing services.','images/Plumbering.png');
INSERT INTO services (skill, description, image_path) VALUES ('Metalworks', 'Welding services, metal art works and more','images/Metal works.png');
INSERT INTO services (skill, description, image_path) VALUES ('Electric and Fridges', 'Fault meter, light, fans, fridges and all electrical problems','images/ElectricandFridges.png');