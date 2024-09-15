const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const siswaRoutes = require('./routes/siswaRoutes');
const guruRoutes = require('./routes/guruRoutes');
const authRoutes = require('./routes/authRoutes');
const kelasRoutes = require('./routes/kelasRoutes');
const walikelasRoutes = require('./routes/walikelasRoutes');
const bodyParser = require('body-parser')
const PORT = 3000;
const db = require('./db/config')
// Route dasar

app.use(bodyParser.json()); // untuk parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // untuk parsing application/x-www-form-urlencoded
app.use(cookieParser());

app.use('/api/siswa', siswaRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/guru', guruRoutes);
app.use('/api/kelas', kelasRoutes);
app.use('/api/walikelas', walikelasRoutes);
app.listen(PORT, () => {
   console.log(`Server is running on http://localhost:${PORT}`);
})
