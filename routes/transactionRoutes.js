const express = require("express");

const {getAllTransactions,addTransactions} = require("../controllers/transactionControllers");

// router object
const router = express.Router();

// Routes
// Add Transaction || POST
router.post("/addTransaction", addTransactions);

// Get all Transactions || GET
router.post("/getTransaction", getAllTransactions);

module.exports = router;