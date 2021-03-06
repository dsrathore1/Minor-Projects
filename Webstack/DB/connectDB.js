const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await new mongoose.connect(process.env.MONGO_DB,{
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log(`Your DB is connected to ${conn.connection.host}`);
    }catch (error) {
        console.log(error);
    }
}

module.exports = connectDB;