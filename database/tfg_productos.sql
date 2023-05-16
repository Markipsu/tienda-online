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
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(255) DEFAULT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) NOT NULL,
  `precio` double DEFAULT NULL,
  `vendedor_id` bigint DEFAULT NULL,
  `cantidad` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fkvendedorid_idx` (`vendedor_id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (18,'Juego de Red Dead Redemption 2 para PC','970ab133-661f-4bf3-9e0d-4b67e2c7ab7a_red-dead-redemption-2-buttonjpg-f9ad35.jpg','Red Dead Redemption 2',49.99,20,10),(19,'Juego de Days Gone para PlayStation 4','0d9f2687-2893-4b36-81f2-d362df61e4d1_days-gone_tcm1.128.webp','Days Gone',59.99,20,11),(20,'Juego de The Legend of Zelda - Tears of The Kingdom para Nintendo Switch','e8277e6a-97bd-4f46-acf3-90e3dbc7267b_81zlBoheYhL._AC_SL1500_.jpg','The Legend of Zelda - Tears of The Kingdom',70,20,12),(21,'Juego Fifa 23 para PlayStation 4','4a29a9af-5573-44e7-8e73-3443020eb6e5_717PlYzBroL._AC_SL1500_.jpg','Fifa 23',55,21,23),(22,'Juego de Pokémon Escarlata para Nintendo Switch','db3f4e13-7fb5-49ab-89b2-8963849b56ba_818tEHWyTlL._AC_SL1500_.jpg','Pokémon Escarlata',69.99,21,5),(23,'Juego de Resident Evil 4 para PlayStation 5 ','44b7cb50-def0-4ec2-9dfd-94bd21d6ed8e_71X0kpkEnML._AC_SL1500_.jpg','Resident Evil',45.99,21,35);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-16 11:07:35
