-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 06, 2024 at 07:40 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `event_management`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin_login`
--

CREATE TABLE `admin_login` (
  `a_id` int(11) NOT NULL,
  `a_name` varchar(20) NOT NULL,
  `a_email` varchar(50) NOT NULL,
  `a_password` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin_login`
--

INSERT INTO `admin_login` (`a_id`, `a_name`, `a_email`, `a_password`) VALUES
(1, 'admin', 'devanshilothe80@gmail.com', 'Admin@123');

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `c_id` int(50) NOT NULL,
  `p_id` int(50) NOT NULL,
  `e_id` int(50) NOT NULL,
  `c_quanity` int(11) NOT NULL DEFAULT 1,
  `status` int(11) NOT NULL DEFAULT 1,
  `c_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`c_id`, `p_id`, `e_id`, `c_quanity`, `status`, `c_date`) VALUES
(1, 1, 9, 2, 1, '0000-00-00'),
(4, 1, 11, 2, 1, '0000-00-00'),
(5, 1, 10, 2, 1, '0000-00-00'),
(6, 2, 11, 1, 1, '0000-00-00'),
(92, 3, 10, 1, 1, '0000-00-00'),
(93, 3, 2, 1, 1, '0000-00-00'),
(94, 19, 3, 2, 1, '0000-00-00'),
(98, 3, 1, 3, 1, '0000-00-00'),
(99, 3, 4, 4, 1, '0000-00-00');

-- --------------------------------------------------------

--
-- Table structure for table `event`
--

CREATE TABLE `event` (
  `e_id` int(20) NOT NULL,
  `e_name` varchar(50) NOT NULL,
  `e_type` varchar(50) NOT NULL,
  `e_date` date DEFAULT NULL,
  `e_time` time NOT NULL,
  `e_department` varchar(50) NOT NULL,
  `e_image` varchar(10000) NOT NULL,
  `e_limit` int(100) NOT NULL,
  `e_price` int(100) NOT NULL,
  `e_description1` varchar(300) NOT NULL,
  `e_description2` varchar(300) NOT NULL,
  `status` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `event`
--

INSERT INTO `event` (`e_id`, `e_name`, `e_type`, `e_date`, `e_time`, `e_department`, `e_image`, `e_limit`, `e_price`, `e_description1`, `e_description2`, `status`) VALUES
(1, 'Dancing', '', '2024-04-09', '06:00:00', '2', '1711952978182-.jpeg', 0, 70, 'no', 'no', 1),
(2, 'sl,.Z', '2', '2024-04-19', '08:00:00', '', '1711953025002-.jpg', 70, 60, 'no', 'no', 1),
(3, 'asdjdk', '2', '2024-04-06', '09:00:00', '', '1712032633573-.jpg', 7, 90, 'jdskola', 'ooskdlz,', 1),
(4, 'ojuiki', '4', '2024-04-22', '05:00:00', '3', '1712032716088-.jpg', 70, 0, 'sfkm,x', 'iskm,sm,\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n', 1),
(5, 'pkjm', '4', '2024-04-15', '07:00:00', '4', '1712032889485-.jpg', 70, 0, 'no', 'no', 1),
(6, 'pdijksdk', '3', '2024-04-17', '07:00:00', '6', '1712033357214-.jpeg', 0, 90, 'oksklz,\r\n\r\n\r\n\r\n', 'oekls,d', 1),
(7, 'kd,x', '3', '2024-04-11', '08:00:00', '4', '1712033498500-.jpg', 80, 80, 'jdsmfesmx', 'isjkm,z', 1),
(8, 'pdls,.z,ls', '3', '2024-04-17', '00:00:09', '', '1712033598141-.jpg', 89, 80, 'aklsdm,z', 'ejkmsd,z', 1),
(9, 'ikjmjiujskz', '2', '2024-04-18', '00:00:09', '7', '1712033777193-.jpg', 90, 89, 'kjjsam,z', 'skam,z', 1),
(10, 'okalZska', '4', '2024-05-01', '00:00:09', '', '1712033881127-.jpg', 90, 90, 'kjwams,k', 'kwam,s', 1),
(11, 'kjkmk', '1', '2024-04-26', '00:00:08', '5', '1712034744353-.jpeg', 78, 90, 'n0', 'no', 1),
(12, 'Dancing', '', '2024-04-18', '00:00:02', '', '1712035577874-.jpg', 500, 89, 'helo', 'helo', 1),
(13, 'Dancing', '1', '2024-04-24', '00:00:02', '1', '1712035745091-.jpg', 499, 100, 'dssds', 'ipspsdip', 1),
(14, 'Dancing', '', '2024-05-04', '00:00:05', '', '1712035882274-.jpg', 20, 100, 'bbjsjs', 'nxsosodj', 1),
(15, 'Dancing', 'undefined', '2024-04-25', '00:00:00', 'undefined', '1712036230862-.jpg', 20, 4, 'dkodfdok', 'kpdkpfdkp', 1),
(16, 'Dancing', '4', '2024-04-26', '00:00:10', '4', '1712036338681-.jpg', 8, 200, '00', '00', 1),
(17, 'Dancing', 'undefined', '2024-04-24', '00:00:10', '3', '1712036405821-.jpg', 0, 0, 'cdf', 'sds', 1),
(18, 'sdpksdkdp', 'party', '2024-04-27', '00:02:23', 'undefined', '1712036455565-.jpeg', 0, 100, 'dsmllslk', 'kslkdskl', 1),
(19, 'Dancing', '', '2024-04-20', '00:00:00', '1', '1712036632183-.jpg', 10, 0, '111', '11', 1),
(20, 'Dancing', '', '2024-04-23', '00:00:00', '', '1712036699077-.jpg', 0, 10, 'cxxsdsdsdsdsds', 'knksdfnsdfnsdofp', 1),
(21, 'ccxc', '2', '0000-00-00', '00:00:00', '4', '1712036779370-.jpg', 10, 1000, '//\r\n\r\ndd', 'lcdlcd,c', 1),
(22, 'vfvpfvpfkvpk', '', '2024-04-16', '00:00:10', '', '1712036822380-.jpg', 100, 2000, 'sdpsdkspdksp', 'oejjeojoejo', 1),
(23, 'llldfldfkl', '1', '2024-04-27', '00:02:33', '3', '1712037435075-.jpg', 100, 4, '00', 'dsds', 1),
(24, 'Dancing', '1', '2024-04-26', '00:00:00', '1', '1712037579808-.jpg', 0, 100, 'djjsdsjd', 'kdssk', 1),
(25, 'soklzx', '', '2024-04-19', '00:00:09', '', '1712037718267-.jpeg', 89, 89, 'ksam,', 'ejkkldslkas;', 1),
(26, 'kokasklas', '1', '2024-04-25', '00:00:09', '1', '1712037800661-.jpg', 80, 90, 'okdsl,ad.', 'dmklsk', 1),
(27, 'oillll', '1', '2024-04-18', '00:00:09', '1', '1712037863589-.jpg', 90, 90, 'kkkl', 'kkllk', 1),
(28, 'wirting', '1', '2024-04-24', '00:00:09', '1', '1712037979709-.jpg', 90, 90, 'ioiskal', 'dsklaklskal', 1),
(29, 'lasadlasllkas', '1', '2024-04-27', '00:00:09', '1', '1712038109963-.jpeg', 90, 90, 'jkjkks', 'ijskadsklsa', 1),
(30, 'Alumini', '1', '2024-05-01', '00:00:10', '1', '1712038287605-.jpg', 10, 1000, ',vf,v,lcv,lc,l', ';ccc;cvcv,;cxv;,', 1),
(31, 'Dancing', '1', '2024-04-18', '00:00:15', '1', '1712125593273-.jpg', 100, 1000, 'heloo', 'howw', 1),
(32, 'party', '2', '2024-05-08', '00:00:05', '3', '1712125765271-.jpg', 0, 1000, 'cvcv', 'ddds', 1),
(33, 'party', '2', '2024-05-08', '00:00:05', '3', '1712125767560-.jpg', 0, 1000, 'cvcv', 'ddds', 1),
(34, 'party', '2', '2024-05-08', '00:00:05', '3', '1712125767775-.jpg', 0, 1000, 'cvcv', 'ddds', 1),
(35, 'party', '2', '2024-05-08', '00:00:05', '3', '1712125772864-.jpg', 100, 1000, 'cvcv', 'ddds', 1),
(36, 'party', '2', '2024-05-08', '00:00:05', '3', '1712125778847-.jpg', 100, 1000, 'cvcv', 'ddds', 1),
(37, 'party', '2', '2024-05-08', '00:00:05', '3', '1712125779093-.jpg', 100, 1000, 'cvcv', 'ddds', 1),
(38, 'Dancing', '2', '2024-04-17', '00:00:03', '4', '1712126247978-.jpg', 200, 80, 'helo', 'how', 1),
(39, 'Alumini', '3', '2024-04-23', '00:00:02', '3', '1712126382919-.jpg', 11, 789, '11', '12', 1),
(40, 'Dancing', '5', '2024-04-20', '00:00:08', '3', '1712127802780-.jpg', 80, 60, 'jskkkajs', 'kjdsalklkas', 1),
(41, 'Dancing', '5', '2024-04-20', '00:00:08', '3', '1712127923684-.jpg', 80, 60, 'jskkkajs', 'kjdsalklkas', 1),
(42, 'party', '3', '2024-04-25', '00:00:08', '5', '1712128787165-.jpg', 80, 80, 'jjkjkkllk;', 'hjhjkjkklk', 1),
(43, 'Alumini', '3', '2024-04-16', '05:00:00', '1', '1712128916664-.jpg', 80, 80, 'dkskl', 'dkskjdaskl', 1),
(44, 'sdlasakl', '3', '2024-04-18', '00:00:00', '5', '1712129032300-.jpg', 90, 80, 'hjhkkj', 'jhhkkl', 1),
(45, 'sdlasakl', '3', '2024-04-18', '00:00:00', '5', '1712129236067-.jpg', 90, 80, 'hjhkkj', 'jhhkkl', 1),
(46, 'sdlasakl', '3', '2024-04-18', '00:00:00', '5', '1712129748746-.jpg', 90, 80, 'hjhkkj', 'jhhkkl', 1),
(47, 'sdlasakl', '3', '2024-04-18', '00:00:00', '5', '1712129750865-.jpg', 90, 80, 'hjhkkj', 'jhhkkl', 1),
(48, 'sdlasakl', '3', '2024-04-18', '00:00:00', '5', '1712129751053-.jpg', 90, 80, 'hjhkkj', 'jhhkkl', 1),
(49, 'sdlasakl', '3', '2024-04-18', '00:00:00', '5', '1712129751269-.jpg', 90, 80, 'hjhkkj', 'jhhkkl', 1),
(50, 'sdlasakl', '3', '2024-04-18', '00:00:00', '5', '1712130077742-.jpg', 90, 80, 'hjhkkj', 'jhhkkl', 1),
(51, 'Dancing', '4', '2024-04-30', '00:01:00', '4', '1712130380849-.jpg', 100, 500, 'dlfdlfmdflmdmkk', 'kpdkpsdpsdpsdp', 1),
(52, 'Dancing', '4', '2024-04-30', '00:01:00', '1', '1712130445861-.jpg', 100, 500, 'dlfdlfmdflmdmkk', 'kpdkpsdpsdpsdp', 1),
(53, 'Dancing', '4', '2024-04-30', '00:01:00', '1', '1712130475585-.jpg', 100, 500, 'dlfdlfmdflmdmkk', 'kpdkpsdpsdpsdp', 1),
(54, 'Dancing', '4', '2024-04-30', '00:01:00', '1', '1712130508545-.jpg', 100, 500, 'dlfdlfmdflmdmkk', 'kpdkpsdpsdpsdp', 1),
(55, 'Dancing', '4', '2024-04-30', '00:01:00', '1', '1712130569426-.jpg', 100, 500, 'dlfdlfmdflmdmkk', 'kpdkpsdpsdpsdp', 1),
(56, 'Dancing', '3', '2024-04-25', '00:01:00', '1', '1712130634471-.jpg', 100, 200, '1000', '00111', 1),
(57, 'Dancing', '3', '2024-04-25', '00:01:00', '1', '1712130667716-.jpg', 100, 200, '1000', '00111', 1),
(58, 'Dancing', '3', '2024-04-25', '00:01:00', '1', '1712130680611-.jpg', 100, 200, '1000', '00111', 1),
(59, 'Dancing', '3', '2024-04-25', '00:01:00', '1', '1712130748215-.jpg', 100, 200, '1000', '00111', 1),
(60, 'Dancing', '3', '2024-04-25', '00:01:00', '1', '1712130815825-.jpg', 100, 200, '1000', '00111', 1),
(61, 'Dancing', '3', '2024-04-25', '00:01:00', '1', '1712130828338-.jpg', 100, 200, '1000', '00111', 1),
(62, 'Singing', '6', '2024-04-24', '00:00:07', '1', '1712205384806-.jpg', 80, 70, 'ksjkasjkaskjsakjaskj', 'ksjaklssklaskl;saklakla', 1),
(63, 'Alumini', '3', '2024-05-01', '00:00:07', '3', '1712205978428-.jpg', 80, 90, 'dlkslsdkl;', 'dsksldksl;salk', 1),
(64, 'Alumini', '5', '2024-04-24', '00:00:08', '4', '1712206058838-.jpg', 90, 80, 'sdlsask', 'sdlsl', 1),
(65, 'kdskala', '4', '2024-04-26', '00:00:00', '4', '1712206148736-.jpg', 90, 80, 'SALKASL;L;ASLK;', 'SADSAKLASLK', 1),
(66, 'Alumini', '6', '2024-04-13', '00:00:08', '3', '1712206309761-.jpg', 90, 90, 'kslasklsa;;asl', 'djskdkslksl', 1),
(67, 'Alumini', '6', '2024-04-13', '00:00:08', '3', '1712206772260-.jpg', 90, 90, 'kslasklsa;;asl', 'djskdkslksl', 1),
(68, 'Alumini', '6', '2024-04-13', '00:00:08', '3', '1712206775561-.jpg', 90, 90, 'kslasklsa;;asl', 'djskdkslksl', 1),
(69, 'Alumini', '6', '2024-04-13', '00:00:08', '3', '1712206776274-.jpg', 90, 90, 'kslasklsa;;asl', 'djskdkslksl', 1),
(70, 'Alumini', '6', '2024-04-13', '00:00:08', '3', '1712206776420-.jpg', 90, 90, 'kslasklsa;;asl', 'djskdkslksl', 1),
(71, 'Alumini', '6', '2024-04-13', '00:00:08', '3', '1712206776564-.jpg', 90, 90, 'kslasklsa;;asl', 'djskdkslksl', 1),
(72, 'kdskala', '4', '2024-04-26', '00:00:00', '4', '1712206948958-.jpg', 90, 80, 'SALKASL;L;ASLK;', 'SADSAKLASLK', 1),
(73, 'Alumini', '2', '2024-04-05', '00:00:09', '3', '1712207079264-.jpg', 12, 102, 'ok', 'okp', 1),
(74, 'Alumini', '2', '2024-04-05', '00:00:09', '3', '1712207081826-.jpg', 12, 102, 'ok', 'okp', 1),
(75, 'Alumini', '2', '2024-04-05', '00:00:09', '3', '1712207189792-.jpg', 12, 102, 'ok', 'okp', 1),
(76, 'Alumini', '2', '2024-04-05', '00:00:04', '3', '1712207289806-.jpg', 4, 456, '4', '4', 1),
(77, 'Alumini', '2', '2024-04-05', '00:00:04', '3', '1712207548358-.jpg', 4, 456, '4', '4', 1),
(78, 'alsklaKAl', '4', '2024-04-25', '00:00:08', '3', '1712207662657-.jpg', 90, 90, 'skaslkaslkasl;al', 'ssklaklklsaskal', 1),
(79, 'alsklaKAl', '4', '2024-04-25', '00:00:08', '3', '1712207932984-.jpg', 90, 90, 'skaslkaslkasl;al', 'ssklaklklsaskal', 1);

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--
-- Error reading structure for table event_management.feedback: #1932 - Table &#039;event_management.feedback&#039; doesn&#039;t exist in engine
-- Error reading data for table event_management.feedback: #1064 - You have an error in your SQL syntax; check the manual that corresponds to your MariaDB server version for the right syntax to use near &#039;FROM `event_management`.`feedback`&#039; at line 1

-- --------------------------------------------------------

--
-- Table structure for table `feedbacks`
--

CREATE TABLE `feedbacks` (
  `feedback_id` int(11) NOT NULL,
  `p_name` varchar(50) NOT NULL,
  `p_mob` int(50) NOT NULL,
  `p_email` varchar(50) NOT NULL,
  `p_subject` varchar(10) NOT NULL,
  `feedback_msg` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `feedbacks`
--

INSERT INTO `feedbacks` (`feedback_id`, `p_name`, `p_mob`, `p_email`, `p_subject`, `feedback_msg`) VALUES
(1, 'devanshi', 2147483647, 'devanshi@gmail.com', 'nothing', 'nothing');

-- --------------------------------------------------------

--
-- Table structure for table `gallery_management`
--

CREATE TABLE `gallery_management` (
  `g_id` int(20) NOT NULL,
  `g_name` varchar(50) NOT NULL,
  `g_pic` varchar(10000) NOT NULL,
  `g_description1` varchar(200) NOT NULL,
  `g_description2` varchar(200) DEFAULT NULL,
  `g_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `gallery_management`
--

INSERT INTO `gallery_management` (`g_id`, `g_name`, `g_pic`, `g_description1`, `g_description2`, `g_date`) VALUES
(19, 'New Year Celebration', '1711082002530-.jpeg', '', '', '2023-11-23'),
(20, 'Dancing', '1711082065890-.jpg', '', '', '2024-03-05'),
(21, 'kdjskdls', '1712035839495-.jpg', 'sdsd', 'sdsds', '2024-04-19');

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `payment_id` int(20) NOT NULL,
  `e_id` int(20) NOT NULL,
  `p_id` int(20) DEFAULT NULL,
  `payment_odr_id` int(7) DEFAULT NULL,
  `payment_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `p_name` varchar(50) DEFAULT NULL,
  `p_email` varchar(75) DEFAULT NULL,
  `p_mob` int(20) DEFAULT NULL,
  `no_participants` int(20) NOT NULL,
  `e_price` int(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `payment`
--

INSERT INTO `payment` (`payment_id`, `e_id`, `p_id`, `payment_odr_id`, `payment_time`, `p_name`, `p_email`, `p_mob`, `no_participants`, `e_price`) VALUES
(1, 11, 3, NULL, '2024-04-02 07:10:39', 'akjsksjks', 'devanshi@gmail.com', 963258963, 10, 900),
(2, 11, 3, NULL, '2024-04-02 07:29:27', 'Devanshi', 'devanshi@gmail.com', 2147483647, 1, 90),
(3, 11, 3, NULL, '2024-04-02 07:30:47', 'Devanshi', 'devanshi@gmail.com', 2147483647, 1, 90),
(4, 11, 3, NULL, '2024-04-02 07:31:31', 'Devanshi', 'devanshi@gmail.com', 2147483647, 1, 90),
(5, 11, 3, NULL, '2024-04-02 07:33:19', ',asmlasla', 'devanshilothe80@gmail.com', 1111, 1, 90);

-- --------------------------------------------------------

--
-- Table structure for table `registration`
--

CREATE TABLE `registration` (
  `p_id` int(50) NOT NULL,
  `p_name` varchar(50) NOT NULL,
  `p_email` varchar(50) NOT NULL,
  `p_password` varchar(50) NOT NULL,
  `p_gender` varchar(10) NOT NULL,
  `p_mob` int(12) NOT NULL,
  `p_age` varchar(10) NOT NULL,
  `p_id_proof` varchar(10000) NOT NULL,
  `p_department` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `registration`
--

INSERT INTO `registration` (`p_id`, `p_name`, `p_email`, `p_password`, `p_gender`, `p_mob`, `p_age`, `p_id_proof`, `p_department`) VALUES
(3, 'Devanshi', 'devanshilothe80@gmail.com', 'Devanshi@123', 'Female', 852369741, '19', '1705556310679-.jpg', '1'),
(19, 'Ajinkya', 'growsmartmsu@gmail.com', 'Ajinkya@123', 'Male', 741852963, '16', '1711689142561-.jpeg', '1'),
(20, 'Devanshi', 'devanshilothe80@gmail.com', 'Devanshi@1234', 'Female', 741852963, '20', '1712123148756-.jpg', '1'),
(21, 'Shubham', 'lothedevanshi@gmail.com', 'Shubham@123', 'Male', 741852963, '20', '1712127065355-.jpg', '3');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin_login`
--
ALTER TABLE `admin_login`
  ADD PRIMARY KEY (`a_id`);

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`c_id`);

--
-- Indexes for table `event`
--
ALTER TABLE `event`
  ADD PRIMARY KEY (`e_id`);

--
-- Indexes for table `feedbacks`
--
ALTER TABLE `feedbacks`
  ADD PRIMARY KEY (`feedback_id`);

--
-- Indexes for table `gallery_management`
--
ALTER TABLE `gallery_management`
  ADD PRIMARY KEY (`g_id`);

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`payment_id`);

--
-- Indexes for table `registration`
--
ALTER TABLE `registration`
  ADD PRIMARY KEY (`p_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin_login`
--
ALTER TABLE `admin_login`
  MODIFY `a_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `c_id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=100;

--
-- AUTO_INCREMENT for table `event`
--
ALTER TABLE `event`
  MODIFY `e_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=80;

--
-- AUTO_INCREMENT for table `feedbacks`
--
ALTER TABLE `feedbacks`
  MODIFY `feedback_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `gallery_management`
--
ALTER TABLE `gallery_management`
  MODIFY `g_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `payment`
--
ALTER TABLE `payment`
  MODIFY `payment_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `registration`
--
ALTER TABLE `registration`
  MODIFY `p_id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
