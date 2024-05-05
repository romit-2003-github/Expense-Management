const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: [true, "Please enter the amount"]
    },
    type: {
        type: String,
        required: [true, "Please enter the type"]
    },
    category: {
        type: String,
        required: [true, "Please enter the category"]
    },
    reference:{
        type: String, 
        required: [true, "Please enter the reference"]
    },
    description: {
        type: String,
        required: [true, "Please enter the description"]
    },
    date: {
        type: Date,
        default: Date.now
    }
},
{
    timestamps: true
});


const transactionModel = mongoose.model('transactions', transactionSchema);
module.exports = transactionModel;