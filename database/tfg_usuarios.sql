-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: tfg
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `ciudad` varchar(255) DEFAULT NULL,
  `codigo_postal` int DEFAULT NULL,
  `direccion` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `enabled` bit(1) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `pais` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_m2dvbwfge291euvmk6vkkocao` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (2,'fwafaffwa',12131,'fafwafwa','vav@avav',_binary '','Marcos1','España','$2a$10$LCpbDHk9.knB1avL/kSn8utQTNq5cFvZhg6fftprB46jo0etYDKUm','marcos'),(3,'fwafaffwa',12131,'fafwafwa','vav@avav',_binary '','Marcos1','España','$2a$10$tySjj6K9b0yZqTkB1woIue/LqbXc80BmQ5bBS7XHjNG5ppi34AM8O','marcos1'),(4,'fwafaffwa',12131,'fafwafwa','vav@avav',_binary '','Marcos1','España','$2a$10$FPcjNiTtM4ztadOTrwOYD.YxUaXnL.d3/WNqIFAKn9v.rZdtHaPUa','marcos3'),(5,'fwafaffwa',12131,'fafwafwa','mar@cos',_binary '','dawd','España','$2a$10$A/ZC4LathOVj/abEp0AjIORI18Mp2Dpj1IxXx18xNcV3uB9zGSs9C','marcos32'),(6,'pepe',28000,'pepepe','pepe@gmail.com',_binary '','pepe','pepe','$2a$10$LzKMH1.4GIR4GVj0WsjtUOftNLlKzJNczmqmQ5nmtpdghxtobCz36','pepe'),(15,'fwafaffwa',12131,'fafwafwa','vav@avav',_binary '','Marcos1','España','$2a$10$LCpbDHk9.knB1avL/kSn8utQTNq5cFvZhg6fftprB46jo0etYDKUm','marcos4'),(16,'fwafaffwa',12131,'fafwafwa','vav@avav',_binary '','Marcos1','España','$2a$10$tnkgfVaXXw1768iw7RGaBuEc2N.yGXEcTTxF8BErJYBBWI7BC4TYC','marcos33');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-15 17:01:00
