DROP DATABASE IF EXISTS artisanbridge;
CREATE DATABASE artisanbridge;
USE artisanbridge;

DROP TABLE IF EXISTS services;
CREATE TABLE services (
  service_id INT NOT NULL AUTO_INCREMENT,
  skill VARCHAR(255) NOT NULL,
  description VARCHAR(2000) DEFAULT NULL,
  PRIMARY KEY (service_id)
); 

DROP TABLE IF EXISTS customers;
CREATE TABLE customers (
  customer_id INT NOT NULL AUTO_INCREMENT,
  customer_username VARCHAR(255),
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  birth_date DATE DEFAULT NULL,
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
  artisan_username VARCHAR(255),
  service_id INT NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  rating DECIMAL(2,1) UNSIGNED CONSTRAINT chk_Rating CHECK (rating >= 0.00 AND rating <=5.00),
  address VARCHAR(255) DEFAULT NULL,
  contact VARCHAR(255) NOT NULL,
  password VARCHAR(400) NOT NULL,
  birth_date DATE DEFAULT NULL,
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
SELECT artisans.first_name, artisans.last_name, artisans.rating, services.skill 
FROM artisans JOIN services ON artisans.service_id=services.service_id
ORDER BY artisans.rating DESC 
LIMIT 3;

CREATE VIEW popular_Services AS 
SELECT COUNT(records.service_id) AS requests, services.skill, services.description 
FROM records JOIN services ON records.service_id=services.service_id
GROUP BY records.service_id
LIMIT 3;

ALTER TABLE artisans AUTO_INCREMENT=1000;
ALTER TABLE customers AUTO_INCREMENT=1000;
ALTER TABLE services AUTO_INCREMENT=1000;
ALTER TABLE records AUTO_INCREMENT=1000;
ALTER TABLE admin AUTO_INCREMENT=1000;

INSERT INTO services (skill, description) VALUES ('Electrician', 'A tradesman specializing in electrical wiring of buildings, transmission lines, stationary machines, and related equipment.');
INSERT INTO services (skill, description) VALUES ('Welder', 'Cuts, shapes and combines materials, mostly metals to make different parts');
INSERT INTO services (skill, description) VALUES ('Fitter', 'Puts together or installs machinery, engine parts, or other equipment.');
INSERT INTO services (skill, description) VALUES ('Carpenter', 'Cutting, shaping and installation of building materials during the construction of buildings, ships, timber bridges, concrete formwork, etc.');
INSERT INTO services (skill, description) VALUES ('Jeweler', 'Makes or repairs jewelery');
INSERT INTO services (skill, description) VALUES ('Leatherworker', 'Works primarily with leather, crafting leather goods');
INSERT INTO services (skill, description) VALUES ('Metalworker', 'Monitors, adjusts, and controls various basic or elaborate machines to cut, cast, or mold metals');
INSERT INTO services (skill, description) VALUES ('Painter', 'Smoothes and prepares surfaces for painting. Paints surfaces, using brushes, spray gun, or paint rollers.');
INSERT INTO services (skill, description) VALUES ('Potter', 'Creates pots, dishes, mugs, vases, and other types of artwork');
INSERT INTO services (skill, description) VALUES ('Sculptor', 'Designs and creates three dimensional(3D) forms or models as a way of artistic expression'); 
INSERT INTO services (skill, description) VALUES ('Weaver', 'Workes in textile production and operates, monitors and maintains highly technical computerised weaving looms to manufacture woven fabrics and materials.');
INSERT INTO services (skill, description) VALUES ('Plumber', 'Assembles, installs, maintains and pressure tests all pipes, fittings and fixtures of heating, water, drainage, sprinkler, and gas systems according to specifications and plumbing codes.');
INSERT INTO services (skill, description) VALUES ('Bricklayer/Brickmason', 'Lays bricks, pre-cuts stone and concrete blocks in mortar. Constructs, extends and repairs domestic and commercial buildings and other structures');
