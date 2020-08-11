const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mealSchema =  new Schema({
    image: { type: Buffer, required: true },
    mealName: {type: String, required:true},
    mealPrice: {type: String},
    mealDesc: {type: String},
    topPackage: {type: String}

});

const newMeal = mongoose.model('mealDB', mealSchema);

module.exports = newMeal;