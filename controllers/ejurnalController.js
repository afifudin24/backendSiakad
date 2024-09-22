const Ejurnal = require('../models/ejurnalModels');

const EjurnalController = {
  getByGuruId: (req, res) => {
    const { idGuru } = req.params;
    Ejurnal.getByGuruId(idGuru, (err, result) => {
      if (err) return res.status(500).json(err);
      const formattedResults = result.map((row) => ({
        id: row.ejurnal_id,
        tgl_jurnal: row.tanggal_jurnal,
        pembahasan: row.pembahasan,
        jml_hadir: row.jml_hadir,
        jml_sakit: row.jml_sakit,
        jml_izin: row.jml_izin,
        jml_alfa: row.jml_alfa,
        jml_alfa: row.jml_alfa,
        dataMengajar: {
          id: row.data_mengajar_id,
        },
        guru: {
          id: row.guru_id,
          nama: row.nama_guru,
        },
        kelas: {
          id: row.kelas_id,
          tingkat_kelas: row.tingkat_kelas,
          nama_kelas: row.nama_kelas,
        },
        mapel: {
          nama_mapel: row.nama_mapel,
        },
      }));
      res.status(200).json({
        status: 200,
        message: 'Success Get Data',
        data: formattedResults,
      });
    });
  },
  getBymengajarIdDate: (req, res) => {
    const { mengajarId, date } = req.params;
    Ejurnal.getBymengajarIdDate(mengajarId, date, (err, result) => {
      if (err) return res.status(500).json(err);
      const formattedResults = result.map((row) => ({
        id: row.ejurnal_id,
        tgl_jurnal: row.tanggal_jurnal,
        pembahasan: row.pembahasan,
        jml_hadir: row.jml_hadir,
        jml_sakit: row.jml_sakit,
        jml_izin: row.jml_izin,
        jml_alfa: row.jml_alfa,
        jml_alfa: row.jml_alfa,
        dataMengajar: {
          id: row.data_mengajar_id,
        },
        guru: {
          id: row.guru_id,
          nama: row.nama_guru,
        },
        kelas: {
          id: row.kelas_id,
          tingkat_kelas: row.tingkat_kelas,
          nama_kelas: row.nama_kelas,
        },
        mapel: {
          nama_mapel: row.nama_mapel,
        },
      }));
      res.status(200).json({
        message: 'Success Get Data',
        status: 200,
        data: formattedResults,
      });
    });
  },
  getBymengajarIdMonth: (req, res) => {
    const { mengajarId, month, year } = req.params;
    console.log(req.params);
    Ejurnal.getBymengajarIdMonth(mengajarId, month, year, (err, result) => {
      console.log(err);
      console.log(result);
      if (err) return res.status(500).json(err);
      const formattedResults = result.map((row) => ({
        id: row.ejurnal_id,
        tgl_jurnal: row.tanggal_jurnal,
        pembahasan: row.pembahasan,
        jml_hadir: row.jml_hadir,
        jml_sakit: row.jml_sakit,
        jml_izin: row.jml_izin,
        jml_alfa: row.jml_alfa,
        jml_alfa: row.jml_alfa,
        dataMengajar: {
          id: row.data_mengajar_id,
        },
        guru: {
          id: row.guru_id,
          nama: row.nama_guru,
        },
        kelas: {
          id: row.kelas_id,
          tingkat_kelas: row.tingkat_kelas,
          nama_kelas: row.nama_kelas,
        },
        mapel: {
          nama_mapel: row.nama_mapel,
        },
      }));
      res.status(200).json({
        message: 'Success Get Data',
        status: 200,
        data: formattedResults,
      });
    });
  },
  createEjurnal: (req, res) => {
    const data = req.body;
    Ejurnal.createJurnal(data, (err, result) => {
      if (err) return res.status(500).json(err);
      res.status(201).json({
        message: 'Success Add jurnal',
        status: 201,
        data: data,
      });
    });
  },
  updateJurnal: (req, res) => {
    const data = req.body;
    const { id } = req.params;
    Ejurnal.updateJurnal(id, data, (err, result) => {
      if (err) return res.status(500).json(err);
      res.status(201).json({
        message: 'Success Update Jurnal',
        status: 201,
        data: data,
      });
    });
  },
};

module.exports = EjurnalController;
