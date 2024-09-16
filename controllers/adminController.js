const Admin = require('../models/adminModels');
const User = require('../models/userModels');
const bcrypt = require('bcryptjs');

const AdminController = {
    getAdmin : (req, res) => {
        Admin.getAdmin((err, result) => {
            if(err) return res.status(500).json(err);
            res.status(200).json({
                result : result
            })
        })
    },
    createAdmin: async (req, res) => {
        const data = req.body;
        console.log(data);
        try {
            console.log("OK");
            const userId = Math.floor(100 + Math.random() * 900);
            const hashedPassword = await bcrypt.hash(data.tanggal_lahir, 10);

            const user = {
                id : userId,
                username: data.email,
                password: hashedPassword,
                role: 1
            };
            const adminData = {
        ...data,
        user_id: userId // Also use the same userId for the Siswa id
    };

            User.create(user, (err, result) => {
                if (err) return res.status(500).json(result);
                console.log(result);

                Admin.create(adminData, (err, result) => {
                    if (err) return res.status(500).json(err);
                    res.json({
                        response : res.status,
                        data : user,
                        message: 'Admin and User created successfully'
                    });
                });
            });
        } catch (err) {
            res.status(500).json(err);
        }
    },
    updateAdmin : async (req, res) => {
        const data = req.body;
        const {id} = req.params;
        try{
            Admin.update(id, data, (err, result) => {
                if(err) return res.status(500).json(err);
                res.status(201).json({
                    status : 201,
                    data : data,
                    message : "Successfully Updated Admin"
                });
            })
        }catch(err){
            console.log(er);
        }
    },
    deleteAdmin : (req, res) => {
        const {id} = req.params; 
        Admin.delete(id, (err, result) => {
            if(err) return res.status(500).json(err);
            User.delete(id, (err, result) => {
                if (err) return res.status(500).json(err);
                res.status(201).json({
                    status : 201,
                     message: 'Admin successfully Deleted' 
                    });
            })
        })
    }
}

module.exports = AdminController;