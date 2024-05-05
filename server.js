const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const colors = require('colors');
const connectDb = require('./config/connectDb');

//config
dotenv.config();

//port
const PORT = process.env.PORT || 5000;

//rest object
const app = express();

//database connection
connectDb();

// middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/api/v1/users', require('./routes/userRoutes'));
app.use('/api/v1/transactions', require('./routes/transactionRoutes'));

//listen
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`.yellow.bold);
});

// romit2003Expense