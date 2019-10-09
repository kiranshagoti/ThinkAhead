const express = require("express");
const router = express.Router();

const data = require("../articleseeds");
const Funeral = require("../models/Funeral");
const Article = require("../models/Article");


const loginCheck = () => {
  return (req, res, next) => {
    // if (req.user)
    if (req.user) {
      // if user is logged in, proceed to the next function
      next();
    } else {
      // else if user is not logged in, redirect to /login
      res.redirect("/auth");
    }
  };
};

router.get("/articles", (req, res) => {
  Article.find()
    .then(data => {
      res.json(data);
    })
    .catch(err => res.json(err));
});

// http://localhost:5555/articleseeds
router.get("/articleseeds", (req, res) => {
  Article.insertMany(data).then(data =>
    console.log(data).catch(err => console.log(err))
  );
});

module.exports = router;
