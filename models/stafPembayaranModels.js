const db = require("../db/config");
const StafPembayaran = {
    getStafPembayaran: (callback) => {
        db.query("SELECT * FROM stafpembayaran", callback);
    },
    getStafPembayaranById: (id, callback) => {
        db.query("SELECT * FROM stafpembayaran WHERE user_id = ? ", [id], callback);
    },
    createStafPembayaran: (data, callback) => {
        db.query("INSERT INTO stafpembayaran SET ? ", [data], callback);
    },
    updateStafPembayaran: (id, data, callback) => {
        db.query("UPDATE stafpembayaran SET ? WHERE user_id = ? ", [data, id], callback);
    },
    deleteStafPembayaran: (id, callback) => {
        db.query("DELETE FROM stafpembayaran WHERE user_id = ?", [id], callback);
    }
}

module.exports = StafPembayaran;