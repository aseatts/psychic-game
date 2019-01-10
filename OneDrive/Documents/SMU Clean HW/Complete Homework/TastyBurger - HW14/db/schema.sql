-- Create the burgers_db database --
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create a burgers table with the required fields --
CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	consumed BOOLEAN DEFAULT false,
  	ts TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  	dt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  	PRIMARY KEY(id)
);
-- Creating seed data for the burgers_db database --
INSERT INTO burgers (burger_name, consumed) VALUES ('The Big Kahuna Burger', false);
INSERT INTO burgers (burger_name, consumed) VALUES ('Tasty Foot Rub, Ahi Tuna Burger', false);
INSERT INTO burgers (burger_name, consumed) VALUES ('Double Royale Cheeseburger', false);
INSERT INTO burgers (burger_name, consumed) VALUES (' Foot Rub', false);
INSERT INTO burgers (burger_name, consumed) VALUES ('SAY WHAT AGAIN! Watercres Harrisa Applesauce Tomato ', false);
INSERT INTO burgers (burger_name, consumed) VALUES ('BMF Bacon Mayo and Freedom', false);
