const db = require('../db/config');

const Admin = {
    getAdmin : (callback) => {
        db.query("SELECT * FROM admin adm JOIN users usr ON adm.user_id = usr.id" , callback);
    },
    getAdminById : (id, callback) => {
        db.query("SELECT * FROM admin where user_id = ? ", [id], callback);
    },
    create : (data, callback) => {
        db.query("INSERT INTO admin SET ? ",  [data], callback );
    },
    update : (id, data, callback) => {
        db.query('UPDATE admin SET ? where user_id = ? ', [data, id], callback);
    },
    delete: (id, callback) => {
        db.query("DELETE FROM admin where user_id = ? ", [id], callback);
    }
} 

module.exports = Admin;