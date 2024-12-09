const db = require('../db/config');
const Mapel = {
    getMapel : (callback) => {
        db.query("SELECT * FROM mapel", callback);
    },
    getMapelById : (id, callback) => {
        db.query("SELECT * FROM mapel where id = ? ", [id], callback);
    },
    createMapel : (data, callback) => {
        db.query("INSERT INTO mapel SET  ? ", [data], callback);
    },
    updateMapel : (id, data, callback) => {
        db.query("UPDATE mapel SET ? where id = ? ", [data, id], callback);
    },
    deleteMapel : (id, callback) => {
        db.query("DELETE FROM mapel where id = ? ", [id], callback);
    }
}

module.exports = Mapel;