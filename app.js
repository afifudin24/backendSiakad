const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const multer = require('multer');

const app = express();
const cors = require('cors');
const siswaRoutes = require('./routes/siswaRoutes');
const guruRoutes = require('./routes/guruRoutes');
const stafPembayaranRoutes = require('./routes/stafPembayaranRoutes');
const authRoutes = require('./routes/authRoutes');
const kelasRoutes = require('./routes/kelasRoutes');
const walikelasRoutes = require('./routes/walikelasRoutes');
const mapelRoutes = require('./routes/mapelRoutes');
const adminRoutes = require('./routes/adminRoutes');
const userRoutes = require('./routes/userRoutes');
const dataMengajarRoutes = require('./routes/dataMengajarRoutes');
const jadwalMengajarRoutes = require('./routes/jadwalMengajarRoutes');
const tugasRoutes = require('./routes/tugasRoutes');
const pengirimanTugasRoutes = require('./routes/pengirimanTugasRoutes');
const ejurnalRoutes = require('./routes/ejurnalRoutes');
const logAbsensiRoutes = require('./routes/logAbsensiRoutes');
const logAbsensiWalkelRoutes = require('./routes/logAbsensiWalkelRoutes');
const PORT = 8000;

// Gunakan middleware CORS
app.use(cors()); // Mengizinkan semua origin

// Atau, jika Anda ingin mengizinkan origin tertentu:
app.use(
  cors({
    origin: '*', // Ganti dengan URL aplikasi Anda
  }),
);
// Route dasar
const storage = multer.memoryStorage();
const upload = multer({ storage });

app.use(bodyParser.json()); // untuk parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // untuk parsing application/x-www-form-urlencoded
app.use(cookieParser());

app.use('/api/siswa', siswaRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/guru', guruRoutes);
app.use('/api/stafpembayaran', stafPembayaranRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/kelas', kelasRoutes);
app.use('/api/walikelas', walikelasRoutes);
app.use('/api/mapel', mapelRoutes);
app.use('/api/user', userRoutes);
app.use('/api/datamengajar', dataMengajarRoutes);
app.use('/api/jadwalmengajar', jadwalMengajarRoutes);
app.use('/api/tugas', tugasRoutes);
app.use('/api/pengirimantugas', pengirimanTugasRoutes);
app.use('/api/ejurnal', ejurnalRoutes);
app.use('/api/logabsensi', logAbsensiRoutes);
app.use('/api/logabsensiwalkel', logAbsensiWalkelRoutes);

// Route Static
app.use('/uploads', express.static('uploads'));
app.use('/uploads/pdf', express.static('uploads/pdfs'));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  //   console.log('Malam Minggu itu sabtu malam');
});
