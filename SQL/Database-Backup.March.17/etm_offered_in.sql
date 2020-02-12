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
INSERT INTO `offered_in` VALUES ('2015-16','ACCT1005',2,0,'Business Courses'),('2015-16','ACCT1010',1,0,'Business Courses'),('2015-16','ART1100',0,0,'Free Electives'),('2015-16','ART1600',0,0,'Free Electives'),('2015-16','CHEM1210',8,0,'General Courses'),('2015-16','CHEM1500',11,0,'General Courses'),('2015-16','CHEM1510',11,0,'General Courses'),('2015-16','COMS1030',4,0,'General Courses'),('2015-16','EE1024',0,0,'Free Electives'),('2015-16','ENG1510',3,0,'General Courses'),('2015-16','ENG3090',2,0,'General Courses'),('2015-16','ENG3090J',2,0,'General Courses'),('2015-16','ET1100',0,0,'Free Electives'),('2015-16','ET1500',1,0,'General Courses'),('2015-16','ETM1000',1,0,'ETM Courses'),('2015-16','ETM1030',3,0,'ETM Courses'),('2015-16','ETM1100',2,0,'ETM Courses'),('2015-16','ETM1120',4,0,'ETM Courses'),('2015-16','ETM2080',5,0,'ETM Courses'),('2015-16','ETM2150',0,0,'ETM Courses'),('2015-16','ETM2180',6,0,'ETM Courses'),('2015-16','ETM2190',0,0,'ETM Courses'),('2015-16','ETM2210',7,0,'ETM Courses'),('2015-16','ETM2510',8,0,'ETM Courses'),('2015-16','ETM3020',0,0,'ETM Courses'),('2015-16','ETM3030',9,0,'ETM Courses'),('2015-16','ETM3100',10,0,'ETM Courses'),('2015-16','ETM3200',11,0,'ETM Courses'),('2015-16','ETM3310',12,0,'ETM Courses'),('2015-16','ETM3320',13,0,'ETM Courses'),('2015-16','ETM3470',0,0,'ETM Courses'),('2015-16','ETM3480',0,0,'ETM Courses'),('2015-16','ETM3490',0,0,'ETM Courses'),('2015-16','ETM3510',14,0,'ETM Courses'),('2015-16','ETM3540',0,0,'ETM Courses'),('2015-16','ETM3620',2,0,'Business Courses'),('2015-16','ETM3620',2,0,'ETM Courses'),('2015-16','ETM3630',15,0,'ETM Courses'),('2015-16','ETM3830',16,0,'ETM Courses'),('2015-16','ETM3900',0,0,'ETM Courses'),('2015-16','ETM4000',17,0,'ETM Courses'),('2015-16','ETM4010',0,0,'ETM Courses'),('2015-16','ETM4300',0,0,'ETM Courses'),('2015-16','ETM4320',18,0,'ETM Courses'),('2015-16','ETM4330',0,0,'ETM Courses'),('2015-16','ETM4350',19,0,'ETM Courses'),('2015-16','ETM4621',20,0,'ETM Courses'),('2015-16','ETM4622',21,0,'ETM Courses'),('2015-16','ETM4830',0,0,'ETM Courses'),('2015-16','ETM4840',0,0,'ETM Courses'),('2015-16','ETM4930',0,0,'ETM Courses'),('2015-16','FIN3000',3,0,'Business Courses'),('2015-16','GER1110',0,0,'Free Electives'),('2015-16','HIST1220',0,0,'Free Electives'),('2015-16','ISE3040',7,0,'General Courses'),('2015-16','MATH1300',6,0,'General Courses'),('2015-16','MATH1350',0,0,'General Courses'),('2015-16','MATH2301',9,0,'General Courses'),('2015-16','MATH2500',31,0,'General Courses'),('2015-16','ME1010',0,0,'Free Electives'),('2015-16','MGT2000',4,0,'Free Electives'),('2015-16','MIS2020',0,0,'Free Electives'),('2015-16','MIS2021',5,0,'Free Electives'),('2015-16','MKT2020',6,0,'Free Electives'),('2015-16','PHIL1010',0,0,'Free Electives'),('2015-16','PHYS2001',9,0,'General Courses'),('2015-16','PHYS2051',12,0,'General Courses'),('2015-16','PSY1010',5,0,'General Courses'),('2015-16','UC1900',0,0,'Free Electives');
/*!40000 ALTER TABLE `offered_in` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-03-17 16:19:41
