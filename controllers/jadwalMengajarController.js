const JadwalMengajar = require('../models/jadwalMengajarModel');
const JadwalMengajarController = {
  getJadwalMengajar: (req, res) => {
    try {
      JadwalMengajar.getJadwalMengajar((err, result) => {
        if (err) return res.status(500).json(err);
        const formattedResults = result.map((row) => ({
          id: row.jadwal_id,
          dataMengajarId: row.datamengajar_id,
          jamke: row.jamke,
          hari: row.hari,
          jamMulai: row.jamMulai,
          jamSelesai: row.jamSelesai,
          guru: {
            id: row.guru_id,
            nama: row.guru_nama,
          },
          kelas: {
            id: row.kelas_id,
            nama: row.kelas_nama,
            tingkat: row.kelas_tingkat,
          },
          mapel: {
            id: row.mapel_id,
            nama: row.mapel_nama,
          },
        }));
        res.status(200).json({
          data: formattedResults,
          status: 200,
          message: 'Successfully Get Jadwal Mengajar',
        });
      });
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  getJadwalMengajarById: (req, res) => {
    const { id } = req.params;
    try {
      JadwalMengajar.getJadwalMengajarById(id, (err, result) => {
        if (err) return res.status(500).json(err);
        const formattedResults = result.map((row) => ({
          id: row.jadwal_id,
          dataMengajarId: row.datamengajar_id,
          jamke: row.jamke,
          hari: row.hari,
          jamMulai: row.jamMulai,
          jamSelesai: row.jamSelesai,
          guru: {
            id: row.guru_id,
            nama: row.guru_nama,
          },
          kelas: {
            id: row.kelas_id,
            nama: row.kelas_nama,
            tingkat: row.kelas_tingkat,
          },
          mapel: {
            id: row.mapel_id,
            nama: row.mapel_nama,
          },
        }));
        res.status(200).json({
          data: formattedResults,
          status: 200,
          message: 'Successfully Get Jadwal Mengajar',
        });
      });
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  getJadwalMengajarByGuruId: (req, res) => {
    const { id } = req.params;
    try {
      JadwalMengajar.getJadwalMengajarByGuruId(id, (err, result) => {
        if (err) return res.status(500).json(err);
        const formattedResults = result.map((row) => ({
          id: row.jadwal_id,
          dataMengajarId: row.datamengajar_id,
          jamke: row.jamke,
          hari: row.hari,
          jamMulai: row.jamMulai,
          jamSelesai: row.jamSelesai,
          guru: {
            id: row.guru_id,
            nama: row.guru_nama,
          },
          kelas: {
            id: row.kelas_id,
            nama: row.kelas_nama,
            tingkat: row.kelas_tingkat,
          },
          mapel: {
            id: row.mapel_id,
            nama: row.mapel_nama,
          },
        }));
        res.status(200).json({
          data: formattedResults,
          status: 200,
          message: 'Successfully Get Jadwal Mengajar',
        });
      });
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  getJadwalMengajarByKelasId: (req, res) => {
    const { id } = req.params;
    try {
      JadwalMengajar.getJadwalMengajarByKelasId(id, (err, result) => {
        if (err) return res.status(500).json(err);
        const formattedResults = result.map((row) => ({
          id: row.jadwal_id,
          dataMengajarId: row.datamengajar_id,
          jamke: row.jamke,
          hari: row.hari,
          jamMulai: row.jamMulai,
          jamSelesai: row.jamSelesai,
          guru: {
            id: row.guru_id,
            nama: row.guru_nama,
          },
          kelas: {
            id: row.kelas_id,
            nama: row.kelas_nama,
            tingkat: row.kelas_tingkat,
          },
          mapel: {
            id: row.mapel_id,
            nama: row.mapel_nama,
          },
        }));
        res.status(200).json({
          data: formattedResults,
          status: 200,
          message: 'Successfully Get Jadwal Mengajar',
        });
      });
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  getJadwalMengajarByKelasIdHari: (req, res) => {
    const { id, hari } = req.params;
    console.log(req.params);
    try {
      JadwalMengajar.getJadwalMengajarByKelasIdHari(id, hari, (err, result) => {
        if (err) return res.status(500).json(err);
        const formattedResults = result.map((row) => ({
          id: row.jadwal_id,
          dataMengajarId: row.datamengajar_id,
          jamke: row.jamke,
          hari: row.hari,
          jamMulai: row.jamMulai,
          jamSelesai: row.jamSelesai,
          guru: {
            id: row.guru_id,
            nama: row.guru_nama,
          },
          kelas: {
            id: row.kelas_id,
            nama: row.kelas_nama,
            tingkat: row.kelas_tingkat,
          },
          mapel: {
            id: row.mapel_id,
            nama: row.mapel_nama,
          },
        }));
        res.status(200).json({
          data: formattedResults,
          status: 200,
          message: 'Successfully Get Jadwal Mengajar',
        });
      });
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  getJadwalMengajarByGuruIdHari: (req, res) => {
    const { id, hari } = req.params;
    console.log(req.params);
    try {
      JadwalMengajar.getJadwalMengajarByGuruIdHari(id, hari, (err, result) => {
        if (err) return res.status(500).json(err);
        const formattedResults = result.map((row) => ({
          id: row.jadwal_id,
          dataMengajarId: row.datamengajar_id,
          jamke: row.jamke,
          hari: row.hari,
          jamMulai: row.jamMulai,
          jamSelesai: row.jamSelesai,
          guru: {
            id: row.guru_id,
            nama: row.guru_nama,
          },
          kelas: {
            id: row.kelas_id,
            nama: row.kelas_nama,
            tingkat: row.kelas_tingkat,
          },
          mapel: {
            id: row.mapel_id,
            nama: row.mapel_nama,
          },
        }));
        res.status(200).json({
          data: formattedResults,
          status: 200,
          message: 'Successfully Get Jadwal Mengajar',
        });
      });
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  getTotalByGuruId: (req, res) => {
    const { guruId } = req.params;
    JadwalMengajar.countTotal(guruId, (err, result) => {
      if (err) return res.status(500).json(err);
      res.json(result);
    });
  },
  createJadwalMengajar: (req, res) => {
    const data = req.body;
    console.log(data);
    try {
      JadwalMengajar.createJadwal(data, (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(201).json({
          data: data,
          status: 201,
          message: 'Successfully Created Jadwal Mengajar',
        });
      });
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  updateJadwalMengajar: (req, res) => {
    const { id } = req.params;
    const data = req.body;
    try {
      JadwalMengajar.updateJadwal(id, data, (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(201).json({
          status: 201,
          message: 'Succecssfully Updated Jadwal Mengajar',
        });
      });
    } catch (err) {
      return res.status(500).json(err);
    }
  },
  deleteJadwalMengajar: (req, res) => {
    const { id } = req.params;
    try {
      JadwalMengajar.deleteJadwal(id, (err, result) => {
        if (err) return res.status(500).json(err);
        res.status(201).json({
          status: 201,
          message: 'Succecssfully Deleted Jadwal Mengajar',
        });
      });
    } catch (err) {
      return res.status(500).json(err);
    }
  },
};

module.exports = JadwalMengajarController;
