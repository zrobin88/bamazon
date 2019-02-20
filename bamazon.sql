DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price INT default 0,
  quantity INT default 0,
  PRIMARY KEY (id)
);


INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("Gibson Les Paul", "Musical Instruments", 1999, 50);
INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("Saumsung 4k TV", "Electronics", 2599, 99);
INSERT INTO products (product_name, department_name, price, quantity)
VALUES  ("Xbox One X", "Electronics", 300, 99);
INSERT INTO products (product_name, department_name, price, quantity)
VALUES ("Under Armour Training Shoes", "Men's Apparel", 75, 80);
INSERT INTO products (product_name, department_name, price, quantity)
 VALUES      ("Optimum Nutrition Gold Standard Protein", "Vitamins & Supplements", 35, 90);
INSERT INTO products (product_name, department_name, price, quantity)
  VALUES     ("Sony PS4", "Electronics", 399, 59);
INSERT INTO products (product_name, department_name, price, quantity)
   VALUES    ("Jackson Soloist", "Musical Instruments", 999, 30);
INSERT INTO products (product_name, department_name, price, quantity)
   VALUES    ("Gibson Flying V", "Musical Instruments", 1999, 20);
 
INSERT INTO products (product_name, department_name, price, quantity)
  VALUES     ("Gibson Explorer", "Musical Instruments", 1350, 12);
INSERT INTO products (product_name, department_name, price, quantity)
   VALUES    ("Cellucor C4 Pre Workout", "Vitamins & Supplements", 19, 89);
INSERT INTO products (product_name, department_name, price, quantity)
   VALUES    ("Men's Athletic Fit Jeans", "Men's Apparel", 39, 67);
INSERT INTO products (product_name, department_name, price, quantity)
    VALUES   ("Xbox One Wireless Controller", "Electronics", 60, 92);
INSERT INTO products (product_name, department_name, price, quantity)
    VALUES   ("Apple MacBook Pro 15 Inch", "Computers", 2999, 45);
INSERT INTO products (product_name, department_name, price, quantity)
    VALUES   ("Apple Macbook Air", "Computers", 1000, 83);
INSERT INTO products (product_name, department_name, price, quantity)
       ("Apple iPhone X", "Electronics", 599, 77);