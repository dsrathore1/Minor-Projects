const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await new mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log(`Your DB is connected at ${conn.connection.host}`);

    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB;