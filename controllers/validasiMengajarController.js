const { restart } = require('nodemon');
const ValidasiMengajar = require('../models/validasiMengajarModel');

const ValidasiMengajarController = {
    getValidasiMengajarByJurnalIdSiswa : (req,res) => {
        console.log("coba")
        const {jurnalId, siswaId} = req.params;
        ValidasiMengajar.getValidasiMengajarByJurnalIdSiswa(jurnalId, siswaId, (err, result) => {
            if (err) return res.status(500).json(err);
            res.json({
                data : result,
                status : 200,
                message : "Success Get Data"
            })
        })
    },
    getValidasiMengajarByMengajarId : (req, res) => {
      const {mengajarId} = req.params;
      ValidasiMengajar.getValidasiMengajarByMengajarId(mengajarId, (err, result) =>{
        if (err) return res.status(500).json(err);
        console.log(result);
        res.status(200).json({
          data : result,
          message : "Success Get Data"
        })
      })
    },
    insertValidasiMengajar : (req, res) => {
        const data = req.body;
        ValidasiMengajar.insertValidasi(data, (err, result) => {
            if (err) return res.status(500).json(err);
            res.status(201).json({
                data : result,
                status : 201,
                message : "Success Insert Data"
            })
        })
    },
    getRequireValidasi : (req, res) => {
        const {siswaId} = req.params;
        ValidasiMengajar.cekRequireValidasi(siswaId, (err, result) => {
            if (err) return res.status(500).json(err);
            const formattedResults = result.map((row) => ({
                id: row.ejurnalId,
                tgl_jurnal: new Date(row.tgl_jurnal).toLocaleDateString('id-ID'),
                pembahasan: row.pembahasan,
                dataMengajar: {
                  id: row.datamengajarId,
                },
                guru: {
                  id: row.guruId,
                  nama: row.namaGuru,
                },
                kelas: {
                  id: row.kelasId,
                  tingkat_kelas: row.tingkatKelas,
                  nama_kelas: row.titleKelas,
                },
                mapel: {
                  nama_mapel: row.namaMapel,
                },
              }));
              res.status(200).json({
                status: 200,
                message: 'Success Get Data',
                data: formattedResults,
              });
        });

    }
}

module.exports = ValidasiMengajarController;