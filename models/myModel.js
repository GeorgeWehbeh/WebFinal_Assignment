const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const confirmSchema =  new Schema({
    firstname: {type: String, required:true},
    lastname:{type: String, required:true},
    email: {type: String, required: true, unique:true},
    sin:{type: String, required: true},
    password: {type: String, required: true},
    type: {type:String, default:"User"}

});
confirmSchema.pre("save", function(next) {

    bcrypt.genSalt(10)
    .then(salt=> {
        bcrypt.hash(this.password, salt)
        .then(hash=>{
            this.password=hash
            next();
        })
    })
})

const MModel = mongoose.model('myModel', confirmSchema);

module.exports = MModel;