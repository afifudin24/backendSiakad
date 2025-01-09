const db = require('../db/config')

const ReopenJurnal = {
  getData: callback => {
    db.query(
      `SELECT * FROM reopenJurnal rj JOIN gurus gr ON rj.guruId = gr.id JOIN datamengajar dm ON rj.mengajarId = dm.id JOIN kelas k ON  dm.kelas_id = k.id JOIN mapel m ON dm.mapel_id =  m.id`,
      callback
    )
  },
  getDataByGuruId: (guruId, callback) => {
    db.query(
      `SELECT * FROM reopenJurnal rj JOIN gurus gr ON rj.guruId = gr.id JOIN datamengajar dm ON rj.mengajarId = dm.id JOIN kelas k ON  dm.kelas_id = k.id JOIN mapel m ON dm.mapel_id =  m.id where rj.guruId = ? AND rj.isActive = 1 AND rj.statusDisetujui = 1`,
      [guruId],
      callback
    )
  },
  insertData: (data, callback) => {
    db.query(`INSERT INTO reopenJurnal SET ?`, [data], callback)
  },
  updateData: (id, data, callback) => {
    db.query(
      `UPDATE reopenJurnal SET ? WHERE idReopen = ?`,
      [data, id],
      callback
    )
  },
  deleteData: (id, callback) => {
    db.query(`DELETE FROM reopenJurnal WHERE idReopen = ?`, [id], callback)
  }
}

module.exports = ReopenJurnal
