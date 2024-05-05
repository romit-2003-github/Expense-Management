const transactionModel = require("../models/transactionModels");
const moment = require("moment");

const getAllTransactions = async (req, res) => {
    try {
        const { userId, frequency, selectedDate, type } = req.body;
        const transactions = await transactionModel.find({
            ...(frequency !== 'custom' ? {
                date: {
                    $gte: moment().subtract(Number(frequency), 'd').toDate(),
                },
            } : {
                date: {
                    $gte: moment(selectedDate[0]).toDate(),
                    $lte: moment(selectedDate[1]).toDate(),
                },
            }),
            userId,
            ...(type !== 'all' && {type})
        });
        res.status(200).json({
            message: "All Transactions",
            data: transactions,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Server Error",
        });
    }
};

const addTransactions = async (req, res) => {
    try {
        const newTransaction = new transactionModel(req.body);
        await newTransaction.save();
        res.status(201).json({
            message: "Transaction added successfully",
            data: newTransaction,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Server Error",
        });
    }
};

module.exports = { getAllTransactions, addTransactions }