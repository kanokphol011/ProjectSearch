-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 27, 2018 at 07:41 PM
-- Server version: 10.1.36-MariaDB
-- PHP Version: 5.6.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `staffcoc`
--

-- --------------------------------------------------------

--
-- Table structure for table `staffcoc`
--

CREATE TABLE `staffcoc` (
  `staffName` varchar(50) NOT NULL,
  `staffLName` varchar(50) NOT NULL,
  `position` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `staffcoc`
--

INSERT INTO `staffcoc` (`staffName`, `staffLName`, `position`) VALUES
('Sinchai', 'Kamolphiwong', 'assoc.prof.dr.'),
('Komsan', 'Kanjanasit', 'dr.'),
('Aziz', 'Nanthaamornphog', 'asst.prof.dr.'),
('Adisak', 'Intana', 'dr.'),
('Kanjana', 'Thongglin', 'dr.'),
('Wasimon', 'Panichpattanakul', 'dr.'),
('Phatcharee', 'Thepnimit', ''),
('Nattapong', 'Tongtep', 'dr.'),
('Kitsiri', 'Chochiang', 'dr.'),
('Winai', 'Nadee', 'dr.'),
('Korawit', 'Prutsachainimmit', 'dr.'),
('Maneenate', 'Puangmanee', ''),
('Rattana', 'Wetprasit', 'asst.prof.dr.'),
('Apichat', 'Heednacram', 'asst.prof.dr.'),
('Warodom', 'Werapun', 'asst.prof.dr.'),
('Jirawat', 'Thaenthong', 'dr.'),
('Voravika', 'Wattanasoontorn', 'dr.'),
('Kwankamon', 'Dittakan', 'dr.'),
('Chakadkit', 'Thaenchaikun', 'dr.'),
('Panisa', 'Treepong', 'dr.'),
('Noppon', 'Lertchuwongsa', 'dr.'),
('Nawanol', 'Theera-ampornpunt', 'dr.'),
('Jakraphan', 'Chaopreecha', 'dr.'),
('Kittasil', 'Silanon', 'dr.'),
('Thitinan', 'Kliangsuwan', 'dr.'),
('Thammaratt', 'Samiyalampa', ''),
('Lerluck', 'Boonlamp', ''),
('Amarin', 'Deemakarn', ''),
('Esther', 'Sangiamkul', ''),
('Monchanok ', 'Thongthep', ''),
('Ayuth ', 'Intrapradit', ''),
('Kullawat ', 'Chaowanawatee', ''),
('David ', 'Arthur sun', 'mr.'),
('Kulsiri ', 'Chirayus', ''),
('Apichart  ', 'Vasutapituks', ''),
('Chamikorn ', 'Hiranrat', ''),
('Veeraporn ', 'Siddoo', ''),
('Yossawee  ', 'Keaomanee', ''),
('Amonrat  ', 'Prasitsupparote', ''),
('Jakapan  ', 'Suaboot', ''),
('Kuljaree  ', 'Tantayakul', ''),
('Wisarut  ', 'Chantara', ''),
('Nattaya  ', 'Chamtitigul', '');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
