const express = require('express');
const _ = require('underscore')
const lodash  = require('lodash')
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
    const arr = ["jan", "feb", "mar", "april", "may", "june", "july", "aug", "sept", "oct", "nov", "dec"]
    let ans = _.chunk(arr , 3)
    console.log(ans)
    const num = [1,3,5,7,9,11,13,15,17,19]
    let ans2 = lodash.tail(num)
    console.log(ans2)
    const dup1 =[1,2,3]
    const dup2 = [2,3,5]
    const dup3= [4,5,7]
    const dup4 = [6,7,8]
    const dup5 = [8, 4 ,5]
    let  dupS = _.union(dup1, dup2,dup3, dup4, dup5);
    console.log(dupS)
    let pairs =  [['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']]
    let obj = lodash.fromPairs(pairs)
    console.log(pairs)
    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason