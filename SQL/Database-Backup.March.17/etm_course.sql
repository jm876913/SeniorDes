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
-- Table structure for table `course`
--

DROP TABLE IF EXISTS `course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `course` (
  `tier` varchar(3) DEFAULT 'N/A',
  `longName` varchar(55) DEFAULT 'Course Name',
  `shortName` varchar(45) NOT NULL,
  `hours` float DEFAULT '0',
  PRIMARY KEY (`shortName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course`
--

LOCK TABLES `course` WRITE;
/*!40000 ALTER TABLE `course` DISABLE KEYS */;
INSERT INTO `course` VALUES ('N/A','Accounting for Business Activities','ACCT1005',3),('N/A','Accounting For Business','ACCT1010',3),('N/A','Seeing and Knowing the Visual Arts','ART1100',3),('N/A','Aesthetics Of Architecture and Design','ART1600',3),('N/A','Advanced Standing','AS',NULL),('N/A','Principles of Chemistry I','CHEM1210',4),('N/A','Concepts in Chemistry','CHEM1500',4),('N/A','Fundamentals of Chemistry I','CHEM1510',4),('N/A','Fundamentals of Public Speaking','COMS1030',3),('N/A','Introduction to Computer Engineering','EE1024',4),('N/A','Freshman Composition','ENG1510',3),('N/A','Junior English','ENG3090',3),('N/A','Junior English','ENG3090J',3),('N/A','Engineering Graphics Fundamentals','ET1100',2),('N/A','Career Orientation','ET1500',0.5),('N/A','Intro to Engineering Technology and Mgt.','ETM1000',0.5),('N/A','Enterprise Computer Methods','ETM1030',3),('N/A','Engineering Graphics Fundamentals','ETM1100',2),('N/A','Introduction to Manufacturing Operations','ETM1120',3),('N/A','Industrial Plastics','ETM2080',3),('N/A','Metal Casting','ETM2150',3),('N/A','Metal Fabricating and Castings','ETM2180',3),('N/A','Welding Technology','ETM2190',3),('N/A','Applied Mechatronics','ETM2210',3),('N/A','Production Metal Machining','ETM2510',3),('N/A','Computer Graphics','ETM3020',3),('N/A','Apps of Obj Oriented Programming','ETM3030',3),('N/A','Product Design','ETM3100',3),('N/A','Hydraulics & Pneumatics','ETM3200',3),('N/A','Database Applications & Analytics','ETM3310',3),('N/A','Electronics & Micro-controllers','ETM3320',3),('N/A','Plastics Molding Processes','ETM3470',3),('N/A','Plastics Forming and Composites Fabrication','ETM3480',3),('N/A','Plastics Tooling','ETM3490',3),('N/A','Production Tooling','ETM3510',3),('N/A','Automatic Identification and Data Capture','ETM3540',3),('N/A','Supervision and Leadership','ETM3620',3),('N/A','Quality Management Systems','ETM3630',3),('N/A','Enterprise Project Management','ETM3830',3),('N/A','Industrial Materials','ETM3900',3),('N/A','Senior Seminar','ETM4000',0.5),('N/A','Dimensional Analysis','ETM4010',3),('N/A','Enterprise Supply Chain Logistics','ETM4300',3),('N/A','Lean Enterprise Methods','ETM4320',3),('N/A','Radio Frequency Identification for the Supply Chain','ETM4330',3),('N/A','Automation, Robotics & Control Systems','ETM4350',3),('N/A','Operations MGT Capstone I','ETM4621',2),('N/A','Operations MGT Capstone II','ETM4622',3),('N/A','Safety Management','ETM4830',3),('N/A','Maintenance Systems','ETM4840',3),('N/A','Independent Study in Engineering Technology Management','ETM4930',3),('N/A','Introduction to Corporate Finance','FIN3000',3),('N/A','Intro to German','GER1110',4),('N/A','Western Civilization: Modernity from 1500','HIST1220',3),('N/A','Fundamentals of Statistics','ISE3040',3),('N/A','Pre-Calculus','MATH1300',4),('N/A','Survey of Calculus','MATH1350',4),('N/A','Calculus I','MATH2301',4),('N/A','Introduction to Statistics','MATH2500',4),('N/A','Mechanical Engineering - Gateway Course','ME1010',3),('N/A','Introduction to Management','MGT2000',3),('N/A','Business Information Systems Non-Majors','MIS2020',3),('N/A','Business Information Systems Nonmajor','MIS2021',3),('N/A','Marketing Principles','MKT2020',3),('N/A','Fundamentals of Philosophy','PHIL1010',3),('N/A','Introduction to Physics','PHYS2001',4),('N/A','General Physics','PHYS2051',5),('N/A','General Psychology','PSY1010',3),('N/A','Learning Community','UC1900',1);
/*!40000 ALTER TABLE `course` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-03-17 16:19:31
