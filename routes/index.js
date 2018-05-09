const express = require('express');
const router = express.Router();
const {models} = require('../models');
const Sequelize = require('sequelize');

/* GET home page. */

router.get('/', function (req, res) {
    res.render('index', {title:'Quiz'});
});

router.get('/quizzes', (req, res, next) => {
    models.quiz.findAll()
        .then(quizzes => {res.render('quizzes/index.ejs', {quizzes: quizzes});
        })
        .catch(error => next(error));
});


router.get('/credits', (req, res, next) => {
    res.render('credits');
});



module.exports = router;
