const express = require('express');
const abc = require('../introduction/intro')
const greet = require('../logger/logger')
const x = require('../util/helper')
const z = require('../util/helper')
const y = require('../util/helper')
const format= require('../validator/formatter')
const format2 = require('../validator/formatter')
const format3 = require('../validator/formatter')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    greet.welcome()
    x.today
    y.batchinfo()
    z.month
    format.result
    format2.result2
    format3.result3
    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason