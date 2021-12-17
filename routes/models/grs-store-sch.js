// File: ./models/grs-article-sch.js

//Require Mongoose
const mongoose = require('mongoose');


//Define a schema
const Schema = mongoose.Schema;

const grsArticleSchema = new Schema({
    article_id: Number,
    supplier_id: Number,
    article_name: String,
    article_size: String,
    articlequality: String,
    measure: String
});

//Export function to create "SomeModel" model class
module.exports = mongoose.model('grsArticle', grsArticleSchema);