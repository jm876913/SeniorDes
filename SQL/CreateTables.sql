CREATE SCHEMA `etm` ;

CREATE TABLE `etm`.`student` (
    `PID` VARCHAR(10) NOT NULL,
    `fname` VARCHAR(45) NULL,
    `lname` VARCHAR(45) NULL,
    PRIMARY KEY (`PID`)
);
CREATE TABLE `etm`.`catalog` (
    `year` VARCHAR(7),
    PRIMARY KEY (`year`)
);
CREATE TABLE `etm`.`college` (
    `name` VARCHAR(45) NOT NULL,
    PRIMARY KEY (`name`)
);
CREATE TABLE `etm`.`course` (
    `tier` VARCHAR(2) NULL,
    `longName` VARCHAR(55) NULL,
    `shortName` VARCHAR(45) NOT NULL,
    `hours` FLOAT(2) NULL,
    PRIMARY KEY (`shortName`)
);
CREATE TABLE `etm`.`advisor` (
    `ID` VARCHAR(10) NOT NULL,
    `fname` VARCHAR(45) NULL,
    `lname` VARCHAR(45) NULL,
    PRIMARY KEY (`ID`)
);
CREATE TABLE `etm`.`degree` (
    `degreeCode` VARCHAR(8) NOT NULL,
    `type` VARCHAR(45) NULL,
    `name` VARCHAR(45) NOT NULL,
    PRIMARY KEY (`degreeCode`)
);
CREATE TABLE `etm`.`advises` (
    `advisorid` VARCHAR(10) NOT NULL,
    `pid` VARCHAR(10) NOT NULL,
    PRIMARY KEY (`advisorid` , `pid`),
    FOREIGN KEY (`advisorid`)
        REFERENCES `etm`.`advisor` (`ID`),
    FOREIGN KEY (`pid`)
        REFERENCES `etm`.`student` (`PID`)
);
CREATE TABLE `etm`.`belongs_to` (
    `degreeCode` VARCHAR(8) NOT NULL,
    `CatalogID` VARCHAR(7),
    PRIMARY KEY (`degreeCode` , `CatalogID`),
    FOREIGN KEY (`degreeCode`)
        REFERENCES `etm`.`degree` (`degreeCode`),
    FOREIGN KEY (`CatalogID`)
        REFERENCES `etm`.`catalog` (`year`)
);
CREATE TABLE `etm`.`enrolled_in` (
    `PID` VARCHAR(10) NOT NULL,
    `courseName` VARCHAR(45) NOT NULL,
    `grade` VARCHAR(4) NULL,
    `semester` VARCHAR(25),
    PRIMARY KEY (`PID` , `courseName`),
    FOREIGN KEY (`PID`)
        REFERENCES `etm`.`student` (`PID`),
    FOREIGN KEY (`courseName`)
        REFERENCES `etm`.`course` (`shortName`)
);
CREATE TABLE `etm`.`working_towards` (
    `PID` VARCHAR(10) NOT NULL,
    `degreeCode` VARCHAR(8) NOT NULL,
    PRIMARY KEY (`PID` , `degreeCode`),
    FOREIGN KEY (`PID`)
        REFERENCES `etm`.`student` (`PID`),
    FOREIGN KEY (`degreeCode`)
        REFERENCES `etm`.`degree` (`degreeCode`)
);
CREATE TABLE `etm`.`offered_in` (
    `catalogYear` VARCHAR(7),
    `courseName` VARCHAR(45) NOT NULL,
    PRIMARY KEY (`catalogYear` , `courseName`),
    FOREIGN KEY (`catalogYear`)
        REFERENCES `etm`.`catalog` (`year`),
    FOREIGN KEY (`courseName`)
        REFERENCES `etm`.`course` (`shortName`)
);
CREATE TABLE `etm`.`degreeREQS` (
    `degreeCode` VARCHAR(8) NOT NULL,
    `courseName` VARCHAR(45) NOT NULL,
    PRIMARY KEY (`degreeCode` , `courseName`),
    FOREIGN KEY (`degreeCode`)
        REFERENCES `etm`.`degree` (`degreeCode`),
    FOREIGN KEY (`courseName`)
        REFERENCES `etm`.`course` (`shortName`)
);
CREATE TABLE `etm`.`courseREQS` (
    `courseName` VARCHAR(45) NOT NULL,
    `reqCourseName` VARCHAR(45) NOT NULL,
    `type` VARCHAR(45),
    PRIMARY KEY (`courseName` , `reqCourseName`),
    FOREIGN KEY (`courseName`)
        REFERENCES `etm`.`course` (`shortName`),
    FOREIGN KEY (`reqCourseName`)
        REFERENCES `etm`.`course` (`shortName`)
);
CREATE TABLE `etm`.`studentCatalog` (
    `PID` VARCHAR(10) NOT NULL,
    `year` VARCHAR(7),
    PRIMARY KEY (`PID` , `year`),
    FOREIGN KEY (`PID`)
        REFERENCES `etm`.`student` (`PID`),
    FOREIGN KEY (`year`)
        REFERENCES `etm`.`catalog` (`year`)
);

CREATE TABLE `etm`.`accounts` (
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `type` varchar(45) NOT NULL,
  PRIMARY KEY (`email`)
);