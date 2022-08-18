const { count } = require("console")
const BookModel = require("../models/bookModel")
const authorModel = require("../models/authorModel")

// const createBook= async function (req, res) {
//     let data= req.body

//     let savedData= await BookModel.create(data)
//     res.send({msg: savedData})
// }

// const getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find( {authorName : "HO" } )
//     console.log(allBooks)
//     if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
//     else res.send({msg: "No books found" , condition: false})
// }


// const updateBooks= async function (req, res) {
//     let data = req.body // {sales: "1200"}
//     // let allBooks= await BookModel.updateMany( 
//     //     { author: "SK"} , //condition
//     //     { $set: data } //update in data
//     //  )
//     let allBooks= await BookModel.findOneAndUpdate( 
//         { authorName: "ABC"} , //condition
//         { $set: data }, //update in data
//         { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
//      )

//      res.send( { msg: allBooks})
// }

// const deleteBooks= async function (req, res) {
//     // let data = req.body 
//     let allBooks= await BookModel.updateMany( 
//         { authorName: "FI"} , //condition
//         { $set: {isDeleted: true} }, //update in data
//         { new: true } ,
//      )

//      res.send( { msg: allBooks})
// }


// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE

// ----------------------------       ASSIGNMENT -17th august      --------------------------

const authorCollection = async function (req, res) {
    let data = req.body

    let savedData = await authorModel.create(data)
    return res.send({ msg: savedData })
}

const bookCollection = async function (req, res) {
    let datab = req.body

    let savedDatab = await BookModel.create(datab)
    return res.send({ msg: savedDatab })
}

const byAuthor = async function (req, res) {
    let name1 = await BookModel.find({ authorName:  "Chetan Bhagat" , author_id : 1 })
    return res.send({ msg: name1 })
}

const twoStates = async function (req, res) {
    let newname = await BookModel.findOneAndUpdate({ name:  "Two states"}, {$set : {price :100}}, {new : true})
   let value = newname.author_id
   let price = newname.price
   console.log(value)
    let result = await authorModel.find( {author_id :value}).select({authorName :1 , price :1})
    return res.send({ msg: result,price })
}

const bookCost = async function (req,res) {
    let value = await BookModel.find({ price :{ $gte :50}, price : {$lte :100}}).select({author_id :1})
    
    let result = value.map( alldata => alldata.author_id)
    let finalresult = await authorModel.find({author_id : result}).select({authorName :1, _id :0})
    res.send({msg : finalresult})
}




module.exports.authorCollection = authorCollection
module.exports.bookCollection = bookCollection
module.exports.byAuthor = byAuthor
module.exports.twoStates = twoStates
module.exports.bookCost = bookCost





// module.exports.getBooksData= getBooksData
// module.exports.updateBooks= updateBooks
// module.exports.deleteBooks= deleteBooks

// -------book price -------------
// let value2= value.author_id;
    // console.log(value2)
    // let result = await authorModel.find({author_id : value2}).select({authorName :1})