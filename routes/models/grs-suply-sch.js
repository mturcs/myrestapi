// File: ./models/grs-registry-sch.js

//Require Mongoose
const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;

const grsSuplySchema = new Schema({
    suplierName: String,
    suplierAddress: String,
    registrationAddress: String
});

//Export function to create "SomeModel" model class
module.exports = mongoose.model('grsSuply', grsSuplySchema);