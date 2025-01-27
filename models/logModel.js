const db = require('../db/config')
const Log = {
  loginLog: async (data, callback) => {
    db.query(`INSERT INTO login_log SET ?`, data, callback)
  },
  getLog: async callback => {
    db.query(
      `
      SELECT 
        ll.*, 
        u.*, 
        CASE 
          WHEN u.role = '3' THEN s.nama 
          WHEN u.role = '2' THEN g.nama 
          ELSE NULL 
        END AS nama_pengguna
      FROM 
        login_log ll 
      JOIN users u ON ll.user_id = u.id
      LEFT JOIN siswa s ON u.id = s.user_id
      LEFT JOIN gurus g ON u.id = g.user_id
      WHERE u.role = '2' OR u.role = '3'
      ORDER BY ll.login_time DESC
      LIMIT 10
      `,
      callback
    )
  }
}

module.exports = Log
