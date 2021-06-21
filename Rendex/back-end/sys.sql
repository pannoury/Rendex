CREATE TABLE accounts (
    account_id INT PRIMARY KEY,
    role VARCHAR(15),
);
CREATE TABLE individuals (
    personalnumber INT(12),
    firstname VARCHAR(30),
    lastname VARCHAR(30),
);
CREATE TABLE organisation (
    org_name VARCHAR(50),
    org_number INT(10),
    adress VARCHAR(50),
    street_number INT,
    zip_code INT,
    region VARCHAR(20),
    city VARCHAR(20),
);
