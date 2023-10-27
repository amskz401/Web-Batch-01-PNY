-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 27, 2023 at 04:27 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `online_store`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) NOT NULL,
  `first_name` varchar(25) NOT NULL,
  `last_name` varchar(25) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` text NOT NULL,
  `created_date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_date` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `phone`, `email`, `password`, `created_date`, `updated_date`) VALUES
(1, 'Other12', 'Record12', '+92 123 4567890', 'john@doe.com', '34819d7beeabb9260a5c854bc85b3e44', '2023-10-27 14:14:58', '2023-10-27 19:14:58'),
(2, 'Other12', 'Record12', '+98 234 5455858', 'other@record.com', '8e70383c69f7a3b7ea3f71b02f3e9731', '2023-10-27 14:14:58', '2023-10-27 19:14:58'),
(3, 'Other12', 'Record12', '+98 234 5455858', 'other@record.com', '8e70383c69f7a3b7ea3f71b02f3e9731', '2023-10-27 14:13:03', '2023-10-27 19:13:03'),
(5, '', NULL, NULL, '', '', '2023-10-27 14:18:02', '0000-00-00 00:00:00'),
(6, 'newname', 'newlast', 'phone', 'em@me.com', 'hereismypassword', '2023-10-27 14:19:01', '0000-00-00 00:00:00'),
(7, 'newname', 'newlast', 'phone', 'em@me.com', '0000-00-00 00:00:00.000000', '2023-10-27 14:20:12', '0000-00-00 00:00:00'),
(8, 'newname', 'newlast', 'phone2', 'em@me.com', '2023-10-27 19:20:29', '2023-10-27 14:21:38', '2023-10-27 19:21:38');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
