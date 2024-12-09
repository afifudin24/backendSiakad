const User = require('../models/userModels');
const bcrypt = require('bcryptjs');
const UserController = {
    changePassword : async (req, res) => {
        const {id} = req.params;
        const {password} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        User.changePassword(id, hashedPassword, (err, result) => {
            if(err) return res.status(500).json(err);
            res.status(201).json({
                status : 201,
                data : password,
                message : "Successfully Updated Password"
            });
        })
    }
}

module.exports = UserController;