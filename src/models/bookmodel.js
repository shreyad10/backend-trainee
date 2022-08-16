const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName : String, 
    authorName :{
        type : String,
    },
    year : Number ,
    category : String
}, {timestamps : true});

module.exports = mongoose.model('bookIssued', bookSchema)