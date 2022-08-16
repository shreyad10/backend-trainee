const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    firstName: String,
    lastName: String,
    emailId : String,
    gender: {
        type: String,
        enum: ["male", "female", "LGBTQ"] //"falana" will give an error
    },
    age: Number,
    mobile : {
        type : Number,
        unique : true,
        required : true,
    }
    // isIndian: Boolean,
    // parentsInfo: {
    //     motherName: String,
    //     fatherName: String,
    //     siblingName: String
    // },
    // cars: [ String  ]
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema) //users



// ---------------------- BOOK SCHEMA --------------------------

const bookSchema = new mongoose.Schema({
    bookName : String, 
    authorName :{
        type : String,
    },
    year : Number ,
    category : String
}, {timestamps : true});

module.exports = mongoose.model('bookIssued', bookSchema)




// String, Number
// Boolean, Object/json, array