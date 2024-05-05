const mongoose = require('mongoose');
const colors = require('colors');

//schema design

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, "Email is already registered"],
        trim: true
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        trim: true
    }
}, 
{
    timestamps: true
});


//export
const userModel = mongoose.model('users', userSchema);
module.exports = userModel;