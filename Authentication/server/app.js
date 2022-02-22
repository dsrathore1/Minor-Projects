const express = require("express");
const dotenv = require('dotenv');
const cors = require("cors");
const connectDB = require("./DB/connectDB");
const UserRoute = require("./Routes/userRoute");

dotenv.config({ path: "config.env" });  //! Initialize env file 

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(cors());
app.use(UserRoute); //! Get all the routes from Routes folder

connectDB() //! Connection to the DB

app.listen(PORT, () => {
    console.log(`Your port is live on http://localhost:${PORT}`);
});