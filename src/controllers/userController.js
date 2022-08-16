const bookmodel = require("../models/bookmodel")
const UserModel= require("../models/userModel")

const createUser= async function (req, res) {
    let data= req.body
    console.log(data)
    let savedData= await UserModel.create(data)
   
    res.send({data: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

const createbook = async function (req,res){
    let books = req.body 
    let newBook = await bookmodel.create (books)
    res.send({msg : newBook})
}

const getbooks = async function(req ,res ){
    let allBooks = await bookmodel.find()
    res.send({ msg : allBooks})
}


module.exports.createbook = createbook
module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.getbooks = getbooks