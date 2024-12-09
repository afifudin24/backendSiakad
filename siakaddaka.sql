-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 09, 2024 at 09:41 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `siakaddaka`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `nama` varchar(11) NOT NULL,
  `email` varchar(30) NOT NULL,
  `tanggal_lahir` varchar(30) NOT NULL,
  `alamat` varchar(30) NOT NULL,
  `gambar` varchar(40) NOT NULL DEFAULT 'default.jpeg'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `user_id`, `nama`, `email`, `tanggal_lahir`, `alamat`, `gambar`) VALUES
(2, 912, 'Afif', 'admin@gmail.com', '2003-01-24', 'Surusunda', 'lanjan.jpeg');

-- --------------------------------------------------------

--
-- Table structure for table `adminkelas`
--

CREATE TABLE `adminkelas` (
  `id` int(11) NOT NULL,
  `siswaId` int(11) NOT NULL,
  `kelasId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `adminkelas`
--

INSERT INTO `adminkelas` (`id`, `siswaId`, `kelasId`) VALUES
(1, 10, 3);

-- --------------------------------------------------------

--
-- Table structure for table `datamengajar`
--

CREATE TABLE `datamengajar` (
  `id` int(11) NOT NULL,
  `guru_id` int(11) NOT NULL,
  `mapel_id` int(11) NOT NULL,
  `kelas_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `datamengajar`
--

INSERT INTO `datamengajar` (`id`, `guru_id`, `mapel_id`, `kelas_id`) VALUES
(1, 8, 1, 3),
(2, 9, 1, 3),
(5, 8, 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `dudi`
--

CREATE TABLE `dudi` (
  `id` int(11) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `alamat` text DEFAULT NULL,
  `kontak` varchar(50) DEFAULT NULL,
  `jurusan` enum('TKJ','TKR','AKL','PM','TSM') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `dudi`
--

INSERT INTO `dudi` (`id`, `nama`, `alamat`, `kontak`, `jurusan`) VALUES
(2, 'Telkom Purwokerto', 'Kec. Purwokerto', 'Belum Ada', 'TKJ'),
(3, 'BRI Majenang', 'Majenang', 'Belum Ada', 'AKL');

-- --------------------------------------------------------

--
-- Table structure for table `ejurnal`
--

CREATE TABLE `ejurnal` (
  `id` int(11) NOT NULL,
  `mengajar_id` int(11) DEFAULT NULL,
  `tgl_jurnal` date NOT NULL,
  `pembahasan` text NOT NULL,
  `jml_hadir` int(11) DEFAULT 0,
  `jml_izin` int(11) DEFAULT 0,
  `jml_sakit` int(11) DEFAULT 0,
  `jml_alfa` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `ejurnal`
--

INSERT INTO `ejurnal` (`id`, `mengajar_id`, `tgl_jurnal`, `pembahasan`, `jml_hadir`, `jml_izin`, `jml_sakit`, `jml_alfa`) VALUES
(27, 2, '2024-10-06', 'pertemuan pertama', 0, 0, 0, 1),
(30, 2, '2024-11-09', 'Coba dulu aja', 0, 0, 0, 1),
(31, 2, '2024-12-07', 'Coba saja', 1, 0, 0, 0),
(32, 2, '2024-12-08', 'Coba aja', 1, 0, 0, 0),
(33, 2, '2024-12-09', 'tes aja', 1, 0, 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `gurus`
--

CREATE TABLE `gurus` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `email` varchar(20) NOT NULL,
  `nama` varchar(20) NOT NULL,
  `tanggal_lahir` date NOT NULL,
  `alamat` varchar(30) NOT NULL,
  `hobi` varchar(30) NOT NULL,
  `no_telepon` varchar(20) NOT NULL,
  `gambar` varchar(255) DEFAULT 'default.jpg'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `gurus`
--

INSERT INTO `gurus` (`id`, `user_id`, `email`, `nama`, `tanggal_lahir`, `alamat`, `hobi`, `no_telepon`, `gambar`) VALUES
(2, 2, 'nurul.hidayah@exampl', 'Nurul Hidayah', '1985-05-22', 'Jl. Anggrek No. 12, Bandung', '', '081234567891', 'nurul_hidayah.jpg'),
(3, 3, 'muhammad.fauzi@examp', 'Muhammad Fauzid', '1978-11-29', 'Jl. Kenanga No. 5, Surabaya', '', '081234567892', '1732714953551_download.jpeg'),
(8, 25327, 'afif@gmail.com', 'Afif Waliyudin', '2003-01-24', 'Surusunda', 'Ngoding', '081548769365', '1728115936802_aing.jpg'),
(9, 73571, 'guru@gmail.com', 'Afif  Udin', '2003-01-19', 'Surusunda', 'Mancing Bos', '081548769365', '1732713020142_wp9737534-btth-wallpapers.jpg'),
(12, 83140, 'gurubaru@gmail.com', 'Gurubaru', '2024-11-04', 'Ini adalah desa', 'Tidak ada hobi', '', 'default.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `jadwalmengajar`
--

CREATE TABLE `jadwalmengajar` (
  `id` int(11) NOT NULL,
  `mengajar_id` int(11) NOT NULL,
  `jamke` varchar(10) NOT NULL,
  `hari` varchar(20) NOT NULL,
  `jam_mulai` time NOT NULL,
  `jam_selesai` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `jadwalmengajar`
--

INSERT INTO `jadwalmengajar` (`id`, `mengajar_id`, `jamke`, `hari`, `jam_mulai`, `jam_selesai`) VALUES
(3, 1, '3 - 4', 'Sabtu', '08:20:00', '15:00:00'),
(4, 2, '3 - 4', 'Minggu', '07:20:00', '10:00:00'),
(5, 1, '1 - 2', 'Jum\'at', '07:00:00', '15:20:00'),
(6, 2, '3 - 4', 'Minggu', '13:20:00', '15:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `kelas`
--

CREATE TABLE `kelas` (
  `id` int(11) NOT NULL,
  `title` varchar(20) NOT NULL,
  `tingkat` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `kelas`
--

INSERT INTO `kelas` (`id`, `title`, `tingkat`) VALUES
(1, 'TKJ 1', 12),
(3, 'TKJ 3', 11),
(5, 'TKR 2', 12);

-- --------------------------------------------------------

--
-- Table structure for table `logabsensi`
--

CREATE TABLE `logabsensi` (
  `id` int(11) NOT NULL,
  `mengajar_id` int(11) NOT NULL,
  `siswa_id` int(11) NOT NULL,
  `tgl_absen` date NOT NULL,
  `pertemuan_ke` int(11) NOT NULL,
  `status_absensi` enum('H','I','S','A') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `logabsensi`
--

INSERT INTO `logabsensi` (`id`, `mengajar_id`, `siswa_id`, `tgl_absen`, `pertemuan_ke`, `status_absensi`) VALUES
(44, 2, 10, '2024-10-06', 1, 'A'),
(48, 2, 10, '2024-11-09', 4, 'A'),
(50, 2, 10, '2024-12-07', 5, 'H'),
(51, 2, 10, '2024-12-08', 6, 'H'),
(52, 2, 10, '2024-12-09', 7, 'H');

-- --------------------------------------------------------

--
-- Table structure for table `logabsensiwalkel`
--

CREATE TABLE `logabsensiwalkel` (
  `id` int(11) NOT NULL,
  `siswa_id` int(11) NOT NULL,
  `kelas_id` int(11) NOT NULL,
  `tgl_absen` date NOT NULL,
  `status_absen` enum('H','A','I','S') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `logabsensiwalkel`
--

INSERT INTO `logabsensiwalkel` (`id`, `siswa_id`, `kelas_id`, `tgl_absen`, `status_absen`) VALUES
(2, 10, 1, '2024-09-25', 'I'),
(11, 10, 1, '2024-09-28', 'H'),
(13, 10, 1, '2024-09-26', 'I'),
(15, 10, 1, '2024-09-27', 'A'),
(17, 10, 1, '2024-09-29', 'A'),
(19, 10, 1, '2024-10-02', 'I'),
(31, 10, 3, '2024-11-09', 'A'),
(35, 10, 3, '2024-11-10', 'H');

-- --------------------------------------------------------

--
-- Table structure for table `mapel`
--

CREATE TABLE `mapel` (
  `id` int(11) NOT NULL,
  `kodeMapel` varchar(20) NOT NULL,
  `namaMapel` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `mapel`
--

INSERT INTO `mapel` (`id`, `kodeMapel`, `namaMapel`) VALUES
(1, 'BINDO', 'Bahasa indonesia'),
(3, 'BING', 'Bahasa Inggris'),
(4, 'IPA', 'IPA'),
(5, 'MTK', 'Matematika'),
(6, 'ASJ', 'Administrasi Sistem Jaringan');

-- --------------------------------------------------------

--
-- Table structure for table `pengiriman_tugas`
--

CREATE TABLE `pengiriman_tugas` (
  `id` int(11) NOT NULL,
  `tugas_id` int(11) NOT NULL,
  `siswa_id` int(11) NOT NULL,
  `tanggal_pengumpulan` datetime NOT NULL DEFAULT current_timestamp(),
  `file` varchar(255) NOT NULL,
  `status` enum('submitted','late') DEFAULT 'submitted'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sekolah`
--

CREATE TABLE `sekolah` (
  `id` int(11) NOT NULL,
  `namaSekolah` varchar(100) NOT NULL,
  `alamatSekolah` varchar(100) NOT NULL,
  `noTelp` varchar(20) NOT NULL,
  `emailSekolah` varchar(20) NOT NULL,
  `deskripsiSekolah` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sekolah`
--

INSERT INTO `sekolah` (`id`, `namaSekolah`, `alamatSekolah`, `noTelp`, `emailSekolah`, `deskripsiSekolah`) VALUES
(2, 'SMK DAKA', 'Karangpucung', '09327482', 'smkdkrpc@gmail.com', 'ini deskripsi');

-- --------------------------------------------------------

--
-- Table structure for table `siswa`
--

CREATE TABLE `siswa` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `kelas_id` int(11) NOT NULL,
  `nama` varchar(100) DEFAULT NULL,
  `nis` varchar(20) DEFAULT NULL,
  `alamat` text DEFAULT NULL,
  `hobi` varchar(100) DEFAULT NULL,
  `tanggal_lahir` date DEFAULT NULL,
  `gambar` varchar(255) DEFAULT 'default.jpg',
  `no_hp` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `siswa`
--

INSERT INTO `siswa` (`id`, `user_id`, `kelas_id`, `nama`, `nis`, `alamat`, `hobi`, `tanggal_lahir`, `gambar`, `no_hp`) VALUES
(10, 774, 3, 'aw', '18195012', 'Di rumah saja', 'Ngoding Aje', '2003-01-24', '1731165465911_18_Of_The_Sexiest_(Donghua)_Chinese_Anime_Male_Characters___Yu_Alexius.jpeg', '081548769465'),
(23, 925, 1, 'dsfsdfad', '31243', 'asdff', 'sini', '2024-11-20', 'default.jpg', ''),
(27, 696, 1, 'ondol', '5346554', 'ghfdgh', 'fdghd', '2024-11-20', 'default.jpg', '');

-- --------------------------------------------------------

--
-- Table structure for table `stafpembayaran`
--

CREATE TABLE `stafpembayaran` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `nama` varchar(30) NOT NULL,
  `email` varchar(40) NOT NULL,
  `tanggal_lahir` date NOT NULL,
  `alamat` varchar(30) NOT NULL,
  `gambar` varchar(40) NOT NULL DEFAULT 'default.jpg'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tugas_kelas`
--

CREATE TABLE `tugas_kelas` (
  `id` int(11) NOT NULL,
  `datamengajar_id` int(11) NOT NULL,
  `judul_tugas` varchar(255) NOT NULL,
  `deskripsi` text DEFAULT NULL,
  `tanggal_dibuat` datetime DEFAULT current_timestamp(),
  `tanggal_deadline` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tugas_kelas`
--

INSERT INTO `tugas_kelas` (`id`, `datamengajar_id`, `judul_tugas`, `deskripsi`, `tanggal_dibuat`, `tanggal_deadline`) VALUES
(6, 1, 'Tugas Baru', 'Ini adalah tugas baru', '2024-09-29 20:00:13', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(20) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `role`) VALUES
(2, '123457', '$2a$10$EgnNwC05vX7krQMsAFPXlejnbFR6X0Sx5fnQLsD.0FD7YLloFRhoG', 3),
(3, '123458', '$2a$10$EgnNwC05vX7krQMsAFPXlejnbFR6X0Sx5fnQLsD.0FD7YLloFRhoG', 3),
(266, '2314345', '$2a$10$Qk898E/SMs.ZwPdTjPGabO5q/I4k8R5g./jJzlauqDgCz3yc/SJau', 3),
(394, '2314345', '$2a$10$9LoelyKhDTvpPLwShP5k1uRxV3oEmkjoIcaeSWcefwQV3eXR3ig1W', 3),
(696, '5346554', '$2a$10$X22jIz3pP3iO5AIuEjzn0.ilw3jnD6rTeN41tptXQvmDaF.CkTWEO', 3),
(774, '18195012', '$2y$10$lerJcFPFz5g.eJBTX2wBleEPEG32PqlfAqaEzb1.HPEZIuw1ZoIru', 3),
(912, 'admin@gmail.com', '$2y$10$lerJcFPFz5g.eJBTX2wBleEPEG32PqlfAqaEzb1.HPEZIuw1ZoIru', 1),
(925, '31243', '$2a$10$PwuBGJwm7USK7EWnkWyDyuL6g1dmRfOo8nPvawA6wV/IeTqvcNP4y', 3),
(987, 'staf@gmail.com', '$2a$10$AyR/QRlewCirNQDaqD8Y7.UEZUZKzxB/hcRNQpKvJlAKgKtSX4iFO', 4),
(25327, 'kocak@gmail.com', '$2a$10$pLdB3wmDFTTyXQ6d2zKlTuKOrOSRrHwFexgXeH5cTqzNYwHc3geKW', 2),
(42750, 'dsf@gmail.com', '[object Promise]', 2),
(73571, 'guru@gmail.com', '$2y$10$CMyOUD5smVucSGEPNtTwGOhBg8Nfs/.zzE0qrB/Fx7cc.zNNxX06W', 2),
(83140, 'gurubaru@gmail.com', '[object Promise]', 2);

-- --------------------------------------------------------

--
-- Table structure for table `validasimengajar`
--

CREATE TABLE `validasimengajar` (
  `id` int(11) NOT NULL,
  `guruId` int(11) NOT NULL,
  `siswaId` int(11) NOT NULL,
  `ejurnalId` int(11) NOT NULL,
  `mengajarId` int(11) NOT NULL,
  `statusHadir` enum('Hadir','Tidak Hadir') NOT NULL,
  `materiSesuai` enum('Sesuai','Tidak Sesuai') NOT NULL,
  `prosesPengajaran` enum('Baik','Cukup Baik','Kurang Baik') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `validasimengajar`
--

INSERT INTO `validasimengajar` (`id`, `guruId`, `siswaId`, `ejurnalId`, `mengajarId`, `statusHadir`, `materiSesuai`, `prosesPengajaran`) VALUES
(1, 9, 27, 32, 5, 'Hadir', 'Sesuai', 'Baik'),
(5, 9, 10, 32, 2, 'Hadir', 'Sesuai', 'Baik'),
(6, 9, 10, 31, 2, 'Hadir', 'Sesuai', 'Baik'),
(7, 9, 10, 33, 2, 'Hadir', 'Tidak Sesuai', 'Cukup Baik');

-- --------------------------------------------------------

--
-- Table structure for table `wakakesiswaan`
--

CREATE TABLE `wakakesiswaan` (
  `id` int(11) NOT NULL,
  `guruId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `wakakesiswaan`
--

INSERT INTO `wakakesiswaan` (`id`, `guruId`) VALUES
(3, 9);

-- --------------------------------------------------------

--
-- Table structure for table `wakakurikulum`
--

CREATE TABLE `wakakurikulum` (
  `id` int(11) NOT NULL,
  `guru_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `wakakurikulum`
--

INSERT INTO `wakakurikulum` (`id`, `guru_id`) VALUES
(1, 9);

-- --------------------------------------------------------

--
-- Table structure for table `walikelas`
--

CREATE TABLE `walikelas` (
  `id` int(11) NOT NULL,
  `kelas_id` int(5) NOT NULL,
  `guru_id` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `walikelas`
--

INSERT INTO `walikelas` (`id`, `kelas_id`, `guru_id`) VALUES
(1, 1, 8),
(3, 3, 9);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `adminkelas`
--
ALTER TABLE `adminkelas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `kelasId` (`kelasId`),
  ADD KEY `siswaId` (`siswaId`);

--
-- Indexes for table `datamengajar`
--
ALTER TABLE `datamengajar`
  ADD PRIMARY KEY (`id`),
  ADD KEY `kelas_id` (`kelas_id`),
  ADD KEY `mapel_id` (`mapel_id`),
  ADD KEY `guru_id` (`guru_id`);

--
-- Indexes for table `dudi`
--
ALTER TABLE `dudi`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ejurnal`
--
ALTER TABLE `ejurnal`
  ADD PRIMARY KEY (`id`),
  ADD KEY `mengajar_id` (`mengajar_id`);

--
-- Indexes for table `gurus`
--
ALTER TABLE `gurus`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `jadwalmengajar`
--
ALTER TABLE `jadwalmengajar`
  ADD PRIMARY KEY (`id`),
  ADD KEY `mengajar_id` (`mengajar_id`);

--
-- Indexes for table `kelas`
--
ALTER TABLE `kelas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `logabsensi`
--
ALTER TABLE `logabsensi`
  ADD PRIMARY KEY (`id`),
  ADD KEY `mengajar_id` (`mengajar_id`),
  ADD KEY `siswa_id` (`siswa_id`);

--
-- Indexes for table `logabsensiwalkel`
--
ALTER TABLE `logabsensiwalkel`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_siswa` (`siswa_id`),
  ADD KEY `fk_kelas` (`kelas_id`);

--
-- Indexes for table `mapel`
--
ALTER TABLE `mapel`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pengiriman_tugas`
--
ALTER TABLE `pengiriman_tugas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tugas_id` (`tugas_id`),
  ADD KEY `siswa_id` (`siswa_id`);

--
-- Indexes for table `sekolah`
--
ALTER TABLE `sekolah`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `siswa`
--
ALTER TABLE `siswa`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `kelas_id` (`kelas_id`);

--
-- Indexes for table `stafpembayaran`
--
ALTER TABLE `stafpembayaran`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `tugas_kelas`
--
ALTER TABLE `tugas_kelas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `datamengajar_id` (`datamengajar_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `validasimengajar`
--
ALTER TABLE `validasimengajar`
  ADD PRIMARY KEY (`id`),
  ADD KEY `guruId` (`guruId`),
  ADD KEY `siswaId` (`siswaId`),
  ADD KEY `mengajarId` (`mengajarId`),
  ADD KEY `ejurnalId` (`ejurnalId`);

--
-- Indexes for table `wakakesiswaan`
--
ALTER TABLE `wakakesiswaan`
  ADD PRIMARY KEY (`id`),
  ADD KEY `guruId` (`guruId`);

--
-- Indexes for table `wakakurikulum`
--
ALTER TABLE `wakakurikulum`
  ADD PRIMARY KEY (`id`),
  ADD KEY `guru_id` (`guru_id`);

--
-- Indexes for table `walikelas`
--
ALTER TABLE `walikelas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `guru_id` (`guru_id`),
  ADD KEY `kelas_id` (`kelas_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `adminkelas`
--
ALTER TABLE `adminkelas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `datamengajar`
--
ALTER TABLE `datamengajar`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `dudi`
--
ALTER TABLE `dudi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `ejurnal`
--
ALTER TABLE `ejurnal`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `gurus`
--
ALTER TABLE `gurus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `jadwalmengajar`
--
ALTER TABLE `jadwalmengajar`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `kelas`
--
ALTER TABLE `kelas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `logabsensi`
--
ALTER TABLE `logabsensi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT for table `logabsensiwalkel`
--
ALTER TABLE `logabsensiwalkel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `mapel`
--
ALTER TABLE `mapel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `pengiriman_tugas`
--
ALTER TABLE `pengiriman_tugas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `sekolah`
--
ALTER TABLE `sekolah`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `siswa`
--
ALTER TABLE `siswa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `stafpembayaran`
--
ALTER TABLE `stafpembayaran`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tugas_kelas`
--
ALTER TABLE `tugas_kelas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=83141;

--
-- AUTO_INCREMENT for table `validasimengajar`
--
ALTER TABLE `validasimengajar`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `wakakesiswaan`
--
ALTER TABLE `wakakesiswaan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `wakakurikulum`
--
ALTER TABLE `wakakurikulum`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `walikelas`
--
ALTER TABLE `walikelas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `admin`
--
ALTER TABLE `admin`
  ADD CONSTRAINT `admin_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `adminkelas`
--
ALTER TABLE `adminkelas`
  ADD CONSTRAINT `adminkelas_ibfk_1` FOREIGN KEY (`kelasId`) REFERENCES `kelas` (`id`),
  ADD CONSTRAINT `adminkelas_ibfk_2` FOREIGN KEY (`siswaId`) REFERENCES `siswa` (`id`);

--
-- Constraints for table `datamengajar`
--
ALTER TABLE `datamengajar`
  ADD CONSTRAINT `datamengajar_ibfk_1` FOREIGN KEY (`kelas_id`) REFERENCES `kelas` (`id`),
  ADD CONSTRAINT `datamengajar_ibfk_2` FOREIGN KEY (`mapel_id`) REFERENCES `mapel` (`id`),
  ADD CONSTRAINT `datamengajar_ibfk_3` FOREIGN KEY (`guru_id`) REFERENCES `gurus` (`id`);

--
-- Constraints for table `ejurnal`
--
ALTER TABLE `ejurnal`
  ADD CONSTRAINT `ejurnal_ibfk_1` FOREIGN KEY (`mengajar_id`) REFERENCES `datamengajar` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `gurus`
--
ALTER TABLE `gurus`
  ADD CONSTRAINT `gurus_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `jadwalmengajar`
--
ALTER TABLE `jadwalmengajar`
  ADD CONSTRAINT `jadwalmengajar_ibfk_1` FOREIGN KEY (`mengajar_id`) REFERENCES `datamengajar` (`id`);

--
-- Constraints for table `logabsensi`
--
ALTER TABLE `logabsensi`
  ADD CONSTRAINT `logabsensi_ibfk_1` FOREIGN KEY (`mengajar_id`) REFERENCES `datamengajar` (`id`),
  ADD CONSTRAINT `logabsensi_ibfk_2` FOREIGN KEY (`siswa_id`) REFERENCES `siswa` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `logabsensiwalkel`
--
ALTER TABLE `logabsensiwalkel`
  ADD CONSTRAINT `fk_kelas` FOREIGN KEY (`kelas_id`) REFERENCES `kelas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_siswa` FOREIGN KEY (`siswa_id`) REFERENCES `siswa` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `pengiriman_tugas`
--
ALTER TABLE `pengiriman_tugas`
  ADD CONSTRAINT `pengiriman_tugas_ibfk_1` FOREIGN KEY (`tugas_id`) REFERENCES `tugas_kelas` (`id`),
  ADD CONSTRAINT `pengiriman_tugas_ibfk_2` FOREIGN KEY (`siswa_id`) REFERENCES `siswa` (`id`);

--
-- Constraints for table `siswa`
--
ALTER TABLE `siswa`
  ADD CONSTRAINT `siswa_ibfk_2` FOREIGN KEY (`kelas_id`) REFERENCES `kelas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `stafpembayaran`
--
ALTER TABLE `stafpembayaran`
  ADD CONSTRAINT `stafpembayaran_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `tugas_kelas`
--
ALTER TABLE `tugas_kelas`
  ADD CONSTRAINT `tugas_kelas_ibfk_1` FOREIGN KEY (`datamengajar_id`) REFERENCES `datamengajar` (`id`);

--
-- Constraints for table `validasimengajar`
--
ALTER TABLE `validasimengajar`
  ADD CONSTRAINT `validasimengajar_ibfk_1` FOREIGN KEY (`guruId`) REFERENCES `gurus` (`id`),
  ADD CONSTRAINT `validasimengajar_ibfk_2` FOREIGN KEY (`siswaId`) REFERENCES `siswa` (`id`),
  ADD CONSTRAINT `validasimengajar_ibfk_3` FOREIGN KEY (`mengajarId`) REFERENCES `datamengajar` (`id`),
  ADD CONSTRAINT `validasimengajar_ibfk_4` FOREIGN KEY (`ejurnalId`) REFERENCES `ejurnal` (`id`);

--
-- Constraints for table `wakakesiswaan`
--
ALTER TABLE `wakakesiswaan`
  ADD CONSTRAINT `wakakesiswaan_ibfk_1` FOREIGN KEY (`guruId`) REFERENCES `gurus` (`id`);

--
-- Constraints for table `wakakurikulum`
--
ALTER TABLE `wakakurikulum`
  ADD CONSTRAINT `wakakurikulum_ibfk_1` FOREIGN KEY (`guru_id`) REFERENCES `gurus` (`id`);

--
-- Constraints for table `walikelas`
--
ALTER TABLE `walikelas`
  ADD CONSTRAINT `walikelas_ibfk_1` FOREIGN KEY (`guru_id`) REFERENCES `gurus` (`id`),
  ADD CONSTRAINT `walikelas_ibfk_2` FOREIGN KEY (`kelas_id`) REFERENCES `kelas` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
