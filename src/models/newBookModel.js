const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const newbookSchema = new mongoose.Schema( {
    name: String,
    author_id: {
        // required : true,
        type: ObjectId,
        ref: "newAuthor"
    }, 
    price: Number,
    ratings: Number,
    publisher_id:{
        // required : true,
        type: ObjectId,
        ref: "newPublisher" 
    },
    isHardCover :{
        type :Boolean ,
        default : false
    }
}, { timestamps: true });

module.exports = mongoose.model('newbook', newbookSchema)

