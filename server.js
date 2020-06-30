const express = require('express');
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

const indexcontroller = require("./controllers/index");
const registercontroller = require("./controllers/registration");
const mealPkgcontroller = require("./controllers/MealPkg");
const logincontroller = require("./controllers/login");
const recovercontroller = require("./controllers/recover");
const confirmationcontroller = require("./controllers/confirmation");

app.use("/", indexcontroller);
app.use("/registration", registercontroller);
app.use("/MealPkg", mealPkgcontroller);
app.use("/login", logincontroller);
app.use("/recover", recovercontroller);
app.use("/confirmation", confirmationcontroller);

app.post('/login', (req,res) => {
const err1 = [];
const err2 = [];

if(req.body.email == ""){
err1.push("This field must be filled in!");
}
if(req.body.password == ""){
err2.push("This field must be filled in!");
}
if(err1.length > 0){
res.render('login', {
    title: 'Login',
    errorMessages: err1
});
return;
}
else if(err2.length > 0){
res.render('login',{
    title:'Login',
    errorMessages: err2
});
return;
}
else{
    res.redirect("/");
}
});
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log('Server starting at port', PORT);
});