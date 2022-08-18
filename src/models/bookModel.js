const mongoose = require('mongoose');

// const bookSchema = new mongoose.Schema( {
//     bookName: String, 
//     authorName: String, 
//     tags: [String],

//     isPublished: Boolean,
//     prices: {
//         indianPrice: String,
//         europePrice: String,
//     },
//     sales: {type: Number, default: 10},

//     // " best boook on earth"   [ "Nodejs in detail" , "mongodb in detail", "fronend in detail"] 
//     // {
//         // "ch1 ": "awesome intro to JS",
//         // "ch2" : "intro to nodejs",
//         // "ch3" : "intro to db"
//     //  }
//     summary :  mongoose.Schema.Types.Mixed,
//     isDeleted: Boolean //true on book deletion i.e you flag the document/data as isDeleted: true..(mark "dirty")

// }, { timestamps: true });



// ---------------------------        ASSIGNMENT        ----------------------




const bookSchema = new mongoose.Schema({
    author_id: {
        type: Number,
        required: true,
    },
    name: String,
    price: Number,
    ratings: Number
}, { timestamps: true });



// module.exports = mongoose.model('Author', authorSchema) //users
module.exports = mongoose.model('book', bookSchema) 
