const express = require('express');
const router = express.Router();
const MModel = require('../models/myModel.js');
const bcrypt = require("bcryptjs");
const NewMeal = require('../models/createMeal.js');

router.get('/', (req,res)=>
{  
    NewMeal.find({})
      .then((meals)=>{
        const showMeal = meals.map(meal=>{
            return{
                id: meal._id,
                image: meal.image,
                mealName: meal.mealName,
                mealPrice: meal.mealPrice,
                mealDesc: meal.mealDesc,
                topPackage: meal.topPackage
            }
        });

        res.render("index", {data : showMeal});
    })
    .catch(err=>console.log(`Something is whack :${err}`));
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

router.get('/update', (req, res) =>{
    res.render('update');
});

router.post('/confirmation', (req,res)=>{
    const newUser = {
        firstname : req.body.firstname,
        lastname:req.body.lastname,
        email : req.body.email,
        sin: req.body.sin,
        password : req.body.password
    }
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
    const user = new MModel(newUser);
    user.save()
    .then(()=>{
        console.log(`${user}`);
        res.redirect("confirmation");
    })
    .catch(err=>{
        console.log('Error')//if email alrd exists
        res.redirect("emailTaken");
        })
});




// router.post('/registration', (req,res) => {

//     const { firstname, lastname, email, password } = req.body
    
//     const sgMail = require('@sendgrid/mail');
//     sgMail.setApiKey(process.env.SEND_GRID_API_KEY);
//     const msg = {
//       to: `${email}`,
//       from: `gwehbeh@myseneca.ca`,
//       subject: 'Email verification',
//       html: `<strong> You have successfully signed up ${firstname} ${lastname}</br>
//             Email: ${email} !
//             </strong>`,
//     };
    
//     sgMail.send(msg)
//     .then(()=> {
//         res.redirect("/confirmation");
//     })
    
//     .catch(err => {
//         console.log(`Error ${err}`);
//     })

//     const err1 = [];
//     const err2 = [];
//     const err3 = [];
//     const err4 = [];

//     if(req.body.firstname == "") {
//         err1.push("This field must be filled in!");
//     }

//     if(req.body.lastname == "") {
//         err2.push("This field must be filled in!");
//     }

//     if(req.body.email == "") {
//         err3.push("This field must be filled in!");
//     }

//     if(req.body.password == "") {
//         err4.push("This field must be filled in!");
//     }

//     if(err1.length > 0) {
//         res.render('registration', { 
//             title: 'Create account',
//             errorMessages: err1 
//         });
//         return;
//     }

//     if(err2.length > 0) {
//         res.render('registration', { 
//             title: 'Create account',
//             errorMessages: err2
//         });
//         return;
//     }

//     if(err3.length > 0) {
//         res.render('registration', { 
//             title: 'Create account',
//             errorMessages: err3
//         });
//         return;
//     }

//     if(err4.length > 0) {
//         res.render('registration', { 
//             title: 'Create account',
//             errorMessages: err4
//         });
//         return;
//     }
// });   
var item_id = "";

router.put('/updatableMeals/:id', (req, res) =>
{
    item_id = req.params.id;
    console.log(item_id);
    res.redirect('/update');
});

router.put("/Theupdate",(req,res)=>{
    const confirmationMessage = [];
    const meal =
    {
       mealName: req.body.mealName,
       mealPrice: req.body.mealPrice,
       mealDesc: req.body.mealDesc,
       topPackage: req.body.topPackage
    }

    NewMeal.updateOne({_id:item_id},meal)
    .then(()=>{
        res.redirect('/admin');
    })
    .catch(err=>console.log(`Something broke :${err}`));
});

router.get("/updatableMeals", (req, res) =>
{
    NewMeal.find({})
    .then((meals)=>{
      const showMeal = meals.map(meal=>{
          return{
              id: meal._id,
              mealName: meal.mealName,
              mealPrice: meal.mealPrice,
              mealDesc: meal.mealDesc,
              topPackage: meal.topPackage
          }
      });

      res.render("updatableMeals", {
          
          data : showMeal
      });
  })
  .catch(err=>console.log(`Something bougie happened :${err}`));
});
//this shows meals
router.get("/MealPkg", (req,res)=>
{  
    NewMeal.find({})
      .then((meals)=>{
        const showMeal = meals.map(meal=>{
            return{
                id: meal._id,
                mealName: meal.mealName,
                mealPrice: meal.mealPrice,
                mealDesc: meal.mealDesc,
                topPackage: meal.topPackage
            }
        });

        res.render("MealPkg", {data : showMeal});
    })
    .catch(err=>console.log(`Something is whack :${err}`));
});



//this adds meals
router.post('/admin', (req,res)=>
{
  
    const confirmationMessage = [];
    const newMeal = 
    {
        image: req.body.imagename,
        mealName: req.body.mealName,
        mealPrice: req.body.mealPrice,
        mealDesc: req.body.mealDesc,
        topPackage: req.body.topPackage
    }
    const meal = new NewMeal(newMeal);
    
    meal.save()
    .then(() =>{
        confirmationMessage.push("Meal successfully added!");
        console.log(`${meal}`);
        res.render("admin", {confirmationMessage});
    })
    .catch(err=>console.log(`Something is whack :${err}`));
})

router.post('/login', (req,res)=>{
    const err1 = [];
    const err2 = [];

    if(req.body.email == "") {
        err1.push("This field is required.");
    }

    if(req.body.password == "") {
        err2.push("This field is required");
    }

    if(err1.length > 0) {
        res.render('login', { 
            title: 'Create account',
            errorMessages: error2
        });
        return;
    }

    if(err2.length > 0) {
        res.render('login', { 
            title: 'Create account',
            errorMessages: error3
        });
        return;
    }

    MModel.findOne({email:req.body.email})
    .then(user=>{
        const err = [];

        if(user == null){
            err.push("Email/Password incorrect!");
            res.render('login', {err})
        }
        else{
            bcrypt.compare(req.body.password, user.password)
            .then(isMatch=>{
                

                if(isMatch){
                        if(user.type =="admin"){
                            req.session.user = user;
                            res.redirect("admin");
                        }
                        else{
                req.session.user = user;

                res.redirect("user");
                        }
                }

                else{
            err.push("Email/Password incorrect!");
            res.render('login', {err})
                }

            })
            .catch(err=>console.log(`Error ${err}`));
        }
    })
    .catch(err=>console.log(`Error ${err}`));
})

module.exports = router;