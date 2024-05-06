
CREATE TABLE Users(
    UserID INT PRIMARY KEY AUTO_INCREMENT,
    Email varchar(255) NOT NULL UNIQUE, 
    FullName varchar(100)
)ENGINE=InnoDB;
CREATE TABLE Cart(
    CartID INT PRIMARY KEY AUTO_INCREMENT,
    UserID INT,
    GuitarID INT,
    Quantity INT,

)ENGINE=InnoDB;
CREATE TABLE Guitars(
    GuitarID INT PRIMARY KEY AUTO_INCREMENT,
    Brand varchar(50),
    'Type' varchar(50),
    Model varchar(100),
    Price decimal (10,2),
    Quantity INT
)ENGINE=InnoDB;