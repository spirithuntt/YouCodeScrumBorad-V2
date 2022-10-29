-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 29, 2022 at 07:06 PM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `youcodescrumborad`
--

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

CREATE TABLE `tasks` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `type_id` int(11) NOT NULL,
  `priority_id` int(11) NOT NULL,
  `status_id` int(11) NOT NULL,
  `task_datetime` date NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tasks`
--

INSERT INTO `tasks` (`id`, `title`, `type_id`, `priority_id`, `status_id`, `task_datetime`, `description`) VALUES
(6, 'Ut ipsum dolore lor', 0, 0, 0, '2009-01-12', 'Aut ut totam sunt u'),
(7, 'Adipisci quis corpor', 0, 0, 0, '2004-02-23', 'Ut ullam et corporis'),
(8, 'Eum enim quia ipsum', 0, 0, 0, '2008-12-05', 'Est officia est dol'),
(9, 'Voluptatibus volupta', 0, 0, 0, '2011-11-03', 'Sit consectetur vol'),
(10, 'Nihil commodi et eli', 1, 3, 2, '1996-07-14', 'Unde ut non suscipit'),
(11, 'Voluptatem est qui a', 1, 3, 3, '2013-12-02', 'Irure perferendis om'),
(12, 'Ipsa reprehenderit', 2, 4, 1, '2005-02-23', 'Qui quia sit consequ'),
(13, 'Laudantium recusand', 2, 2, 3, '2013-01-27', 'Voluptatum elit vol'),
(14, 'Ut enim aliquip dele', 1, 4, 1, '2020-04-10', 'Dolorum est incidunt'),
(15, '', 0, 0, 0, '0000-00-00', ''),
(16, 'Et laborum Mollitia', 2, 2, 1, '2012-12-10', 'Dignissimos aut aute'),
(17, 'Quibusdam rerum temp', 1, 1, 1, '2015-09-22', 'Laborum voluptates d'),
(18, 'Quia nostrud aut per', 2, 2, 1, '2014-08-22', 'Sequi enim consequun'),
(19, '', 0, 0, 0, '0000-00-00', ''),
(20, 'Est elit minim obc', 1, 2, 3, '1998-05-11', 'Quaerat distinctio '),
(21, 'Perspiciatis consec', 2, 3, 1, '2006-01-17', 'Quisquam magnam nobi'),
(22, 'Inventore vel et sin', 1, 3, 3, '1986-03-12', 'Id asperiores quibus'),
(23, 'Et dolorem cillum di', 1, 1, 1, '1987-04-14', 'Modi itaque dolor eo'),
(24, 'Repellendus Sit eo', 2, 3, 2, '1997-10-25', 'Illum commodi accus'),
(25, 'P3872AG5Z¨4N1RAZG3UOB2EFZ0Y98A', 1, 2, 2, '2022-12-31', 'EFHGYOIUZPHGEPUZR9E'),
(26, '', 0, 0, 0, '0000-00-00', ''),
(27, '', 0, 0, 0, '0000-00-00', ''),
(28, '', 1, 2, 2, '2022-12-31', 'èygbuiejnkl'),
(29, '', 0, 0, 0, '0000-00-00', ''),
(30, 'Totam velit qui nihi', 1, 2, 2, '2001-08-08', 'Dolor modi in fugit'),
(31, 'Itaque quae dicta ut', 2, 1, 1, '2022-06-17', 'Tempor quod amet el'),
(32, 'tets', 1, 2, 1, '2020-11-02', 'Iusto qui omnis volu'),
(33, '', 0, 0, 0, '0000-00-00', ''),
(34, '', 0, 0, 0, '0000-00-00', ''),
(35, 'P3872AG5Z¨4N1RAZG3UOB2EFZ0Y98A', 0, 0, 0, '0000-00-00', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
