const express = require("express"),
    router = express.Router();


router.get("/", (req, res) => {
        res.render("index");
    }).get("/our-firm", (req, res) => {
        res.render("firm");
    })
    .get("/contact-us", (req, res) => {
        res.render("contact-us")
    })
    .get("/our-experience", (req, res) => {
        res.render("experience")
    })
    .get("/prayer-clinic", (req, res) => {
        res.render("prayer-clinic")
    })
    .get("/enterpreneurs-for-christ", (req, res) => {
        res.render("enterpreneurs-for-christ")
    })

module.exports = router;