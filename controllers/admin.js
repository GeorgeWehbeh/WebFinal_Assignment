const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.render('index');
});

router.get('/MealPkg', (req, res) =>{
    res.render('MealPkg');
});

router.get('/registration', (req, res) =>{
    res.render('registration');
});

router.get('/login', (req, res) =>{
    res.render('login');
});

router.get('/recover', (req, res) =>{
    res.render('recover');
});

router.get('/confirmation', (req, res) =>{
    res.render('confirmation');
});
router.get('/emailTaken', (req, res) =>{
    res.render('emailTaken');
});

router.get('/user', (req, res) =>{
    res.render('user');
});

router.get('/admin', (req, res) =>{
    res.render('admin');
});

router.get('/logout', function (req, res) {
    req.session.destroy();
    res.redirect('/login');
    console.log("Session terminated");
});
module.exports = router;