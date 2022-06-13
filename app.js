const express = require("express");
const PORT = process.env.PORT || 4040;
const mainRoutes = require("./Routes/routes");
const dotenv = require("dotenv");
const connectDB = require("./DB/connectDB");
const bodyParser = require("body-parser");

const app = express();
dotenv.config({ path: "config.env" });

app.set("view engine", "ejs");
app.set("views", "view");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static("Assets"));
app.use(mainRoutes);

connectDB();

app.listen(PORT, () => {
    console.log(`Your site is live on http://localhost:${PORT}`);
});