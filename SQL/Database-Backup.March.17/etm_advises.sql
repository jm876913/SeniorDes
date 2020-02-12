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
  KEY `pid` (`pid`),
  CONSTRAINT `advises_ibfk_1` FOREIGN KEY (`advisorid`) REFERENCES `advisor` (`ID`),
  CONSTRAINT `advises_ibfk_2` FOREIGN KEY (`pid`) REFERENCES `student` (`PID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `advises`
--

LOCK TABLES `advises` WRITE;
/*!40000 ALTER TABLE `advises` DISABLE KEYS */;
INSERT INTO `advises` VALUES ('gstewart@ohio.edu','P100244529','0000-00-00 00:00:00'),('gstewart@ohio.edu','P100254081','0000-00-00 00:00:00'),('gstewart@ohio.edu','P100270523','0000-00-00 00:00:00'),('gstewart@ohio.edu','P100297843','0000-00-00 00:00:00'),('gstewart@ohio.edu','P100381943','0000-00-00 00:00:00'),('gstewart@ohio.edu','P100456789','0000-00-00 00:00:00'),('gstewart@ohio.edu','P100678910','0000-00-00 00:00:00'),('gstewart@ohio.edu','P100678933','0000-00-00 00:00:00'),('gstewart@ohio.edu','P123456789','0000-00-00 00:00:00');
/*!40000 ALTER TABLE `advises` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-03-17 16:19:23
