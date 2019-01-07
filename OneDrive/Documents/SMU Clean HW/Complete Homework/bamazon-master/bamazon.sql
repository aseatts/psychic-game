 Create Database bamazon_db;

use bamazon_db;

CREATE TABLE Products (
ItemID int AUTO_INCREMENT NOT NULL,
ProdName varchar(50) NOT NULL,
Dept varchar(50) NOT NULL,
Price DECIMAL(10,2) NOT NULL,
Qty int NOT NULL,
primary key (ItemID)
);

INSERT INTO Products (ItemID, ProdName, Dept, Price, Qty)
VALUES 
(1939, 'Tortillas', 'Baked', 3.99, 70), 
(1954, 'Lettuce', 'Produce', 72919.54, 12),
(1998, 'Carne Asada', 'Deli', 8.99, 1),
(1997, 'Tomatillo', 'Produce', 1.99, 1),
(1983, 'Cilantro y Limon', 'Produce', 0.99, 99);
