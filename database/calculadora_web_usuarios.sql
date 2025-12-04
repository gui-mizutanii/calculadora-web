-- MySQL dump 10.13  Distrib 8.0.44, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: calculadora_web
-- ------------------------------------------------------
-- Server version	8.0.44

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
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `nome` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'teste@email.com','$2b$10$3RZPcSt.jllmmk2h7pw2wuQLwAKDyaJX.EK7VI4zggKPK.U0jasq.','Teste'),(2,'teste@gmail.com','$2b$10$7GgmEc8DMKfybGPh7m/nZeNK8TxdIsZZRFTF1ar4nSfZ1bfesJEVu','Teste'),(3,'paulo@gmail.com','$2b$10$QG6H4d8GFMkx3/z4d3i02eHqHvfWastuTjoEEuY6On8WCXyKQGzfy','paulo'),(4,'felipe@gmail.com','$2b$10$iJZMFOuS/DI0U.1.EuKZuePLXtyaTmwiCZzJlCNX76NrEsgKxzVU.','felipe'),(6,'felipe5@gmail.com','$2b$10$BrH46AVKl1uZsNC9zav/x.Iv9bbnBjDEj8l72.VIcvZnVj7uT0Es2','felipe'),(7,'fernando@gmail.com','$2b$10$iB6f9MVUKF03ZhpHAmzU9ucfHhPpvDSCbwcJbbHMIq.mB/rseLN7u','fernando'),(9,'fefe@gmail.com','$2b$10$r/Jdg7wHzp7G6E4QM34NXe/k8/Hf/IPshu93U9mx4XoxxMBNGQ8ny','fefe'),(10,'jojo@gmail.com','$2b$10$Z.NNQ.BFa5DjDXINL6Mo1uxHwxQOwKS5igmEIaYZnXckZ/68cFzPa','jojo'),(11,'gu@gmail.com','$2b$10$V9E7qVnCQzszCXqnPtVZyOEcOgHypl.lfRpimJVlw7.tfeQCl8l4W','gu'),(12,'@gmail.com','$2b$10$nKoROSPaI0XeSbpjdZ5/7.tYVbYdoi4cPIK.huT96lM73G14c0M4i','1'),(13,'vi@gmail.com','$2b$10$xd.mmqiJ7si.eks1TPcwH.JAmy0bTDiBAT7TxJU1GsjE0/O5UzuAG','vitoria'),(15,'ney@gmail.com','$2b$10$xp47GbdxHSqDlzfHoGXdZeftFinfCekRqg3YHtKiosODHDj8MFz.K','felipe'),(16,'vitor@gmail.com','$2b$10$7aM47JuZ.qD5stt59LO3feQtMS4w5bvhFSedQjGSOP9N57BB6Ty0a','vitor');
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

-- Dump completed on 2025-12-03 22:29:42
