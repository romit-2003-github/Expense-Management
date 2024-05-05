const userModel = require('../models/userModels');

// Login callback
const loginController = async (req, res) => {
    try{
        const {email, password} = req.body;
        const user = await userModel.findOne({email, password});
        if(!user)
        {
            res.status(400).json({
                success: false,
                message: "Invalid credentials"
            });
        }
        res.status(200).json({
            success: true, 
            user
        });
    }
    catch(error){
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// register callback
const registerController = async (req, res) => {
    try{
        const {name, email, password} = req.body;
        const user = await userModel.create({name, email, password});
        res.status(201).json({
            success: true,
            user
        });
    }
    catch(error){
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {loginController, registerController};