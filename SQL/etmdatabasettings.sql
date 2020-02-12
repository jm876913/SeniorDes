CREATE DATABASE  IF NOT EXISTS `etm` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */;
USE `etm`;
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
-- Table structure for table `accounts`
--

DROP TABLE IF EXISTS `accounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `accounts` (
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `type` varchar(45) NOT NULL,
  `accfname` varchar(45) DEFAULT NULL,
  `acclname` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accounts`
--

LOCK TABLES `accounts` WRITE;
/*!40000 ALTER TABLE `accounts` DISABLE KEYS */;
INSERT INTO `accounts` VALUES ('Thedopple','$2b$12$mLzcviI6Ku.nuq.5FwjpkORHryQE4U5k/Arts07YYM4gz2KhvyYgy','ab543512@ohio.edu','atype','Abraham','Blain'),('admin','$2b$12$ecUITMzgNXsLEvcr5gOLtOfGBJOyuJJIzDGDT2L6qXuQtcTgV6ge6','admin@ohio.edu','admin','Admin','Admin'),('Ahong','$2b$12$PlEF7lhDBc5V5lTEhCbfyufK6e/30fvJjTCZEbu0E0E8MXwRehQie','ah455013@ohio.edu','atype','Alexa','Hong'),('aorsburn','$2b$12$YFOiYNS1j6Wt9ZLB0hF/pusXVnPG3siD9q7nWroAsJC/peyq9nYaO','Ao094014@ohio.edu','stype','Andrew','Orsburn'),('ao094014','$2b$12$PBrR7tXeh7rio0tR4Kx1yeHlI.aln3MqbsJuwY9ICgBufahF6kpKi','arorsburn@gmail.com','atype','Andrew','Orsburn'),('bb520521','$2b$12$PeElXTw6.6fe/M7KGTWPAOVvhIJTsgLXPo8hFg72ruY8DWphrXH1i','bohongbobo@gmail.com','atype','Bohong','Li'),('cohenour','$2b$12$/8thY/G6qbSo/XCq4oIkmOS9xezsNsx1IifsbQZVv3NALRwGi5UJy','cohenour@ohio.edu','atype','Curtis','Cohenour'),('Blahblahblab','$2b$12$FKTViFGFJqNdYPvV.QpGBuuJF3/B8.P1CXpynAMxExvLQ9uFR1LN.','dw640914@ohio.edu','atype','Danielle','Wisemiller'),('Username','$2b$12$9e4ZD932cNHtKl2UREVmHuH2RwgGcM93EAYCfLBcFz258aamXeb5O','email2@email.com','stype','Email2','Email'),('faccount','$2b$12$OT85GuzMx9HV/7KEvy2nReMUHTxWRrPAHT4aaI7zBzNGLrMEnVEHi','fakeaccount@ohio.edu','atype','Fake','Account'),('gstewart','$2b$12$QhlLQ6VBtb8Gpbwq0t5hTenxI8R1sugvOlMz8RGSvXQtOh60.puqm','gstewart@ohio.edu','atype','James','Stewart'),('jdenver','$2b$12$ufg2UfvFwq5PT2E63vslr.Lv1M/H5SycvFPLLqpCZMiTYyxoE4xMi','jdenver@ohio.edu','stype','John','Denver'),('jm876913','$2b$12$.kvcJo3KxlxV65sUubkzje8gKwLIfaLR2jW9gb1LidKhATTMEeYn.','jm876913@ohio.edu','atype','Jake','Mulligan'),('jordan','$2b$12$5j.FGUP2L0J2/LGszu156O2t9FOPhH/nyrnaGfdci8bIyoiTCfhsa','jw363912@ohio.edu','atype','Jordan','Ward'),('shraim','$2b$12$ZWdFmzDRtYNtCuRvlZr.8Oxe7QSpRB9d5BesR71gStmG1pCoYTlXC','shraim@ohio.edu','atype','Mustafa','Shraim'),('shulerj','$2b$12$f7LGBdbQ88kCl5RZ96QUiuN22Gmn4ihA7XnGG4kHWWxPPrLxLm/le','shulerj@ohio.edu','atype','Jessica','Shuler'),('Alan','$2b$12$oXZid34LJ5r1SIEjuHLFB.Cb2cwyHsAsy7lXNheLdXuLSJV2PqNe6','sy600215@ohio.edu','atype','Shipeng','Yang'),('yf836112','$2b$12$OYz6DXJCnis7xjSNZZUQGeTboy/TmgT2FSoegpdK6IO59bOWLmkuu','yf836112@ohio.edu','atype','Yunyi','Feng');
/*!40000 ALTER TABLE `accounts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `advises`
--

DROP TABLE IF EXISTS `advises`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `advises` (
  `advisorid` varchar(20) NOT NULL,
  `pid` varchar(10) NOT NULL,
  `lastmeeting` datetime DEFAULT NULL,
  PRIMARY KEY (`advisorid`,`pid`),
  UNIQUE KEY `pid_UNIQUE` (`pid`),
  CONSTRAINT `advises_ibfk_1` FOREIGN KEY (`advisorid`) REFERENCES `advisor` (`ID`),
  CONSTRAINT `advises_ibfk_2` FOREIGN KEY (`pid`) REFERENCES `student` (`PID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `advises`
--

LOCK TABLES `advises` WRITE;
/*!40000 ALTER TABLE `advises` DISABLE KEYS */;
INSERT INTO `advises` VALUES ('chelberg@ohio.edu','P100244529',NULL),('cohenour@ohio.edu','P100270523',NULL),('cohenour@ohio.edu','P100381943',NULL),('gstewart@ohio.edu','P100159690',NULL),('gstewart@ohio.edu','P100254081','0000-00-00 00:00:00'),('gstewart@ohio.edu','P100297843','0000-00-00 00:00:00'),('gstewart@ohio.edu','P100456789',NULL),('gstewart@ohio.edu','P100678910','0000-00-00 00:00:00'),('gstewart@ohio.edu','P100678933','0000-00-00 00:00:00'),('gstewart@ohio.edu','P123456789','0000-00-00 00:00:00'),('shraim@ohio.edu','P100270522',NULL);
/*!40000 ALTER TABLE `advises` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `advisor`
--

DROP TABLE IF EXISTS `advisor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `advisor` (
  `ID` varchar(20) NOT NULL,
  `afname` varchar(45) DEFAULT NULL,
  `alname` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `advisor`
--

LOCK TABLES `advisor` WRITE;
/*!40000 ALTER TABLE `advisor` DISABLE KEYS */;
INSERT INTO `advisor` VALUES ('ab543512@ohio.edu','Abraham','Blain'),('ah455013@ohio.edu','Alexa','Hong'),('atest@ohio.edu','Andrew','Orsburn'),('atest2@ohio.edu','Andrew','Orsburn'),('atest3@ohio.edu','Bohong','Li'),('atest4@ohio.edu','Bohong','Li'),('atest5@ohio.edu','Email2','Email'),('chelberg@ohio.edu','David','Chelberg'),('cohenour@ohio.edu','Curtis','Cohenour'),('dw640914@ohio.edu','Danielle','Wisemiller'),('fake@ohio.edu','fake','fake'),('fake2@ohio.edu','Fkae','KFkla'),('fakeaccount@ohio.edu','Fake','Account'),('gstewart@ohio.edu','James','Stewart'),('heytherejoe@ohio.edu','lsdkjf','sdlkfj'),('hf994214@o','Holly','Fox'),('jm876913@ohio.edu','Jake','Mulligan'),('jw363912@ohio.edu','Jordan','Ward'),('k@ohio.edu','k','g'),('kdvjl@oiho.edu','lskdjf','sldkjf'),('kg551915@ohio.edu','Kevin','Goden'),('lksjdf@oiho.edu','lskdjf','lsdfj'),('mrbutts@ohio.edu','mr','butts'),('shraim@ohio.edu','Mustafa','Shraim'),('shulerj@ohio.edu','Jessica','Schuler'),('sldkjf@ohio.edu','klsjd','sldkjf'),('sy600215@ohio.edu','Shipeng','Yang'),('testaccount@ohio.edu','Test','Me'),('yf836112@ohio.edu','Yunyi','Feng');
/*!40000 ALTER TABLE `advisor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `belongs_to`
--

DROP TABLE IF EXISTS `belongs_to`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `belongs_to` (
  `degreeCode` varchar(8) NOT NULL,
  `CatalogID` varchar(7) NOT NULL,
  PRIMARY KEY (`degreeCode`,`CatalogID`),
  KEY `CatalogID` (`CatalogID`),
  CONSTRAINT `belongs_to_ibfk_1` FOREIGN KEY (`degreeCode`) REFERENCES `degree` (`degreecode`),
  CONSTRAINT `belongs_to_ibfk_2` FOREIGN KEY (`CatalogID`) REFERENCES `catalog` (`year`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `belongs_to`
--

LOCK TABLES `belongs_to` WRITE;
/*!40000 ALTER TABLE `belongs_to` DISABLE KEYS */;
INSERT INTO `belongs_to` VALUES ('BS7256','2015-16'),('LSS','2015-16'),('ORBSAD','2015-16'),('BS7256','2016-17'),('ORBSAD','2016-17'),('PMC','2016-17'),('BS7256','2017-18'),('ORBSAD','2017-18'),('BS7256','2018-19'),('ORBSAD','2018-19');
/*!40000 ALTER TABLE `belongs_to` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `catalog`
--

DROP TABLE IF EXISTS `catalog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `catalog` (
  `year` varchar(7) NOT NULL,
  PRIMARY KEY (`year`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `catalog`
--

LOCK TABLES `catalog` WRITE;
/*!40000 ALTER TABLE `catalog` DISABLE KEYS */;
INSERT INTO `catalog` VALUES ('2015-16'),('2016-17'),('2017-18'),('2018-19');
/*!40000 ALTER TABLE `catalog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `college`
--

DROP TABLE IF EXISTS `college`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `college` (
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `college`
--

LOCK TABLES `college` WRITE;
/*!40000 ALTER TABLE `college` DISABLE KEYS */;
/*!40000 ALTER TABLE `college` ENABLE KEYS */;
UNLOCK TABLES;

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
INSERT INTO `course` VALUES ('N/A','Accounting for Business Activities','ACCT1005',3),('N/A','Accounting For Business','ACCT1010',3),('N/A','Seeing and Knowing the Visual Arts','ART1100',3),('N/A','Aesthetics Of Architecture and Design','ART1600',3),('N/A','Advanced Standing','AS',NULL),('N/A','Course Name','BIOS1000',3),('N/A','Course Name','BIOS1700',3),('N/A','Course Name','BIOS1705',1),('N/A','Course Name','BTM2000',3),('N/A','Course Name','CE2160',3),('N/A','Principles of Chemistry I','CHEM1210',4),('N/A','Concepts in Chemistry','CHEM1500',4),('N/A','Fundamentals of Chemistry I','CHEM1510',4),('N/A','Course Name','CHEM1520',4),('N/A','Fundamentals of Public Speaking','COMS1030',3),('N/A','Interpersonal Conflict Management','COMS3060',0),('N/A','Course Name','CS2400',4),('N/A','Course Name','CS2401',4),('N/A','Course Name','CS2650',2),('N/A','Course Name','CS3000',4),('N/A','Course Name','CS3200',3),('N/A','Course Name','CS3560',3),('N/A','Course Name','CS3610',4),('N/A','Course Name','CS4000',3),('N/A','Course Name','CS4040',3),('N/A','Course Name','CS4560',3),('N/A','Course Name','CS4620',3),('N/A','Course Name','EDCT2030',3),('N/A','Course Name','EDTE1500',2),('N/A','Introduction to Computer Engineering','EE1024',4),('N/A','Course Name','EE3613',3),('N/A','Course Name','EE3713',3),('N/A','Course Name','EE3954',4),('N/A','Freshman Composition','ENG1510',3),('N/A','Junior English','ENG3090',3),('N/A','Junior English','ENG3090J',3),('N/A','Course Name','ENG3210',3),('N/A','Course Name','ENG3510',3),('N/A','Course Name','ENG3610',3),('N/A','Career Orientation','ET1500',0.5),('N/A','Intro to Engineering Technology and Mgt.','ETM1000',0.5),('N/A','Enterprise Computer Methods','ETM1030',3),('N/A','Engineering Graphics Fundamentals','ETM1100',2),('N/A','Introduction to Manufacturing Operations','ETM1120',3),('N/A','Industrial Plastics','ETM2080',3),('N/A','Metal Casting','ETM2150',3),('N/A','Metal Fabricating and Castings','ETM2180',3),('N/A','Welding Technology','ETM2190',3),('N/A','Applied Mechatronics','ETM2210',3),('N/A','Production Metal Machining','ETM2510',3),('N/A','Computer Graphics','ETM3020',3),('N/A','Apps of Obj Oriented Programming','ETM3030',3),('N/A','Product Design','ETM3100',3),('N/A','Hydraulics & Pneumatics','ETM3200',3),('N/A','Database Applications & Analytics','ETM3310',3),('N/A','Electronics & Micro-controllers','ETM3320',3),('N/A','Plastics Molding Processes','ETM3470',3),('N/A','Plastics Forming and Composites Fabrication','ETM3480',3),('N/A','Plastics Tooling','ETM3490',3),('N/A','Production Tooling','ETM3510',3),('N/A','Automatic Identification and Data Capture','ETM3540',3),('N/A','Supervision and Leadership','ETM3620',3),('N/A','Supervision and Leadership in Technical Organizations','ETM3625',0),('N/A','Quality Management Systems','ETM3630',3),('N/A','Professional and Technical Writing','ETM3700J',0),('N/A','Project Management','ETM3820',3),('N/A','Enterprise Project Management','ETM3830',3),('N/A','Industrial Materials','ETM3900',3),('N/A','Senior Seminar','ETM4000',0.5),('N/A','Dimensional Analysis','ETM4010',3),('N/A','Enterprise Supply Chain Logistics','ETM4300',3),('N/A','Lean Enterprise Methods','ETM4320',3),('N/A','Radio Frequency Identification for the Supply Chain','ETM4330',3),('N/A','Automation Robotics & Control Systems','ETM4350',3),('N/A','Purchasing and Supply Chain Management','ETM4420',0),('N/A','Operations MGT Capstone I','ETM4621',2),('N/A','Operations MGT Capstone II','ETM4622',3),('N/A','Safety Management','ETM4830',3),('N/A','Maintenance Systems','ETM4840',3),('N/A','Independent Study in Engineering Technology Management','ETM4930',3),('N/A','Introduction to Corporate Finance','FIN3000',3),('N/A','Course Name','GEOL1010',4),('N/A','Intro to German','GER1110',4),('N/A','Western Civilization: Modernity from 1500','HIST1220',3),('N/A','Course Name','HIST1330',3),('N/A','Course Name','ISE1100',3),('N/A','Fundamentals of Statistics','ISE3040',3),('N/A','Course Name','ISE3200',3),('N/A','Course Name','ISE4160',3),('N/A','Course Name','ISE4170',3),('N/A','Course Name','MATH1101',3),('N/A','Pre-Calculus','MATH1300',4),('N/A','Survey of Calculus','MATH1350',4),('N/A','Calculus I','MATH2301',4),('N/A','Course Name','MATH2302',4),('N/A','Introduction to Statistics','MATH2500',4),('N/A','Course Name','MATH3050',0),('N/A','Course Name','MATH3200',3),('N/A','Mechanical Engineering - Gateway Course','ME1010',3),('N/A','Introduction to Management','MGT2000',3),('N/A','Course Name','MGT2100',3),('N/A','Course Name','MGT3000',3),('N/A','Course Name','MGT3200',3),('N/A','Course Name','MGT3500',3),('N/A','Course Name','MIS2010',3),('N/A','Course Name','MIS2011',3),('N/A','Business Information Systems Non-Majors','MIS2020',3),('N/A','Business Information Systems Nonmajor','MIS2021',3),('N/A','Marketing Principles','MKT2020',3),('N/A','Course Name','MUS1200',2),('N/A','Course Name','MUS1240',3),('N/A','Course Name','MUS2240',3),('N/A','Fundamentals of Philosophy','PHIL1010',3),('N/A','Introduction to Physics','PHYS2001',4),('N/A','General Physics','PHYS2051',5),('N/A','Business Communication','PRCM3250J',0),('N/A','General Psychology','PSY1010',3),('N/A','Course Name','QBA2010',3),('N/A','Managing Processes and Supply Chains','SAM3010',0),('N/A','Course Name','SAM3050',3),('N/A','Strategic Managerial Communication','SAM3250J',0),('N/A','Course Name','THAR1130',3),('N/A','Learning Community','UC1900',1);
/*!40000 ALTER TABLE `course` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `courseREQS`
--

DROP TABLE IF EXISTS `courseREQS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `courseREQS` (
  `courseName` varchar(45) NOT NULL,
  `reqCourseName` varchar(45) NOT NULL DEFAULT 'N/A',
  `type` varchar(45) DEFAULT 'pre',
  PRIMARY KEY (`courseName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `courseREQS`
--

LOCK TABLES `courseREQS` WRITE;
/*!40000 ALTER TABLE `courseREQS` DISABLE KEYS */;
INSERT INTO `courseREQS` VALUES ('ETM2080','AS, CHEM1210','pre'),('ETM2180','AS, CEM1210','pre'),('ETM2210','AS, PHYS2001','pre'),('ETM2510','AS','pre'),('ETM3030','AS, ETM1030','pre'),('ETM3100','AS, ETM2080','pre'),('ETM3200','AS, ETM2210','pre'),('ETM3310','AS, ETM3030','pre'),('ETM3320','AS, ETM3030, PHYS2001','pre'),('ETM3510','AS, ETM2510, ETM3100','pre'),('ETM3620','AS, COMS1030, MGT2000','pre'),('ETM3630','AS, ENG3090J, ETM2080, ETM2180, MATH2500','pre'),('ETM3830','ETM1030, MGT2000, AS','pre'),('ETM4320','AS, ETM1030, MGT2000','pre'),('ETM4350','AS, ETM3030, ETM3200, ETM3320','pre'),('ETM4621','AS, ETM2210, ETM2510, ETM3030, ETM3100','pre'),('ETM4622','AS, ETM3510, ETM3630, ETM4621','pre'),('FAK1201','Hello Sir','pre'),('FIN3000','ACCT1010','pre');
/*!40000 ALTER TABLE `courseREQS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `degree`
--

DROP TABLE IF EXISTS `degree`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `degree` (
  `degreeCode` varchar(8) NOT NULL,
  `type` varchar(45) DEFAULT NULL,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`degreeCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `degree`
--

LOCK TABLES `degree` WRITE;
/*!40000 ALTER TABLE `degree` DISABLE KEYS */;
INSERT INTO `degree` VALUES ('BS7256','Bachelor of Science','Engineering Technology and Management'),('BS7260','Bachelor of Science','missing degree name'),('LSS','Ceritficate','Lean Sigma Six'),('ORBSAD','Minor','Business Minor'),('PMC','Certificate','Project Management Certificate');
/*!40000 ALTER TABLE `degree` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `degreeREQS`
--

DROP TABLE IF EXISTS `degreeREQS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `degreeREQS` (
  `degreeCode` varchar(8) NOT NULL,
  `courseName` varchar(45) NOT NULL,
  PRIMARY KEY (`degreeCode`,`courseName`),
  CONSTRAINT `degreeREQS_ibfk_1` FOREIGN KEY (`degreeCode`) REFERENCES `degree` (`degreecode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `degreeREQS`
--

LOCK TABLES `degreeREQS` WRITE;
/*!40000 ALTER TABLE `degreeREQS` DISABLE KEYS */;
INSERT INTO `degreeREQS` VALUES ('BS7256','ACCT1005'),('BS7256','CHEM1210'),('BS7256','CHEM1500'),('BS7256','CHEM1510'),('BS7256','COMS1030'),('BS7256','ETM1000'),('BS7256','ETM1030'),('BS7256','ETM1100'),('BS7256','ETM1120'),('BS7256','ETM2080'),('BS7256','ETM2150'),('BS7256','ETM2180'),('BS7256','ETM2190'),('BS7256','ETM2210'),('BS7256','ETM2510'),('BS7256','ETM3020'),('BS7256','ETM3030'),('BS7256','ETM3100'),('BS7256','ETM3200'),('BS7256','ETM3310'),('BS7256','ETM3320'),('BS7256','ETM3470'),('BS7256','ETM3480'),('BS7256','ETM3490'),('BS7256','ETM3510'),('BS7256','ETM3540'),('BS7256','ETM3620'),('BS7256','ETM3630'),('BS7256','ETM3830'),('BS7256','ETM3900'),('BS7256','ETM4000'),('BS7256','ETM4010'),('BS7256','ETM4300'),('BS7256','ETM4320'),('BS7256','ETM4330'),('BS7256','ETM4350'),('BS7256','ETM4621'),('BS7256','ETM4622'),('BS7256','ETM4830'),('BS7256','ETM4840'),('BS7256','ETM4930'),('BS7256','FIN3000'),('BS7256','ISE3040'),('BS7256','MATH1300'),('BS7256','MATH1350'),('BS7256','MATH2301'),('BS7256','MATH2500'),('BS7256','MGT2000'),('BS7256','MIS2021'),('BS7256','MKT2020'),('BS7256','PHYS2001'),('BS7256','PHYS2051'),('BS7256','PSY1010');
/*!40000 ALTER TABLE `degreeREQS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `enrolled_in`
--

DROP TABLE IF EXISTS `enrolled_in`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `enrolled_in` (
  `PID` varchar(10) NOT NULL,
  `courseName` varchar(45) NOT NULL,
  `grade` varchar(4) DEFAULT NULL,
  `semester` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`PID`,`courseName`),
  CONSTRAINT `enrolled_in_ibfk_1` FOREIGN KEY (`PID`) REFERENCES `student` (`PID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `enrolled_in`
--

LOCK TABLES `enrolled_in` WRITE;
/*!40000 ALTER TABLE `enrolled_in` DISABLE KEYS */;
INSERT INTO `enrolled_in` VALUES ('P100159690','ETM1000','',''),('P100159690','ETM1030','',''),('P100159690','ETM1100','',''),('P100159690','ETM1120','',''),('P100159690','ETM2080','',''),('P100159690','ETM2180','',''),('P100159690','ETM2210','',''),('P100159690','ETM2510','',''),('P100159690','ETM3030','',''),('P100159690','ETM3100','',''),('P100159690','ETM3200','',''),('P100159690','ETM3310','',''),('P100159690','ETM3320','',''),('P100159690','ETM3510','',''),('P100159690','ETM3630','',''),('P100159690','ETM3830','',''),('P100159690','ETM4000','',''),('P100159690','ETM4320','',''),('P100159690','ETM4350','',''),('P100159690','ETM4621','',''),('P100159690','ETM4622','',''),('P100159690','MATH1300','B','Sp12'),('P100159690','UC1900','C','Fa13'),('P100244529','BIOS1000','B+','Fa16'),('P100244529','BIOS1700','A-','Sp17'),('P100244529','BIOS1705','A','Sp17'),('P100244529','CHEM1510','A','Fa18'),('P100244529','CHEM1520','C+','Sp18'),('P100244529','CS2400','A','Fa17'),('P100244529','CS2401','A','Sp17'),('P100244529','CS2650','A','Sp17'),('P100244529','CS3000','A','Sp17'),('P100244529','CS3200','A','Fa18'),('P100244529','CS3560','A','Fa18'),('P100244529','CS3610','A','Fa18'),('P100244529','CS4000','B','Sp18'),('P100244529','CS4040','IP','Fa19'),('P100244529','CS4560','IP','Fa19'),('P100244529','CS4620','IP','Fa19'),('P100244529','EDCT2030','A','Sp16'),('P100244529','EDTE1500','TCT','Fa16'),('P100244529','EE1024','A','Sp17'),('P100244529','EE3613','B+','Sp18'),('P100244529','EE3713','B-','Sp18'),('P100244529','EE3954','IP','Fa19'),('P100244529','ENG3210','A-','Sp16'),('P100244529','ENG3510','A','Sp16'),('P100244529','ENG3610','IP','Fa19'),('P100244529','ET1500','CR','Fa17'),('P100244529','GEOL1010','A','Fa17'),('P100244529','HIST1330','B','Fa16'),('P100244529','MATH1101','A','Sp16'),('P100244529','MATH2302','B','Fa17'),('P100244529','MATH2500','A-','Fa16'),('P100244529','MATH3050','A','Sp16'),('P100244529','MATH3200','A','Fa18'),('P100244529','MUS1200','A','Fa16'),('P100244529','MUS1240','A','Fa17'),('P100244529','MUS2240','A','Fa18'),('P100244529','PSY1010','A','Fa16'),('P100244529','THAR1130','A','Sp16'),('P100244529','UC1900','A','Fa16'),('P100254081','COMS1030','IP','Fa18'),('P100254081','ETM1000','IP','Fa18'),('P100254081','ETM1030','IP','Fa18'),('P100254081','ETM1100','IP','Fa18'),('P100254081','ETM1120','IP','Fa18'),('P100254081','ETM2080','',''),('P100254081','ETM2180','',''),('P100254081','ETM2210','',''),('P100254081','ETM2510','',''),('P100254081','ETM3030','',''),('P100254081','ETM3100','',''),('P100254081','ETM3200','',''),('P100254081','ETM3310','',''),('P100254081','ETM3320','',''),('P100254081','ETM3510','',''),('P100254081','ETM3630','',''),('P100254081','ETM3830','',''),('P100254081','ETM4000','',''),('P100254081','ETM4320','',''),('P100254081','ETM4350','',''),('P100254081','ETM4621','',''),('P100254081','ETM4622','',''),('P100254081','PHYS2001','IP','Fa18'),('P100270522','ETM1000','',''),('P100270522','ETM1030','',''),('P100270522','ETM1100','',''),('P100270522','ETM1120','',''),('P100270522','ETM2080','',''),('P100270522','ETM2180','',''),('P100270522','ETM2210','',''),('P100270522','ETM2510','',''),('P100270522','ETM3030','',''),('P100270522','ETM3100','',''),('P100270522','ETM3200','',''),('P100270522','ETM3310','',''),('P100270522','ETM3320','',''),('P100270522','ETM3510','',''),('P100270522','ETM3630','',''),('P100270522','ETM3830','',''),('P100270522','ETM4000','',''),('P100270522','ETM4320','',''),('P100270522','ETM4350','',''),('P100270522','ETM4621','',''),('P100270522','ETM4622','',''),('P100270523','ETM1000','',''),('P100270523','ETM1030','',''),('P100270523','ETM1100','',''),('P100270523','ETM1120','',''),('P100270523','ETM2080','',''),('P100270523','ETM2180','',''),('P100270523','ETM2210','',''),('P100270523','ETM2510','',''),('P100270523','ETM3030','',''),('P100270523','ETM3100','',''),('P100270523','ETM3200','',''),('P100270523','ETM3310','',''),('P100270523','ETM3320','',''),('P100270523','ETM3510','',''),('P100270523','ETM3630','',''),('P100270523','ETM3830','',''),('P100270523','ETM4000','',''),('P100270523','ETM4320','',''),('P100270523','ETM4350','',''),('P100270523','ETM4621','',''),('P100270523','ETM4622','',''),('P100297843','CHEM1500','C','Fa16'),('P100297843','ETM1000','CR','Sp16'),('P100297843','ETM1030','',''),('P100297843','ETM1100','',''),('P100297843','ETM1120','',''),('P100297843','ETM2080','',''),('P100297843','ETM2180','',''),('P100297843','ETM2210','',''),('P100297843','ETM2510','',''),('P100297843','ETM3030','',''),('P100297843','ETM3100','',''),('P100297843','ETM3200','',''),('P100297843','ETM3310','',''),('P100297843','ETM3320','',''),('P100297843','ETM3510','',''),('P100297843','ETM3630','',''),('P100297843','ETM3830','',''),('P100297843','ETM4000','',''),('P100297843','ETM4320','',''),('P100297843','ETM4350','',''),('P100297843','ETM4621','',''),('P100297843','ETM4622','',''),('P100381943','COMS1030','C','Fa16'),('P100381943','ENG1510','',''),('P100381943','ENG3090J','',''),('P100381943','ETM1030','C+','Sp18'),('P100381943','ETM1100','',''),('P100381943','PHYS2001','',''),('P100381943','UC1900','C','Fa16'),('P100456789','ACCT1010','A-','Sp16'),('P100456789','ART1600','A','Sp17'),('P100456789','CHEM1210','C-','Sp16'),('P100456789','COMS1030','B-','Fa15'),('P100456789','ENG1510','A','Sp16'),('P100456789','ENG3090J','A-','Fa17'),('P100456789','ET1500','B','Sp16'),('P100456789','ETM1000','','Fa15'),('P100456789','ETM1030','',''),('P100456789','ETM1100','','Sp18'),('P100456789','ETM1120','',''),('P100456789','ETM2080','',''),('P100456789','ETM2150','B','Sp18'),('P100456789','ETM2180','',''),('P100456789','ETM2210','',''),('P100456789','ETM2510','',''),('P100456789','ETM3030','',''),('P100456789','ETM3100','',''),('P100456789','ETM3200','',''),('P100456789','ETM3310','',''),('P100456789','ETM3320','',''),('P100456789','ETM3510','',''),('P100456789','ETM3620','A','Sp17'),('P100456789','ETM3630','',''),('P100456789','ETM3830','',''),('P100456789','ETM4000','',''),('P100456789','ETM4320','',''),('P100456789','ETM4325','IP','Sp18'),('P100456789','ETM4350','',''),('P100456789','ETM4621','',''),('P100456789','ETM4622','',''),('P100456789','FIN3000','B-','Fa16'),('P100456789','GER1110','A-','Sp18'),('P100456789','ISE3040','A','Fa17'),('P100456789','MATH1300','B','Sp16'),('P100456789','MIS2020','A','Sp18'),('P100456789','PHYS2001','D','Fa15'),('P100456789','PSY1010','A','Fa16'),('P100678910','ART1100','A','Fa16'),('P100678910','ETM1000','','Fa15'),('P100678910','ETM1030','',''),('P100678910','ETM1100','','Sp18'),('P100678910','ETM1120','',''),('P100678910','ETM2080','',''),('P100678910','ETM2180','',''),('P100678910','ETM2210','',''),('P100678910','ETM2510','',''),('P100678910','ETM3030','',''),('P100678910','ETM3100','',''),('P100678910','ETM3200','',''),('P100678910','ETM3310','',''),('P100678910','ETM3320','',''),('P100678910','ETM3510','',''),('P100678910','ETM3630','',''),('P100678910','ETM3830','',''),('P100678910','ETM4000','',''),('P100678910','ETM4320','',''),('P100678910','ETM4350','',''),('P100678910','ETM4621','',''),('P100678910','ETM4622','',''),('P100678910','HIST1220','B','Sp16'),('P100678933','EE1024','TA-','Fa15'),('P100678933','ET1100','TA-','Fa14'),('P100678933','ETM1000','B','Fa15'),('P100678933','ETM1030','',''),('P100678933','ETM1100','','Sp18'),('P100678933','ETM1120','',''),('P100678933','ETM2080','',''),('P100678933','ETM2180','',''),('P100678933','ETM2210','',''),('P100678933','ETM2510','',''),('P100678933','ETM3030','',''),('P100678933','ETM3100','',''),('P100678933','ETM3200','',''),('P100678933','ETM3310','',''),('P100678933','ETM3320','',''),('P100678933','ETM3510','',''),('P100678933','ETM3630','',''),('P100678933','ETM3830','',''),('P100678933','ETM4000','',''),('P100678933','ETM4320','',''),('P100678933','ETM4350','',''),('P100678933','ETM4621','',''),('P100678933','ETM4622','',''),('P123456789','ME1010','B-','Fa18'),('P123456789','PHIL1010','C','Fa18');
/*!40000 ALTER TABLE `enrolled_in` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `heading`
--

DROP TABLE IF EXISTS `heading`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `heading` (
  `catalogyear` varchar(7) NOT NULL,
  `heading` varchar(45) NOT NULL DEFAULT 'Free Electives',
  `position` int(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`catalogyear`,`heading`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `heading`
--

LOCK TABLES `heading` WRITE;
/*!40000 ALTER TABLE `heading` DISABLE KEYS */;
INSERT INTO `heading` VALUES ('2015-16','Business Courses',3),('2015-16','ETM Courses',1),('2015-16','ETM Electives',2),('2015-16','Free Electives',5),('2015-16','General Courses',4),('2015-16','Lean Sigma Six',6),('2016-17','Business Courses',4),('2016-17','ETM Courses',1),('2016-17','ETM Electives',2),('2016-17','Free Electives',5),('2016-17','General Courses',3),('2016-17','Technical Program Management',6);
/*!40000 ALTER TABLE `heading` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `offered_in`
--

DROP TABLE IF EXISTS `offered_in`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `offered_in` (
  `catalogYear` varchar(7) NOT NULL,
  `courseName` varchar(45) NOT NULL,
  `position` int(11) NOT NULL DEFAULT '0',
  `estimate` int(200) NOT NULL DEFAULT '0',
  `heading` varchar(45) NOT NULL DEFAULT 'Free Electives',
  PRIMARY KEY (`catalogYear`,`courseName`,`heading`),
  CONSTRAINT `offered_in_ibfk_1` FOREIGN KEY (`catalogYear`) REFERENCES `catalog` (`year`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `offered_in`
--

LOCK TABLES `offered_in` WRITE;
/*!40000 ALTER TABLE `offered_in` DISABLE KEYS */;
INSERT INTO `offered_in` VALUES ('2015-16','ACCT1005',2,0,'Business Courses'),('2015-16','ACCT1010',1,0,'Business Courses'),('2015-16','ACCT1010',1,0,'Free Electives'),('2015-16','ART1100',0,0,'Free Electives'),('2015-16','ART1600',0,0,'Free Electives'),('2015-16','BIOS1705',0,0,'Free Electives'),('2015-16','CHEM1210',8,0,'General Courses'),('2015-16','CHEM1500',11,0,'General Courses'),('2015-16','CHEM1510',11,0,'General Courses'),('2015-16','COMS1030',4,0,'General Courses'),('2015-16','EE1024',0,0,'Free Electives'),('2015-16','ENG1510',3,0,'General Courses'),('2015-16','ENG3090',2,0,'General Courses'),('2015-16','ENG3090J',2,0,'General Courses'),('2015-16','ET1100',0,0,'Free Electives'),('2015-16','ET1500',1,0,'General Courses'),('2015-16','ETM1000',1,0,'ETM Courses'),('2015-16','ETM1030',3,0,'ETM Courses'),('2015-16','ETM1100',2,0,'ETM Courses'),('2015-16','ETM1120',4,0,'ETM Courses'),('2015-16','ETM2080',5,0,'ETM Courses'),('2015-16','ETM2150',0,0,'ETM Courses'),('2015-16','ETM2180',6,0,'ETM Courses'),('2015-16','ETM2190',0,0,'ETM Courses'),('2015-16','ETM2210',7,0,'ETM Courses'),('2015-16','ETM2510',8,0,'ETM Courses'),('2015-16','ETM3020',0,0,'ETM Courses'),('2015-16','ETM3030',9,0,'ETM Courses'),('2015-16','ETM3100',10,0,'ETM Courses'),('2015-16','ETM3200',11,0,'ETM Courses'),('2015-16','ETM3310',12,0,'ETM Courses'),('2015-16','ETM3320',13,0,'ETM Courses'),('2015-16','ETM3470',0,0,'ETM Courses'),('2015-16','ETM3480',0,0,'ETM Courses'),('2015-16','ETM3490',0,0,'ETM Courses'),('2015-16','ETM3510',14,0,'ETM Courses'),('2015-16','ETM3540',0,0,'ETM Courses'),('2015-16','ETM3620',2,0,'Business Courses'),('2015-16','ETM3620',2,0,'ETM Courses'),('2015-16','ETM3630',15,0,'ETM Courses'),('2015-16','ETM3830',16,0,'ETM Courses'),('2015-16','ETM3900',0,0,'ETM Courses'),('2015-16','ETM4000',17,0,'ETM Courses'),('2015-16','ETM4010',0,0,'ETM Courses'),('2015-16','ETM4300',0,0,'ETM Courses'),('2015-16','ETM4300',0,0,'General Courses'),('2015-16','ETM4320',18,0,'ETM Courses'),('2015-16','ETM4330',0,0,'ETM Courses'),('2015-16','ETM4350',19,0,'ETM Courses'),('2015-16','ETM4621',20,0,'ETM Courses'),('2015-16','ETM4622',21,0,'ETM Courses'),('2015-16','ETM4830',0,0,'ETM Courses'),('2015-16','ETM4840',0,0,'ETM Courses'),('2015-16','ETM4930',0,0,'ETM Courses'),('2015-16','FIN3000',3,0,'Business Courses'),('2015-16','GER1110',0,0,'Free Electives'),('2015-16','HIST1220',0,0,'Free Electives'),('2015-16','ISE3040',7,0,'General Courses'),('2015-16','MATH1300',6,0,'General Courses'),('2015-16','MATH1350',0,0,'General Courses'),('2015-16','MATH2301',9,0,'General Courses'),('2015-16','MATH2500',31,0,'General Courses'),('2015-16','ME1010',0,0,'Free Electives'),('2015-16','MGT2000',4,0,'Free Electives'),('2015-16','MIS2020',0,0,'Free Electives'),('2015-16','MIS2021',5,0,'Free Electives'),('2015-16','MKT2020',6,0,'Free Electives'),('2015-16','PHIL1010',0,0,'Free Electives'),('2015-16','PHYS2001',9,0,'General Courses'),('2015-16','PHYS2051',12,0,'General Courses'),('2015-16','PSY1010',5,0,'General Courses'),('2015-16','UC1900',0,0,'Free Electives'),('2016-17','ETM1000',1,0,'ETM Courses');
/*!40000 ALTER TABLE `offered_in` ENABLE KEYS */;
UNLOCK TABLES;

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
  `position` int(11) NOT NULL DEFAULT '1',
  `catalog` varchar(7) NOT NULL,
  `prereq` varchar(45) NOT NULL DEFAULT 'N/A',
  PRIMARY KEY (`courseCode`,`catalog`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `placeholder`
--

LOCK TABLES `placeholder` WRITE;
/*!40000 ALTER TABLE `placeholder` DISABLE KEYS */;
INSERT INTO `placeholder` VALUES ('Course Name','AAA1234','50','T1','Business Courses',0,'2015-16','These are The requisites'),('Accounting for Business Activities','ACCT1005-1010','3','N/A','Business Courses',1,'2015-16','N/A'),('Accounting','ACCT1005-SAM1000','3','N/A','Technical Project Management',2,'2016-17','N/A'),('Course Name','BIOS1705','0','N/A','Free Electives',1,'2015-16','N/A'),('Chemistry','CHEM1210-1500-1510','4','N/A','General Courses',11,'2015-16','N/A'),('Public Speaking','COMS-1030','3','N/A','General Courses',4,'2015-16','N/A'),('Junior English','ENG 3090J-ETM 3700J-ET3800J','3','N/A','General Courses',3,'2015-16','N/A'),('Freshman English','ENG1510','3','N/A','General Courses',2,'2015-16','N/A'),('Career Orientation','ET1500','0.5','N/A','General Courses',1,'2015-16','N/A'),('Course Name','ETM100','3','','Certificates',1,'2015-16','N/A'),('Intro to ETM','ETM1000','0.5','N/A','ETM Courses',1,'2015-16','N/A'),('Enterprise Computer Methods','ETM1030','3','N/A','ETM Courses',3,'2015-16','N/A'),('Computer Methods','ETM1030-ME1010-ISE1100-MIS2010-MIS2011','3','N/A','Lean Sigma Six',1,'2015-16','N/A'),('Engineering Graphics Fundamentals','ETM1100','2','N/A','ETM Courses',2,'2015-16','N/A'),('Intro to Manufacturing Operations','ETM1120','3','N/A','ETM Courses',4,'2015-16','N/A'),('Computer Methods','ETM2030-BTM2000-MIS2011','3','N/A','Technical Project Management',1,'2016-17','N/A'),('Industrial Plastics','ETM2080','3','N/A','ETM Courses',5,'2015-16','N/A'),('Metal Fabricating & Casting','ETM2180','3','N/A','ETM Courses',6,'2015-16','N/A'),('Applied Mechatronics','ETM2210','3','N/A','ETM Courses',7,'2015-16','N/A'),('Production Metal Machining','ETM2510','3','N/A','ETM Courses',8,'2015-16','N/A'),('Apps Of Objet Oriented Programming','ETM3030','3','N/A','ETM Courses',9,'2015-16','N/A'),('Production Design','ETM3100','3','N/A','ETM Courses',10,'2015-16','N/A'),('Hydraulics & Pneumatics','ETM3200','3','N/A','ETM Courses',11,'2015-16','N/A'),('Database Applications & Analytics','ETM3310','3','N/A','ETM Courses',12,'2015-16','N/A'),('Electronics & Micro-Controllers','ETM3320','3','N/A','ETM Courses',13,'2015-16','N/A'),('Production Tooling','ETM3510','3','N/A','ETM Courses',14,'2015-16','N/A'),('Supervision & Leadership','ETM3620','3','N/A','Business Courses',2,'2015-16','N/A'),('Quality Management Systems','ETM3630','3','N/A','ETM Courses',15,'2015-16','N/A'),('Six Sigma Methodology','ETM3630-ISE4160','3','N/A','Lean Sigma Six',4,'2015-16','N/A'),('Project Management','ETM3820','3','N/A','Technical Project Management',4,'2016-17','N/A'),('Enterprise Project Management','ETM3830','3','N/A','ETM Courses',16,'2015-16','N/A'),('Senior Seminar','ETM4000','0.5','N/A','ETM Courses',17,'2015-16','N/A'),('Lean Enterprise Methods','ETM4320','3','N/A','ETM Courses',18,'2015-16','N/A'),('Lean Systems','ETM4320-ISE4170','3','N/A','Lean Sigma Six',5,'2015-16','N/A'),('Automation, Robots, & Control Systems','ETM4350','3','N/A','ETM Courses',19,'2015-16','N/A'),('General Management','ETM4420-ETM3625-ETM3700J-SAM3010-COMS3060-SAM','3','N/A','Technical Project Management',5,'2016-17','N/A'),('CAPSTONE I Operations MGT','ETM4621','2','N/A','ETM Courses',20,'2015-16','N/A'),('CAPSTONE II Operations MGT','ETM4622','3','N/A','ETM Courses',21,'2015-16','N/A'),('Course Name','ETMElec01','0','','ETM Electives',1,'2015-16','N/A'),('Financial Management','FIN3000','3','N/A','Business Courses',3,'2015-16','N/A'),('Statistical Methods','ISE3040','3','N/A','Lean Sigma Six',3,'2015-16','N/A'),('Statistics','ISE3040-MATH2500','3/4','N/A','General Courses',10,'2015-16','N/A'),('Pre-Calc/Calc','MATH1300-1350-2301','4','N/A','General Courses',9,'2015-16','N/A'),('Intro to Management','MGT2000','3','N/A','Business Courses',4,'2015-16','N/A'),('Management','MGT2000-MGT2100-MGT3200-MGT3000-MGT3500-CE216','3','N/A','Lean Sigma Six',2,'2015-16','N/A'),('Management','MGT2000-SAM3050','3','N/A','Technical Project Management',3,'2016-17','N/A'),('Business INformation Systems Non-Majors','MIS2021','3','N/A','Business Courses',5,'2015-16','N/A'),('Marketing Principles','MKT2020','3','N/A','Business Courses',6,'2015-16','N/A'),('Physics','PHYS2001/2051','4/5','N/A','General Courses',12,'2015-16','N/A'),('General Psychology','PSY1010','5','N/A','General Courses',5,'2015-16','N/A'),('Course Name','T2 AS','0','N/A','General Courses',8,'2015-16','N/A'),('Course Name','T2 CP','0','N/A','General Courses',6,'2015-16','N/A'),('Course Name','T2 FA','0','N/A','General Courses',7,'2015-16','N/A'),('Course Name','w999','20','3','General Courses',0,'2015-19','N/A');
/*!40000 ALTER TABLE `placeholder` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `student` (
  `PID` varchar(10) NOT NULL,
  `fname` varchar(45) DEFAULT NULL,
  `lname` varchar(45) DEFAULT NULL,
  `current_catalog` varchar(45) NOT NULL DEFAULT '2015-16',
  `advanced_standing` varchar(45) NOT NULL DEFAULT 'false',
  PRIMARY KEY (`PID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
INSERT INTO `student` VALUES ('0','Test','Student','2015-16','false'),('P100159690','Freddie','Mercury','2015-16','false'),('P100244529','Holly','Fox','2015-16','false'),('P100254081','Jordan','Zenisek','2015-16','false'),('P100270522','Full 2','Student','2015-16','true'),('P100270523','Kevin','Godenswager','2015-16','false'),('P100297843','John','Denver','2015-16','false'),('P100381943','Toby','Keith','2015-16','false'),('P100456789','Full','Student','2015-16','true'),('P100678910','LL','Cooliay','2015-16','false'),('P100678933','Prince','Fresh','2015-16','false'),('P123456789','Castellano','Richie','2015-16','false');
/*!40000 ALTER TABLE `student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `studentCatalog`
--

DROP TABLE IF EXISTS `studentCatalog`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `studentCatalog` (
  `PID` varchar(10) NOT NULL,
  `year` varchar(7) NOT NULL,
  PRIMARY KEY (`PID`,`year`),
  KEY `year` (`year`),
  CONSTRAINT `studentCatalog_ibfk_1` FOREIGN KEY (`PID`) REFERENCES `student` (`PID`),
  CONSTRAINT `studentCatalog_ibfk_2` FOREIGN KEY (`year`) REFERENCES `catalog` (`year`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `studentCatalog`
--

LOCK TABLES `studentCatalog` WRITE;
/*!40000 ALTER TABLE `studentCatalog` DISABLE KEYS */;
INSERT INTO `studentCatalog` VALUES ('P100244529','2015-16');
/*!40000 ALTER TABLE `studentCatalog` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `working_towards`
--

DROP TABLE IF EXISTS `working_towards`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `working_towards` (
  `PID` varchar(10) NOT NULL,
  `degreeCode` varchar(8) NOT NULL,
  PRIMARY KEY (`PID`,`degreeCode`),
  KEY `degreeCode` (`degreeCode`),
  CONSTRAINT `working_towards_ibfk_1` FOREIGN KEY (`PID`) REFERENCES `student` (`PID`),
  CONSTRAINT `working_towards_ibfk_2` FOREIGN KEY (`degreeCode`) REFERENCES `degree` (`degreecode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `working_towards`
--

LOCK TABLES `working_towards` WRITE;
/*!40000 ALTER TABLE `working_towards` DISABLE KEYS */;
INSERT INTO `working_towards` VALUES ('P100244529','BS7260');
/*!40000 ALTER TABLE `working_towards` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-04-07 15:29:14
