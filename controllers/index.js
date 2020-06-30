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

router.post('/registration', (req,res) => {

    const { firstname, lastname, email, password } = req.body
    
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SEND_GRID_API_KEY);
    const msg = {
      to: `${email}`,
      from: `gwehbeh@myseneca.ca`,
      subject: 'Email verification',
      html: `<strong> You have successfully signed up ${firstname} ${lastname}</br>
            Email: ${email} !
            </strong>`,
    };
    
    sgMail.send(msg)
    .then(()=> {
        res.redirect("/confirmation");
    })
    
    .catch(err => {
        console.log(`Error ${err}`);
    })

    const err1 = [];
    const err2 = [];
    const err3 = [];
    const err4 = [];

    if(req.body.firstname == "") {
        err1.push("This field must be filled in!");
    }

    if(req.body.lastname == "") {
        err2.push("This field must be filled in!");
    }

    if(req.body.email == "") {
        err3.push("This field must be filled in!");
    }

    if(req.body.password == "") {
        err4.push("This field must be filled in!");
    }

    if(err1.length > 0) {
        res.render('registration', { 
            title: 'Create account',
            errorMessages: err1 
        });
        return;
    }

    if(err2.length > 0) {
        res.render('registration', { 
            title: 'Create account',
            errorMessages: err2
        });
        return;
    }

    if(err3.length > 0) {
        res.render('registration', { 
            title: 'Create account',
            errorMessages: err3
        });
        return;
    }

    if(err4.length > 0) {
        res.render('registration', { 
            title: 'Create account',
            errorMessages: err4
        });
        return;
    }
});   

module.exports = router;