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
        // tgl_jurnal: new Date(row.tgl_jurnal).toISOString().split('T')[0],
        tgl_jurnal: new Date(row.tgl_jurnal).toLocaleDateString('id-ID'),
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
  getByKelasIdMonth: (req, res) => {
    const { kelasId, month } = req.params;
    console.log(req.params);
    Ejurnal.getByKelasIdMonth(kelasId, month, (err, result) => {
      console.log(err);
      console.log(result);
      if (err) return res.status(500).json(err);
      const formattedResults = result.map((row) => ({
        id: row.ejurnal_id,
        // tgl_jurnal: new Date(row.tgl_jurnal).toISOString().split('T')[0],
        tgl_jurnal: new Date(row.tgl_jurnal).toLocaleDateString('id-ID'),
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
  getByKelasIdDate: (req, res) => {
    const { kelasId, date } = req.params;
    console.log(req.params);
    Ejurnal.getByKelasIdDate(kelasId, date, (err, result) => {
      console.log(result);
      if (err) return res.status(500).json(err);
      const formattedResults = result.map((row) => ({
        id: row.ejurnal_id,
        // tgl_jurnal: new Date(row.tgl_jurnal).toISOString().split('T')[0],
        tgl_jurnal: new Date(row.tgl_jurnal).toLocaleDateString('id-ID'),
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
  getByGuruIdDate: (req, res) => {
    const { guruId, date } = req.params;
    console.log(req.params);
    Ejurnal.getByGuruIdDate(guruId, date, (err, result) => {
      console.log(result);
      if (err) return res.status(500).json(err);
      const formattedResults = result.map((row) => ({
        id: row.ejurnal_id,
        // tgl_jurnal: new Date(row.tgl_jurnal).toISOString().split('T')[0],
        tgl_jurnal: new Date(row.tgl_jurnal).toLocaleDateString('id-ID'),
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
  getByGuruIdLast7Days: (req, res) => {
    const { guruId } = req.params;

    Ejurnal.getByguruIdLast7Days(guruId, (err, result) => {
      if (err) return res.status(500).json(err);

      // Format and group the result by 'tgl_jurnal'
      const groupedResults = result.reduce((acc, row) => {
        // Format the date as 'YYYY-MM-DD'
        const formattedDate = new Date(row.tgl_jurnal)
          .toLocaleDateString('id-ID', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          })
          .split('/')
          .reverse()
          .join('-');

        // Find if this date already exists in the accumulator
        const existingDate = acc.find(
          (item) => item.tgl_jurnal === formattedDate,
        );

        // Create the journal entry object
        const journalEntry = {
          id: row.ejurnal_id,
          tgl_jurnal: formattedDate,
          pembahasan: row.pembahasan,
          jml_hadir: row.jml_hadir,
          jml_sakit: row.jml_sakit,
          jml_izin: row.jml_izin,
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
        };

        // If the date exists, push the journal entry to the dataJurnal array
        if (existingDate) {
          existingDate.dataJurnal.push(journalEntry);
        } else {
          // If the date doesn't exist, create a new object for that date
          acc.push({
            tgl_jurnal: formattedDate,
            dataJurnal: [journalEntry],
          });
        }

        return acc;
      }, []);
      const formattedResults = result.map((row) => ({
        id: row.ejurnal_id,
        // tgl_jurnal: new Date(row.tgl_jurnal).toISOString().split('T')[0],
        tgl_jurnal: new Date(row.tgl_jurnal).toLocaleDateString('id-ID'),
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

      // Send the grouped results
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
