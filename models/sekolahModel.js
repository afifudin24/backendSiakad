const db = require('../db/config');
const Sekolah = {
  getData: (callback) => {
    db.query(`SELECT * FROM sekolah LIMIT 1`, callback);
  },
  insertData: (data, callback) => {
    db.query(`INSERT INTO sekolah SET ?`, [data], callback);
  },
  updateData: (data, callback) => {
    db.query(`update sekolah SET  ?`, [data], callback);
  },
};

module.exports = Sekolah;
