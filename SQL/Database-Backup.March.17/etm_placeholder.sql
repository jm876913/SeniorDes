-- MySQL dump 10.13  Distrib 8.0.15, for Win64 (x86_64)
--
-- Host: ou-advising.ctabtq2unrra.us-east-2.rds.amazonaws.com    Database: etm
-- ------------------------------------------------------
-- Server version	8.0.11

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `placeholder`
--

DROP TABLE IF EXISTS `placeholder`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `placeholder` (
  `courseName` varchar(45) NOT NULL DEFAULT 'Course Name',
  `courseCode` varchar(45) NOT NULL,
  `courseHours` varchar(10) NOT NULL DEFAULT '0',
  `courseTier` varchar(45) NOT NULL DEFAULT 'N/A',
  `heading` varchar(45) NOT NULL DEFAULT 'Free Electives',
  `position` int(11) NOT NULL DEFAULT '0',
  `catalog` varchar(7) NOT NULL,
  PRIMARY KEY (`courseCode`,`catalog`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `placeholder`
--

LOCK TABLES `placeholder` WRITE;
/*!40000 ALTER TABLE `placeholder` DISABLE KEYS */;
INSERT INTO `placeholder` VALUES ('','','0','N/A','ETM Courses',0,''),('Accounting for Business Activities','ACCT1005/1010','3','N/A','Business Courses',1,'2015-16'),('Chemistry','CHEM1210/1500/1510','4','N/A','General Courses',11,'2015-16'),('Public Speaking','COMS 1030','3','N/A','General Courses',4,'2015-16'),('Freshman English','ENG 1510','3','N/A','General Courses',2,'2015-16'),('Junior English','ENG 3090J/ETM 3700J/ET3800J','3','N/A','General Courses',3,'2015-16'),('Career Orientation','ET 1500','0.5','N/A','General Courses',1,'2015-16'),('Intro to ETM','ETM 1000','0.5','N/A','ETM Courses',1,'2015-16'),('Enterprise Computer Methods','ETM 1030','3','N/A','ETM Courses',3,'2015-16'),('Engineering Graphics Fundamentals','ETM 1100','2','N/A','ETM Courses',2,'2015-16'),('Intro to Manufacturing Operations','ETM 1120','3','N/A','ETM Courses',4,'2015-16'),('Industrial Plastics','ETM 2018','3','N/A','ETM Courses',5,'2015-16'),('Metal Fabricating & Casting','ETM 2180','3','N/A','ETM Courses',6,'2015-16'),('Applied Mechatronics','ETM 2210','3','N/A','ETM Courses',7,'2015-16'),('Production Metal Machining','ETM 2510','3','N/A','ETM Courses',8,'2015-16'),('Apps Of Objet Oriented Programming','ETM 3030','3','N/A','ETM Courses',9,'2015-16'),('Production Design','ETM 3100','3','N/A','ETM Courses',10,'2015-16'),('Hydraulics & Pneumatics','ETM 3200','3','N/A','ETM Courses',11,'2015-16'),('Database Applications & Analytics','ETM 3310','3','N/A','ETM Courses',12,'2015-16'),('Electronics & Micro-Controllers','ETM 3320','3','N/A','ETM Courses',13,'2015-16'),('Production Tooling','ETM 3510','3','N/A','ETM Courses',14,'2015-16'),('Supervision & Leadership','ETM 3620','3','N/A','Business Courses',2,'2015-16'),('Quality Management Systems','ETM 3630','3','N/A','ETM Courses',15,'2015-16'),('Enterprise Project Management','ETM 3830','3','N/A','ETM Courses',16,'2015-16'),('Senior Seminar','ETM 4000','0.5','N/A','ETM Courses',17,'2015-16'),('Lean Enterprise Methods','ETM 4320','3','N/A','ETM Courses',18,'2015-16'),('Automation, Robots, & Control Systems','ETM 4350','3','N/A','ETM Courses',19,'2015-16'),('CAPSTONE I Operations MGT','ETM 4621','2','N/A','ETM Courses',20,'2015-16'),('CAPSTONE II Operations MGT','ETM 4622','3','N/A','ETM Courses',21,'2015-16'),('Financial Management','FIN 3000','3','N/A','Business Courses',3,'2015-16'),('Statistics','ISE3040/MATH2500','3/4','N/A','General Courses',10,'2015-16'),('Pre-Calc/Calc','MATH1300/1350/2301','4','N/A','General Courses',9,'2015-16'),('Intro to Management','MGT 2000','3','N/A','Business Courses',4,'2015-16'),('Business INformation Systems Non-Majors','MIS 2021','3','N/A','Business Courses',5,'2015-16'),('Marketing Principles','MKT 2020','3','N/A','Business Courses',6,'2015-16'),('Physics','PHYS2001/2051','4/5','N/A','General Courses',12,'2015-16'),('General Psychology','PSY 1010','5','N/A','General Courses',5,'2015-16'),('Course Name','T2 AS','0','N/A','General Courses',8,'2015-16'),('Course Name','T2 CP','0','N/A','General Courses',6,'2015-16'),('Course Name','T2 FA','0','N/A','General Courses',7,'2015-16');
/*!40000 ALTER TABLE `placeholder` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-03-17 16:19:39
