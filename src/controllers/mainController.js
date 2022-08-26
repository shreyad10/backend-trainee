const orderModel = require('../models/orderModel')
const productModel = require('../models/productModel')
const userModel = require('../models/userModel')
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const createProduct = async function (req, res) {
    let data = req.body
    let savedData = await productModel.create(data)
    res.send({ msg: savedData })
}

const createUser = async function (req, res) {
    let data = req.body
    value = req.headers["isfreeappuser"]
    data.isfreeappuser = value
    let savedData = await userModel.create(data)
    res.send({ msg: savedData })
}

const createOrder = async function (req, res) {
    let data = req.body
    value = req.headers["isfreeappuser"]
    data.isFreeAppUser = value
    let userId = data.userId
    let productId = data.productId
    let isValid = mongoose.Types.ObjectId.isValid(userId)
    let isValidp = mongoose.Types.ObjectId.isValid(productId)
    if (!userId || !productId) {
        return res.send({ msg: "Enter author_id and product_id" })
    }
    if (isValid === false) {
        return res.send("Invalid length of user_id")
    } else if (isValidp === false) {
        return res.send("Invalid length of product_id ")
    }
    let result = await userModel.findById(userId)
    let result2 = await productModel.findById(productId)
    if (!result || !result2) {
        return res.send({ msg: "Enter valid user_Id or product_Id" })
    }

    // For making bill
    let value2 = req.headers["isfreeappuser"]
    if (value2 === 'true') {
        let total = await userModel.findOneAndUpdate({ isfreeappuser: value2 }, { $set: { amount: { $eq: 0 } }, new: true })
        let finalData = await orderModel.create(data)
        return res.send({ msg: finalData })
    }
    else if (value2 === 'false') {
        if (userId.balance >= productId.amount) {
            console.log(value2)
            let userBalance = userId.balance
            console.log(userBalance)
            let productPrice = productId.price
            let total = await userModel.findOneAndUpdate({ _id: userId }, { $set: { balance: userBalance - productPrice } })
            let finalData = await orderModel.create(data)
            return res.send({ msg: finalData })
           
        }
        else {
            return res.send({ msg: "You don't have sufficient balance!!!" })
           
        }
    }

}

const getOrderDetails = async function (req, res) {
    let allOrders = await orderModel.find().populate('userId').populate('productId')
    res.send({ data: allOrders })

}
module.exports.createProduct = createProduct
module.exports.createUser = createUser
module.exports.createOrder = createOrder
module.exports.getOrderDetails = getOrderDetails




