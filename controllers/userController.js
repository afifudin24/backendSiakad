const User = require('../models/userModels')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const secretKey = '2345'
const UserController = {
  changePassword: async (req, res) => {
    const { id } = req.params
    const { password } = req.body
    console.log(id)
    console.log(password)
    const hashedPassword = await bcrypt.hash(password, 10)
    User.changePassword(id, hashedPassword, (err, result) => {
      if (err) return res.status(500).json(err)
      console.log(result)
      res.status(200).json({
        status: 200,
        data: password,
        message: 'Successfully Updated Password'
      })
    })
  }
}

module.exports = UserController
