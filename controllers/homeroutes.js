const router = require('express').Router();
const {Post,Comment,User} = require('../models');

router.get('/', (req,res) => {
    res.render('home');
})

module.exports = router;