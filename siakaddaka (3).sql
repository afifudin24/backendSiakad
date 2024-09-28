-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 28 Sep 2024 pada 05.02
-- Versi server: 10.4.11-MariaDB
-- Versi PHP: 8.2.12

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
-- Struktur dari tabel `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `nama` varchar(11) NOT NULL,
  `email` varchar(30) NOT NULL,
  `tanggal_lahir` varchar(30) NOT NULL,
  `alamat` varchar(30) NOT NULL,
  `gambar` varchar(40) NOT NULL DEFAULT 'default.jpeg'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `admin`
--

INSERT INTO `admin` (`id`, `user_id`, `nama`, `email`, `tanggal_lahir`, `alamat`, `gambar`) VALUES
(2, 912, 'Afif', 'admin@gmail.com', '2003-01-24', 'Surusunda', 'lanjan.jpeg');

-- --------------------------------------------------------

--
-- Struktur dari tabel `datamengajar`
--

CREATE TABLE `datamengajar` (
  `id` int(11) NOT NULL,
  `guru_id` int(11) NOT NULL,
  `mapel_id` int(11) NOT NULL,
  `kelas_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `datamengajar`
--

INSERT INTO `datamengajar` (`id`, `guru_id`, `mapel_id`, `kelas_id`) VALUES
(1, 8, 1, 3),
(2, 9, 1, 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `dudi`
--

CREATE TABLE `dudi` (
  `id` int(11) NOT NULL,
  `nama` varchar(100) NOT NULL,
  `alamat` text DEFAULT NULL,
  `kontak` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `ejurnal`
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `ejurnal`
--

INSERT INTO `ejurnal` (`id`, `mengajar_id`, `tgl_jurnal`, `pembahasan`, `jml_hadir`, `jml_izin`, `jml_sakit`, `jml_alfa`) VALUES
(1, 1, '2024-09-18', 'Kocak', 30, 3, 2, 1),
(2, 1, '2024-09-20', 'Ini Pembahasan Baru', 30, 2, 3, 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `gurus`
--

CREATE TABLE `gurus` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `email` varchar(20) NOT NULL,
  `nama` varchar(20) NOT NULL,
  `tanggal_lahir` date NOT NULL,
  `alamat` varchar(30) NOT NULL,
  `no_telepon` varchar(20) NOT NULL,
  `gambar` varchar(50) DEFAULT 'default.jpg'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `gurus`
--

INSERT INTO `gurus` (`id`, `user_id`, `email`, `nama`, `tanggal_lahir`, `alamat`, `no_telepon`, `gambar`) VALUES
(1, 1, 'ahmad.salim@example.', 'Ahmad Salim', '1980-02-15', 'Jl. Merpati No. 23, Jakarta', '081234567890', 'ahmad_salim.jpg'),
(2, 2, 'nurul.hidayah@exampl', 'Nurul Hidayah', '1985-05-22', 'Jl. Anggrek No. 12, Bandung', '081234567891', 'nurul_hidayah.jpg'),
(3, 3, 'muhammad.fauzi@examp', 'Muhammad Fauzi', '1978-11-30', 'Jl. Kenanga No. 5, Surabaya', '081234567892', 'muhammad_fauzi.jpg'),
(4, 4, 'siti.khairunnisa@exa', 'Siti Khairunnisa', '1990-08-17', 'Jl. Melati No. 9, Yogyakarta', '081234567893', 'siti_khairunnisa.jpg'),
(8, 25327, 'kocak@gmail.com', 'Afif Dong', '2003-01-24', 'Surusunda', '081548769365', 'default.jpg'),
(9, 73571, 'guru@gmail.com', 'Afif Udin', '2003-01-24', 'Surusunda', '081548769365', '1726465937862_download (2).jpeg');

-- --------------------------------------------------------

--
-- Struktur dari tabel `jadwalmengajar`
--

CREATE TABLE `jadwalmengajar` (
  `id` int(11) NOT NULL,
  `mengajar_id` int(11) NOT NULL,
  `jamke` varchar(10) NOT NULL,
  `hari` varchar(20) NOT NULL,
  `jam_mulai` time NOT NULL,
  `jam_selesai` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `jadwalmengajar`
--

INSERT INTO `jadwalmengajar` (`id`, `mengajar_id`, `jamke`, `hari`, `jam_mulai`, `jam_selesai`) VALUES
(3, 1, '3 - 4', 'Sabtu', '08:20:00', '10:00:00');

-- --------------------------------------------------------

--
-- Struktur dari tabel `kelas`
--

CREATE TABLE `kelas` (
  `id` int(11) NOT NULL,
  `title` varchar(20) NOT NULL,
  `tingkat` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `kelas`
--

INSERT INTO `kelas` (`id`, `title`, `tingkat`) VALUES
(1, 'TKJ 1', 12),
(3, 'TKJ 3', 11);

-- --------------------------------------------------------

--
-- Struktur dari tabel `logabsensi`
--

CREATE TABLE `logabsensi` (
  `id` int(11) NOT NULL,
  `mengajar_id` int(11) NOT NULL,
  `siswa_id` int(11) NOT NULL,
  `tgl_absen` date NOT NULL,
  `pertemuan_ke` int(11) NOT NULL,
  `status_absensi` enum('H','I','S','A') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `logabsensi`
--

INSERT INTO `logabsensi` (`id`, `mengajar_id`, `siswa_id`, `tgl_absen`, `pertemuan_ke`, `status_absensi`) VALUES
(1, 1, 10, '2024-09-12', 1, 'H'),
(2, 1, 12, '2024-09-12', 1, 'H'),
(3, 1, 10, '2024-09-27', 2, 'A'),
(4, 1, 12, '2024-09-27', 2, 'A'),
(7, 1, 12, '2024-09-26', 0, 'I'),
(8, 1, 10, '2024-09-26', 0, 'I');

-- --------------------------------------------------------

--
-- Struktur dari tabel `logabsensiwalkel`
--

CREATE TABLE `logabsensiwalkel` (
  `id` int(11) NOT NULL,
  `siswa_id` int(11) NOT NULL,
  `kelas_id` int(11) NOT NULL,
  `tgl_absen` date NOT NULL,
  `status_absen` enum('H','A','I','S') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `logabsensiwalkel`
--

INSERT INTO `logabsensiwalkel` (`id`, `siswa_id`, `kelas_id`, `tgl_absen`, `status_absen`) VALUES
(1, 12, 1, '2024-09-25', 'S'),
(2, 10, 1, '2024-09-25', 'I'),
(11, 10, 1, '2024-09-28', 'H'),
(12, 12, 1, '2024-09-28', 'I'),
(13, 10, 1, '2024-09-26', 'I'),
(14, 12, 1, '2024-09-26', 'A'),
(15, 10, 1, '2024-09-27', 'A'),
(16, 12, 1, '2024-09-27', 'I'),
(17, 10, 1, '2024-09-29', 'A'),
(18, 12, 1, '2024-09-29', 'A'),
(19, 10, 1, '2024-10-02', 'I'),
(20, 12, 1, '2024-10-02', 'A');

-- --------------------------------------------------------

--
-- Struktur dari tabel `mapel`
--

CREATE TABLE `mapel` (
  `id` int(11) NOT NULL,
  `kodeMapel` varchar(20) NOT NULL,
  `namaMapel` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `mapel`
--

INSERT INTO `mapel` (`id`, `kodeMapel`, `namaMapel`) VALUES
(1, 'BINDO', 'Bahasa indonesia'),
(3, 'BING', 'Bahasa Inggris');

-- --------------------------------------------------------

--
-- Struktur dari tabel `pengiriman_tugas`
--

CREATE TABLE `pengiriman_tugas` (
  `id` int(11) NOT NULL,
  `tugas_id` int(11) NOT NULL,
  `siswa_id` int(11) NOT NULL,
  `tanggal_pengumpulan` datetime NOT NULL DEFAULT current_timestamp(),
  `file` varchar(255) NOT NULL,
  `status` enum('submitted','late') DEFAULT 'submitted'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `pengiriman_tugas`
--

INSERT INTO `pengiriman_tugas` (`id`, `tugas_id`, `siswa_id`, `tanggal_pengumpulan`, `file`, `status`) VALUES
(1, 4, 10, '2024-09-22 04:14:57', 'data', 'submitted');

-- --------------------------------------------------------

--
-- Struktur dari tabel `pkl`
--

CREATE TABLE `pkl` (
  `id` int(11) NOT NULL,
  `dudi_id` int(11) NOT NULL,
  `guru_id` int(11) NOT NULL,
  `siswa_id` int(11) NOT NULL,
  `jurusan` varchar(100) NOT NULL,
  `progres` varchar(50) DEFAULT 'pengabdian',
  `tanggal_mulai` date DEFAULT NULL,
  `tanggal_selesai` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `siswa`
--

CREATE TABLE `siswa` (
  `id` int(11) NOT NULL,
  `user_id` int(15) NOT NULL,
  `kelas_id` int(11) NOT NULL,
  `nama` varchar(100) DEFAULT NULL,
  `nis` varchar(20) DEFAULT NULL,
  `alamat` text DEFAULT NULL,
  `hobi` varchar(100) DEFAULT NULL,
  `tanggal_lahir` date DEFAULT NULL,
  `gambar` varchar(255) DEFAULT 'default.jpg',
  `no_hp` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `siswa`
--

INSERT INTO `siswa` (`id`, `user_id`, `kelas_id`, `nama`, `nis`, `alamat`, `hobi`, `tanggal_lahir`, `gambar`, `no_hp`) VALUES
(10, 774, 1, 'aw', '18195012', 'Surusunda', 'Ga ada', '2003-01-24', '1726498253261_download (2).jpeg', '081548769465'),
(12, 277, 1, 'Udin Saja', '181951223', 'Surusunda', 'Ga ada', '2003-01-24', 'default.jpg', '081548769465');

-- --------------------------------------------------------

--
-- Struktur dari tabel `stafpembayaran`
--

CREATE TABLE `stafpembayaran` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `nama` varchar(30) NOT NULL,
  `email` varchar(40) NOT NULL,
  `tanggal_lahir` date NOT NULL,
  `alamat` varchar(30) NOT NULL,
  `gambar` varchar(40) NOT NULL DEFAULT 'default.jpg'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Struktur dari tabel `tugas_kelas`
--

CREATE TABLE `tugas_kelas` (
  `id` int(11) NOT NULL,
  `kelas_id` int(11) NOT NULL,
  `mapel_id` int(11) NOT NULL,
  `guru_id` int(11) NOT NULL,
  `judul_tugas` varchar(255) NOT NULL,
  `deskripsi` text DEFAULT NULL,
  `tanggal_dibuat` datetime DEFAULT current_timestamp(),
  `tanggal_deadline` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `tugas_kelas`
--

INSERT INTO `tugas_kelas` (`id`, `kelas_id`, `mapel_id`, `guru_id`, `judul_tugas`, `deskripsi`, `tanggal_dibuat`, `tanggal_deadline`) VALUES
(4, 1, 1, 9, 'Tugas Baru', 'Baru tugas', '2024-09-22 08:50:54', '2024-09-17 08:50:32'),
(5, 1, 3, 9, 'Tugas Baru', 'Baru tugas', '2024-09-22 08:50:54', '2024-09-17 08:50:32');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(20) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `role`) VALUES
(1, '123456', '$2a$10$EgnNwC05vX7krQMsAFPXlejnbFR6X0Sx5fnQLsD.0FD7YLloFRhoG', 3),
(2, '123457', '$2a$10$EgnNwC05vX7krQMsAFPXlejnbFR6X0Sx5fnQLsD.0FD7YLloFRhoG', 3),
(3, '123458', '$2a$10$EgnNwC05vX7krQMsAFPXlejnbFR6X0Sx5fnQLsD.0FD7YLloFRhoG', 3),
(4, '123459', '$2a$10$EgnNwC05vX7krQMsAFPXlejnbFR6X0Sx5fnQLsD.0FD7YLloFRhoG', 3),
(277, '181951223', '$2a$10$L6PWOIsJMjZt7FqCr6nllO72MB0f3MTPYGj9v/QureOMSjMzq04Wi', 3),
(774, '18195012', '$2a$10$pPZ6eY9JNiEVySTaJZv83.Jf7DDecGXqYhXbSI.JKCOs1nWkac6py', 3),
(912, 'admin@gmail.com', '$2a$10$KQYFWAFT797Ie0mRT7oj9uzcCBBjwjriOrE9ywnfZivKttAGM7qnS', 1),
(987, 'staf@gmail.com', '$2a$10$AyR/QRlewCirNQDaqD8Y7.UEZUZKzxB/hcRNQpKvJlAKgKtSX4iFO', 4),
(25327, 'kocak@gmail.com', '$2a$10$pLdB3wmDFTTyXQ6d2zKlTuKOrOSRrHwFexgXeH5cTqzNYwHc3geKW', 2),
(73571, 'guru@gmail.com', '$2a$10$5SrwfsWGTtkmUr0DL6vimuqjQxDA2O85SZP1/rggjwgLdUjTnhXoC', 2);

-- --------------------------------------------------------

--
-- Struktur dari tabel `walikelas`
--

CREATE TABLE `walikelas` (
  `id` int(11) NOT NULL,
  `kelas_id` int(5) NOT NULL,
  `guru_id` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `walikelas`
--

INSERT INTO `walikelas` (`id`, `kelas_id`, `guru_id`) VALUES
(1, 1, 8),
(2, 1, 8),
(3, 3, 9);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indeks untuk tabel `datamengajar`
--
ALTER TABLE `datamengajar`
  ADD PRIMARY KEY (`id`),
  ADD KEY `kelas_id` (`kelas_id`),
  ADD KEY `mapel_id` (`mapel_id`),
  ADD KEY `guru_id` (`guru_id`);

--
-- Indeks untuk tabel `dudi`
--
ALTER TABLE `dudi`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `ejurnal`
--
ALTER TABLE `ejurnal`
  ADD PRIMARY KEY (`id`),
  ADD KEY `mengajar_id` (`mengajar_id`);

--
-- Indeks untuk tabel `gurus`
--
ALTER TABLE `gurus`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indeks untuk tabel `jadwalmengajar`
--
ALTER TABLE `jadwalmengajar`
  ADD PRIMARY KEY (`id`),
  ADD KEY `mengajar_id` (`mengajar_id`);

--
-- Indeks untuk tabel `kelas`
--
ALTER TABLE `kelas`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `logabsensi`
--
ALTER TABLE `logabsensi`
  ADD PRIMARY KEY (`id`),
  ADD KEY `mengajar_id` (`mengajar_id`),
  ADD KEY `siswa_id` (`siswa_id`);

--
-- Indeks untuk tabel `logabsensiwalkel`
--
ALTER TABLE `logabsensiwalkel`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_siswa` (`siswa_id`),
  ADD KEY `fk_kelas` (`kelas_id`);

--
-- Indeks untuk tabel `mapel`
--
ALTER TABLE `mapel`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `pengiriman_tugas`
--
ALTER TABLE `pengiriman_tugas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tugas_id` (`tugas_id`),
  ADD KEY `siswa_id` (`siswa_id`);

--
-- Indeks untuk tabel `pkl`
--
ALTER TABLE `pkl`
  ADD PRIMARY KEY (`id`),
  ADD KEY `dudi_id` (`dudi_id`),
  ADD KEY `guru_id` (`guru_id`),
  ADD KEY `siswa_id` (`siswa_id`);

--
-- Indeks untuk tabel `siswa`
--
ALTER TABLE `siswa`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `kelas_id` (`kelas_id`);

--
-- Indeks untuk tabel `stafpembayaran`
--
ALTER TABLE `stafpembayaran`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indeks untuk tabel `tugas_kelas`
--
ALTER TABLE `tugas_kelas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `kelas_id` (`kelas_id`),
  ADD KEY `mapel_id` (`mapel_id`),
  ADD KEY `guru_id` (`guru_id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `walikelas`
--
ALTER TABLE `walikelas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `guru_id` (`guru_id`),
  ADD KEY `kelas_id` (`kelas_id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `datamengajar`
--
ALTER TABLE `datamengajar`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `dudi`
--
ALTER TABLE `dudi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `ejurnal`
--
ALTER TABLE `ejurnal`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT untuk tabel `gurus`
--
ALTER TABLE `gurus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT untuk tabel `jadwalmengajar`
--
ALTER TABLE `jadwalmengajar`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `kelas`
--
ALTER TABLE `kelas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `logabsensi`
--
ALTER TABLE `logabsensi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT untuk tabel `logabsensiwalkel`
--
ALTER TABLE `logabsensiwalkel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT untuk tabel `mapel`
--
ALTER TABLE `mapel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT untuk tabel `pengiriman_tugas`
--
ALTER TABLE `pengiriman_tugas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `pkl`
--
ALTER TABLE `pkl`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `siswa`
--
ALTER TABLE `siswa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT untuk tabel `stafpembayaran`
--
ALTER TABLE `stafpembayaran`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `tugas_kelas`
--
ALTER TABLE `tugas_kelas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73572;

--
-- AUTO_INCREMENT untuk tabel `walikelas`
--
ALTER TABLE `walikelas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `admin`
--
ALTER TABLE `admin`
  ADD CONSTRAINT `admin_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Ketidakleluasaan untuk tabel `datamengajar`
--
ALTER TABLE `datamengajar`
  ADD CONSTRAINT `datamengajar_ibfk_1` FOREIGN KEY (`kelas_id`) REFERENCES `kelas` (`id`),
  ADD CONSTRAINT `datamengajar_ibfk_2` FOREIGN KEY (`mapel_id`) REFERENCES `mapel` (`id`),
  ADD CONSTRAINT `datamengajar_ibfk_3` FOREIGN KEY (`guru_id`) REFERENCES `gurus` (`id`);

--
-- Ketidakleluasaan untuk tabel `ejurnal`
--
ALTER TABLE `ejurnal`
  ADD CONSTRAINT `ejurnal_ibfk_1` FOREIGN KEY (`mengajar_id`) REFERENCES `datamengajar` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `gurus`
--
ALTER TABLE `gurus`
  ADD CONSTRAINT `gurus_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Ketidakleluasaan untuk tabel `jadwalmengajar`
--
ALTER TABLE `jadwalmengajar`
  ADD CONSTRAINT `jadwalmengajar_ibfk_1` FOREIGN KEY (`mengajar_id`) REFERENCES `datamengajar` (`id`);

--
-- Ketidakleluasaan untuk tabel `logabsensi`
--
ALTER TABLE `logabsensi`
  ADD CONSTRAINT `logabsensi_ibfk_1` FOREIGN KEY (`mengajar_id`) REFERENCES `datamengajar` (`id`),
  ADD CONSTRAINT `logabsensi_ibfk_2` FOREIGN KEY (`siswa_id`) REFERENCES `siswa` (`id`);

--
-- Ketidakleluasaan untuk tabel `logabsensiwalkel`
--
ALTER TABLE `logabsensiwalkel`
  ADD CONSTRAINT `fk_kelas` FOREIGN KEY (`kelas_id`) REFERENCES `kelas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_siswa` FOREIGN KEY (`siswa_id`) REFERENCES `siswa` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Ketidakleluasaan untuk tabel `pengiriman_tugas`
--
ALTER TABLE `pengiriman_tugas`
  ADD CONSTRAINT `pengiriman_tugas_ibfk_1` FOREIGN KEY (`tugas_id`) REFERENCES `tugas_kelas` (`id`),
  ADD CONSTRAINT `pengiriman_tugas_ibfk_2` FOREIGN KEY (`siswa_id`) REFERENCES `siswa` (`id`);

--
-- Ketidakleluasaan untuk tabel `pkl`
--
ALTER TABLE `pkl`
  ADD CONSTRAINT `pkl_ibfk_1` FOREIGN KEY (`dudi_id`) REFERENCES `dudi` (`id`),
  ADD CONSTRAINT `pkl_ibfk_2` FOREIGN KEY (`guru_id`) REFERENCES `gurus` (`id`),
  ADD CONSTRAINT `pkl_ibfk_3` FOREIGN KEY (`siswa_id`) REFERENCES `siswa` (`id`);

--
-- Ketidakleluasaan untuk tabel `siswa`
--
ALTER TABLE `siswa`
  ADD CONSTRAINT `siswa_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `siswa_ibfk_2` FOREIGN KEY (`kelas_id`) REFERENCES `kelas` (`id`);

--
-- Ketidakleluasaan untuk tabel `stafpembayaran`
--
ALTER TABLE `stafpembayaran`
  ADD CONSTRAINT `stafpembayaran_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Ketidakleluasaan untuk tabel `tugas_kelas`
--
ALTER TABLE `tugas_kelas`
  ADD CONSTRAINT `tugas_kelas_ibfk_1` FOREIGN KEY (`kelas_id`) REFERENCES `kelas` (`id`),
  ADD CONSTRAINT `tugas_kelas_ibfk_2` FOREIGN KEY (`mapel_id`) REFERENCES `mapel` (`id`),
  ADD CONSTRAINT `tugas_kelas_ibfk_3` FOREIGN KEY (`guru_id`) REFERENCES `gurus` (`id`);

--
-- Ketidakleluasaan untuk tabel `walikelas`
--
ALTER TABLE `walikelas`
  ADD CONSTRAINT `walikelas_ibfk_1` FOREIGN KEY (`guru_id`) REFERENCES `gurus` (`id`),
  ADD CONSTRAINT `walikelas_ibfk_2` FOREIGN KEY (`kelas_id`) REFERENCES `kelas` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
