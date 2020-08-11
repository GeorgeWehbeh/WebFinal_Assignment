const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose'); 
const app = express();

const exphbs = require('express-handlebars');
const path = require("path");
const { urlencoded } = require('express');
require('dotenv').config({
    path:"./config/keys.env"});
app.engine('handlebars', exphbs({
    defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({
        extended: false}));

app.use(express.json());

///////////////////////////
app.use((req,res,next)=>{
    if(req.query.method=="PUT"){
        req.method="PUT"
    }
    else if(req.query.method=="DELETE"){
        req.method="DELETE"
    }
    next();
});
app.use(session({   
    secret: `${process.env._secret}`,
    resave: false,
    saveUninitialized: true
  }));
  
app.use((req,res,next)=>{  
    res.locals.user = req.session.user;
    next();
});
///////////////////////////

const indexcontroller = require("./controllers/index");
const registercontroller = require("./controllers/registration");
const mealPkgcontroller = require("./controllers/MealPkg");
const logincontroller = require("./controllers/login");
const recovercontroller = require("./controllers/recover");
const confirmationcontroller = require("./controllers/confirmation");
const userController = require("./controllers/user");
const outController =require("./controllers/logout");
const adminController =require("./controllers/admin");

app.use("/", indexcontroller);
app.use("/registration", registercontroller);
app.use("/MealPkg", mealPkgcontroller);
app.use("/login", logincontroller);
app.use("/recover", recovercontroller);
app.use("/confirmation", confirmationcontroller);
app.use("/user", userController);
app.use("/logout", outController);
app.use("/admin", adminController);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log('Server starting at port', PORT);
});

mongoose.connect(process.env.MONGO_DB_URL, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true})
.then(()=>{
    console.log(`Connected to MongoDB Database`);
})
.catch(err=>console.log(`Error occured when connecting to database ${err}`));