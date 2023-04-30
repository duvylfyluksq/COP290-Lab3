-- MySQL dump 10.13  Distrib 8.0.32, for macos12.6 (arm64)
--
-- Host: localhost    Database: fmd
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(25) NOT NULL,
  `password` varchar(25) NOT NULL,
  `bio` varchar(100) NOT NULL,
  `pfp` text NOT NULL,
  `watchlist_movies` json DEFAULT NULL,
  `watchlist_shows` json DEFAULT NULL,
  `interests` json NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `username_unique` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=3189 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'cop290','howtocope','bio','1.jpeg','{\"1\": true, \"2\": false, \"3\": false, \"4\": true, \"8\": false}','{\"1\": true, \"5\": false, \"6\": false, \"7\": true, \"8\": false, \"10\": false}','[\"Action\", \"Action\", \"Action\"]'),(2,'akshit','password123','Hello, I am John Doe','1.jpeg','{\"1\": true, \"2\": false, \"3\": false, \"4\": true, \"13\": true, \"14\": true, \"28\": true, \"62\": true, \"215\": true, \"246\": true}','{\"3\": true, \"5\": false, \"6\": false, \"7\": true, \"8\": true, \"11\": true}','[\"Action\", \"Drama\", \"Thriller\"]'),(3,'om','password123','Hello, I am John Doe','3.jpeg','{\"1\": true, \"2\": true, \"3\": false, \"4\": true}','{\"5\": true, \"6\": false, \"7\": true, \"8\": false}','[\"Action\", \"Drama\", \"Thriller\"]'),(4,'vinay','password123','Hello, I am John Doe','4.jpeg','{\"1\": true, \"2\": true, \"3\": false, \"4\": true}','{\"5\": true, \"6\": false, \"7\": true, \"8\": false}','[\"Action\", \"Drama\", \"Thriller\"]'),(5,'vedanta','password123','Hello, I am John Doe','5.jpeg','{\"1\": true, \"2\": true, \"3\": false, \"4\": true}','{\"5\": true, \"6\": false, \"7\": true, \"8\": false}','[\"Action\", \"Drama\", \"Thriller\"]'),(6,'jaisingh','password123','Hello, I am John Doe','6.jpeg','{\"1\": true, \"2\": true, \"3\": false, \"4\": true}','{\"5\": true, \"6\": false, \"7\": true, \"8\": false}','[\"Action\", \"Drama\", \"Thriller\"]'),(7,'anant','password123','Hello, I am John Doe','5.jpeg','{\"1\": true, \"2\": true, \"3\": false, \"4\": true}','{\"5\": true, \"6\": false, \"7\": true, \"8\": false}','[\"Action\", \"Drama\", \"Thriller\"]'),(8,'payas','password123','Hello, I am John Doe','8.jpeg','{\"1\": true, \"2\": true, \"3\": false, \"4\": true}','{\"5\": true, \"6\": false, \"7\": true, \"8\": false}','[\"Action\", \"Drama\", \"Thriller\"]'),(9,'saksham','password123','Hello, I am John Doe','9.jpeg','{\"1\": true, \"2\": true, \"3\": false, \"4\": true}','{\"5\": true, \"6\": false, \"7\": true, \"8\": false}','[\"Action\", \"Drama\", \"Thriller\"]'),(10,'vagish','password123','Hello, I am John Doe','10.jpeg','{\"1\": true, \"2\": true, \"3\": false, \"4\": true}','{\"5\": true, \"6\": false, \"7\": true, \"8\": false}','[\"Action\", \"Drama\", \"Thriller\"]'),(11,'Dhruv','lmao','ok','11.jpeg','{}','{}','[\"Action\", \"Action\", \"Action\"]'),(25,'newtestuser','testpass','testbio','25.jpeg','{}','{}','[\"Action\", \"Comedy\", \"Drama\"]'),(2629,'anantlunia','jaivardhan','samaaj','1234.jpeg','{}','{}','[\"Maths\", \"Physics\"]'),(2940,'yadvender','chahal','HUL242 sucks','1234.jpeg','{}','{}','[\"Action\", \"Comedy\", \"Romance\"]'),(2942,'username_example_2','password_example','bio_example','1234.jpeg','{}','{}','[\"interests_example\", \"interests_example\", \"interests_example\"]'),(2944,'username_example_3','password_example','bio_example','1234.jpeg','{}','{}','[\"interests_example\", \"interests_example\", \"interests_example\"]'),(2945,'atharvad','password_example','bio_example','1234.jpeg','{}','{}','[\"interests_example\", \"interests_example\", \"interests_example\"]'),(2946,'sarwagya','password_example','bio_example','1234.jpeg','{}','{}','[\"interests_example\", \"interests_example\", \"interests_example\"]'),(2949,'payaskhurana','password_example','bio_example','1234.jpeg','{}','{}','[\"[\'interests_example\'\", \" \'interests_example\'\", \" \'interests_example\']\"]'),(2950,'paya','password_example','bio_example','1234.jpeg','{}','{}','[\"interests_example\", \"interests_example\", \"interests_example\"]'),(2952,'payal','password_example','bio_example','1234.jpeg','{}','{}','[\"interests_example\", \"interests_example\", \"interests_example\"]'),(3047,'pratham','password_example','bio_example','1234.jpeg','{}','{}','[\"interests_example\", \"interests_example\", \"interests_example\"]'),(3109,'amaiya','password_example','bio_example','1234.jpeg','{}','{}','[\"interests_example\", \"interests_example\", \"interests_example\"]'),(3124,'vinnu','ok','bio','1234.jpeg','{}','{}','[\"Action\", \"Comedy\", \"Drama\"]'),(3125,'lmaolala','lmaolala','a','1234.jpeg','{}','{}','[\"a\", \"a\", \"a\"]'),(3126,'mihir','mihir','a','1234.jpeg','{}','{}','[\"a\", \"a\", \"a\"]'),(3127,'amish','amish','a','1234.jpeg','{}','{}','[\"a\", \"a\", \"a\"]'),(3128,'harsh','harsh','a','1234.jpeg','{}','{}','[\"a\", \"a\", \"a\"]'),(3129,'a','a','kads','1234.jpeg','{}','{}','[\"a\", \"a\", \"a\"]'),(3130,'b','b','','1234.jpeg','{}','{}','[\"a\", \"a\", \"a\"]'),(3131,'c','c','','1234.jpeg','{}','{}','[\"a\", \"a\", \"a\"]'),(3133,'d','d','ajfdnjdfnjfndjfnj','1234.jpeg','{}','{}','[\"a\", \"a\", \"a\"]'),(3134,'e','e','a','1234.jpeg','{}','{}','[\"a\", \"a\", \"a\"]'),(3135,'f','f','jnjnjnjnjbhbhbjnh','1234.jpeg','{}','{}','[\"a\", \"a\", \"a\"]'),(3136,'g','g','a','1234.jpeg','{}','{}','[\"a\", \"a\", \"a\"]'),(3138,'h','g','a','1234.jpeg','{}','{}','[\"a\", \"a\", \"a\"]'),(3139,'i','i','dasnkfmkkfamfamkkmf','1234.jpeg','{}','{}','[\"Adventure\", \"Adventure\", \"Adventure\"]'),(3140,'j','j','a','1234.jpeg','{}','{}','[\"a\", \"a\", \"a\"]'),(3141,'k','k','a','1234.jpeg','{}','{}','[\"a\", \"a\", \"a\"]'),(3142,'l','l','a','1234.jpeg','{}','{}','[\"a\", \"a\", \"a\"]'),(3143,'m','m','kaejwndkfjaskfnknfdsnfdsknsf','1234.jpeg','{}','{}','[\"a\", \"a\", \"a\"]'),(3145,'n','n','a','1234.jpeg','{}','{}','[\"a\", \"a\", \"a\"]'),(3146,'z','z','bio','1234.jpeg','{}','{}','[\"Drama\", \"Adventure\", \"Adventure\"]'),(3177,'elon','elon','a','1234.jpeg','{}','{}','[\"a\", \"a\", \"a\"]'),(3178,'musk','musk','a','1234.jpeg','{}','{}','[\"a\", \"a\", \"a\"]'),(3179,'ma','ma','asdsdfs','1234.jpeg','{}','{}','[\"a\", \"a\", \"a\"]'),(3180,'p','p','hahahaha','1234.jpeg','{}','{}','[\"Adventure\", \"Adventure\", \"Adventure\"]'),(3181,'r','r','a','1234.jpeg','{}','{}','[\"a\", \"a\", \"a\"]'),(3182,'o','o','skdmdfm','1234.jpeg','{}','{}','[\"Adventure\", \"Adventure\", \"Adventure\"]'),(3183,'x','x','ndfjfjn','1234.jpeg','{}','{}','[\"Adventure\", \"Adventure\", \"Adventure\"]'),(3184,'aryan','aryan','asdfjnskdf','1234.jpeg','{}','{}','[\"Adventure\", \"Adventure\", \"Adventure\"]'),(3185,'y','y','jadnjdsnfjndjnf','1234.jpeg','{}','{}','[\"Adventure\", \"Adventure\", \"Adventure\"]'),(3186,'col216','lmao','bio','1234.jpeg','{}','{}','[\"ok\", \"ok\", \"ok\"]'),(3187,'vedantaom','vinay','kfndsjnsjnfadjn','1234.jpeg','{}','{}','[\"Adventure\", \"Adventure\", \"Adventure\"]'),(3188,'shashwat','ok','i dont care, i just want this to end','818.jpeg','{}','{}','[\"Adventure\", \"Adventure\", \"Adventure\"]');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-30 18:51:44
