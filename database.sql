-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data
-- Database name group-grocery-list

CREATE TABLE groceries (
    id SERIAL PRIMARY KEY,
    item VARCHAR(80) NOT NULL,
    quantity FLOAT NOT NULL,
    unit VARCHAR(80),
    purchased BOOLEAN DEFAULT FALSE
);

INSERT INTO groceries (item, quantity, unit)
VALUES   ('Apples', 5, 'lbs'),
        ('Bread', 1, 'loaf'),
        ('Milk', 1, 'gallon'),
        ('Sliced Almonds', 2, 'cups'),
        ('Bananas', 1, 'bunch');


