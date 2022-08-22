const newAuthorModel = require('../models/newAuthorModel')
const newPublisherModel = require('../models/newPublisherModel')
const newBookModel = require('../models/newBookModel')
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const createAuthor = async function (req, res) {
    let data = req.body
    let finalData = await newAuthorModel.create(data)
    res.send({ msg: finalData })
}

// const isValidObjectId = function (objectId) {
//     return mongoose.Types.ObjectId.isValid(objectId)
// }

const createPublisher = async function (req, res) {
    let data = req.body
    let finalData = await newPublisherModel.create(data)
    res.send({ msg: finalData })
}

const createBook = async function (req, res) {
    let data = req.body
    let authord = data.author_id
    let publisherd = data.publisher_id
    let isValid = mongoose.Types.ObjectId.isValid(authord)
    let isValidp = mongoose.Types.ObjectId.isValid(publisherd)
    if (!authord || !publisherd) {
        return res.send({ msg: "Enter author_id and publisher_id" })
    }
    if (isValid === false) {
        return res.send("Invalid length of author_id")
    } else if (isValidp === false) {
        return res.send("Invalid length of publisher id ")
    }
    let result = await newAuthorModel.findById(authord)
    let result2 = await newPublisherModel.findById(publisherd)
    console.log(result, result2)
    if (!result || !result2) {
        return res.send({ msg: "Enter valid author_id or publisher_id" })
    }
    else {
        let finalData = await newBookModel.create(data)
        return res.send({ msg: finalData })
    }
}


const getBookAllDetails = async function (req, res) {
    let allBook = await newBookModel.find().populate('author_id').populate('publisher_id')
    res.send({ data: allBook })

}

const books = async function (req, res) {
    let allBook = await newPublisherModel.find({ name: ['Penguin', 'HarperCollins'] }).select({ _id: 1 })
    let result = await newBookModel.updateMany({ publisher_id: allBook }, { $set: { isHardCover: true, new: true } }, { upsert: true })

    let data = await newAuthorModel.find({ rating: { $gt: 3.5 } }).select({ _id: 1 })
    let result2 = await newBookModel.updateMany({ author_id: data }, { $inc: { price: 10 } }, { upsert: true })

    res.send({ data: result, result2 })

}

module.exports.createAuthor = createAuthor
module.exports.createPublisher = createPublisher
module.exports.createBook = createBook
module.exports.getBookAllDetails = getBookAllDetails
module.exports.books = books





