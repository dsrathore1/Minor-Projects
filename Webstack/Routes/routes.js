const Router = require("express").Router();
const myModel = require("../Model/testModel");
Router.get("/", (req, res) => {
    res.render("index.ejs");
});

Router.post("/", async (req, res) => {
    const model = new myModel(req.body);

    await model.save().then(item => {
        res.render("index.ejs", {
            item: item
        });
        console.log(item);
    }).catch(err => {
        console.log(err);
    });;
});

module.exports = Router;