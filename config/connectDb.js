const mongoose = require('mongoose');
const colors = require('colors');
const connectDb = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`MongoDB Database successfully connected: ${conn.connection.host}`.cyan.underline);
    }
    catch(error){
        
        console.log(`${error}`.bgRed);
    }
};

module.exports = connectDb;