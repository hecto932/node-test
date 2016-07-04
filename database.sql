
CREATE TABLE customers(
   id SERIAL NOT NULL PRIMARY KEY,   
   name VARCHAR(65),
   lastname VARCHAR(35),
   motherlastname VARCHAR(30),
   email VARCHAR(95),
   localphone VARCHAR(25),
   mobilephone VARCHAR(25),
   birthday DATE
);