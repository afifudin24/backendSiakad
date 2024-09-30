const db = require('../db/config');

const Dudi = {
    getAllDudi : (callback) => {
        db.query("SELECT * FROM dudi", callback);
    },
    getDudiByJurusan : (jurusan, callback) => {
        db.query("SELECT * FROM dudi WHERE jurusan = ? ", [jurusan], callback);
    },
    addDudi : (data, callback) => {
        db.query("INSERT INTO dudi SET  ? ", [data], callback);
    },
    updateDudi : (dudiId, data, callback) => {
        db.query("UPDATE dudi SET ? where id = ?", [data, dudiId], callback);
    },
    deleteDudi : (dudiId, callback) => {
        db.query("DELETE FROM dudi WHERE id = ?", [dudiId], callback);
    }
}

module.exports = Dudi;