const Router = require("express").Router();
const User = require("../Model/userModel");
const jwt = require("jsonwebtoken");

Router.post("/register", async (req, res) => {
    // console.log(req.body);
    try {
        const user = await User.create(req.body);
        res.send(user);
        user.save();
    } catch (error) {
        res.json({ status: "error", error: 'Duplicate email' })
    }
});

Router.post("/login", async (req, res) => {
    console.log(req.body)
    try {
        const user = await User.findOne({
            email: req.body.email,
            password: req.body.password
        });

        if (user) {

            const token = jwt.sign({
                username: user.username,
                email: user.email
            },
            'secret123'
            );

            return res.json({ status: "ok", user: token, user2: user });
        } else {
            return res.json({ status: 'error', user: false });
        }

    } catch (error) {
        res.json({ status: "error", error: 'Duplicate email' })
    }
});

module.exports = Router;