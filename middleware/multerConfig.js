// middleware/multerConfig.js
// Upload gambar
const multer = require('multer');
const path = require('path');

// Konfigurasi penyimpanan gambar
const imageStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/'); // Folder tujuan penyimpanan gambar
  },
  filename: (req, file, cb) => {
    const fileName = `${Date.now()}_${file.originalname.replace(/\s+/g, '_')}`;
    cb(null, fileName); // Buat nama file unik
  },
});

// Filter file untuk memastikan hanya gambar yang diupload
const imageFileFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname);
  if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
    return cb(new Error('Only images are allowed'));
  }
  cb(null, true);
};

// Upload PDF
// Konfigurasi penyimpanan PDF
const pdfStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../uploads/pdfs')); // Folder tujuan penyimpanan PDF
  },
  filename: (req, file, cb) => {
    const fileName = `${Date.now()}_${file.originalname.replace(
      /\s+/g,
      '%20',
    )}`;
    cb(null, fileName); // Buat nama file unik
  },
});

// Filter file untuk memastikan hanya PDF yang diupload
const pdfFileFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname).toLowerCase();
  if (ext !== '.pdf') {
    return cb(new Error('Only PDF files are allowed'), false);
  }
  cb(null, true);
};

// Inisialisasi multer untuk PDF
const uploadPDFs = multer({
  storage: pdfStorage,
  fileFilter: pdfFileFilter,
  limits: { fileSize: 10 * 1024 * 1024 }, // Batas ukuran file 10MB (opsional)
});

// Inisialisasi multer
const uploadImages = multer({
  storage: imageStorage,
  fileFilter: imageFileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // Batas ukuran file 5MB (opsional)
});

// Export uploadImages dan uploadPDFs
module.exports = {
  uploadImages,
  uploadPDFs,
};
