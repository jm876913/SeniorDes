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
-- Table structure for table `courseREQS`
--

DROP TABLE IF EXISTS `courseREQS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `courseREQS` (
  `courseName` varchar(45) NOT NULL,
  `reqCourseName` varchar(45) NOT NULL,
  `type` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`courseName`,`reqCourseName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `courseREQS`
--

LOCK TABLES `courseREQS` WRITE;
/*!40000 ALTER TABLE `courseREQS` DISABLE KEYS */;
INSERT INTO `courseREQS` VALUES ('ETM2080','AS','pre'),('ETM2080','CHEM1210','pre'),('ETM2180','AS','pre'),('ETM2180','CHEM1210','pre'),('ETM2210','AS','pre'),('ETM2210','PHYS2001','pre'),('ETM2510','AS','pre'),('ETM3030','AS','pre'),('ETM3030','ETM1030','pre'),('ETM3100','AS','pre'),('ETM3100','ETM2080','pre'),('ETM3200','AS','pre'),('ETM3200','ETM2210','pre'),('ETM3310','AS','pre'),('ETM3310','ETM3030','pre'),('ETM3320','AS','pre'),('ETM3320','ETM3030','pre'),('ETM3320','PHYS2001','pre'),('ETM3510','AS','pre'),('ETM3510','ETM2510','pre'),('ETM3510','ETM3100','pre'),('ETM3620','AS','pre'),('ETM3620','COMS1030','pre'),('ETM3620','MGT2000','pre'),('ETM3630','AS','pre'),('ETM3630','ENG3090J','pre'),('ETM3630','ETM2080','pre'),('ETM3630','ETM2180','pre'),('ETM3630','MATH2500','pre'),('ETM3830','AS','pre'),('ETM3830','ETM1030','pre'),('ETM3830','MGT2000','pre'),('ETM4000','AS','pre'),('ETM4320','AS','pre'),('ETM4320','ETM1030','pre'),('ETM4320','MGT2000','pre'),('ETM4350','AS','pre'),('ETM4350','ETM3030','pre'),('ETM4350','ETM3200','pre'),('ETM4350','ETM3320','pre'),('ETM4621','AS','pre'),('ETM4621','ETM2210','pre'),('ETM4621','ETM2510','pre'),('ETM4621','ETM3030','pre'),('ETM4621','ETM3100','pre'),('ETM4622','AS','pre'),('ETM4622','ETM3510','pre'),('ETM4622','ETM3630','pre'),('ETM4622','ETM4621','pre'),('FIN3000','ACCT1010','pre');
/*!40000 ALTER TABLE `courseREQS` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-03-17 16:19:43
