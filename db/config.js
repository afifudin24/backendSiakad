const mysql = require('mysql2')

const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '123',
  database: 'siakaddaka'
})

db.connect(err => {
  if (err) {
    console.error('Database connection failed: ' + err.stack)
    return
  }
  console.log('Connected to database.')
})

module.exports = db
