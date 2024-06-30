-- MySQL dump 10.13  Distrib 8.3.0, for macos14.2 (arm64)
--
-- Host: localhost    Database: jobandhunter
-- ------------------------------------------------------
-- Server version	8.3.0

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
-- Table structure for table `job`
--

DROP TABLE IF EXISTS `job`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `job` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `company` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `time` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `job` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `major` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `education` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `experience` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `source` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `period` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `duration` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `skills` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `englishLevel` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `industry` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `deadline` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `compensation` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remote` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `referral` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `contactway` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job`
--

LOCK TABLES `job` WRITE;
/*!40000 ALTER TABLE `job` DISABLE KEYS */;
INSERT INTO `job` VALUES (1,'财务部实习生','安永','尽快到岗','北京东城区','\"总账类财务核算相关工作\"','财务会计相关专业','本科及以上学历','熟练使用Excel','安永','实习生','财务部实习生','至少3个月','每周4-5天','\"具有较强的沟通及学习能力，踏实稳定，工作积极\"','未说明','财务审计','未说明','140元/天','未提供','否','hjr001127@163.com'),(2,'非标投资助理（实习生）','华泰资产管理有限公司','未说明','上海浦东博成路1101号华泰金融大厦8层','\"协助非标投资经理搜集项目资料，编写立项报告、PPT；协助项目尽调，撰写可行性研究报告、募集说明书等报会材料\"','财会、金融等相关专业','在校本科或以上学历','曾在资管、券商、基金、信托或知名会所实习，对保险债权投资、信托、券商发债等业务熟悉者优先','华泰资产管理有限公司','实习生','项目投资部非标投资助理','至少3个月','每周能实习3天及以上','\"具备良好的会计专业理论知识\"','未说明','金融','尽快到岗','未说明','未说明','否','shenmengjia17@ehuatai.com'),(3,'美妆个护奢品服饰广告投放实习生-国际美妆方向','小红书商业化','最晚7/10入职','上海','\"协助内部业务团队的日常数据分析需求沟通，监控并整理广告收入数据等\"','未提供','本科及以上学历，大四/研究生在读优先','熟练使用Excel、PPT等办公软件，有较强的沟通、信息搜集、数据分析和逻辑思考能力','小红书','实习生','广告投放实习生','至少3个月以上的实习期','每周到岗至少4天','\"沟通、信息搜集、数据分析和逻辑思考能力，自主驱动力强，有责任感、执行力强，具备一定的抗压能力\"','未提供','美妆个护奢品服饰','最晚7/10入职','150/天，包含一日三餐，或者选择50元餐补','未提供','否','chenweiyi1@xiaohongshu.com'),(4,'战略分析实习生-广告业务','字节跳动','7月初可到岗','上海市闵行区虹桥国际商务广场','\"扫描国内外主要互联网细分行业及重点公司的前沿动态、探索新的商业模式及机会；对AIGC等重点领域展开深入研究分析，制定商业计划，为公司的新业务拓展提供建议；跟踪公司已有业务发展态势，结合行业发展提供经营策略建议。\"','未提供','未提供','有知名咨询公司、PEVC、互联网实习经历优先；具有行业研究分析的基本能力，如问题分析能力、excel/ppt技能等；有sql等数据分析技能可优先','字节跳动','实习生','战略分析实习生','实习4个月及以上优先','未提供','\"问题分析能力、excel/ppt技能、sql等数据分析技能\"','未提供','互联网','未提供','免费三餐、下午茶、健身房，房补','未提供','否','tanjiayi@bytedance.com');
/*!40000 ALTER TABLE `job` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-30  0:09:27
