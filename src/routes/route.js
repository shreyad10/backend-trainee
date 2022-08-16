const express = require('express');
const router = express.Router();
const UserModel = require("../models/userModel.js")
const UserController = require("../controllers/userController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser)

router.get("/getUsersData", UserController.getUsersData)

router.post("/createbook", UserController.createbook)

router.get('/getbooks', UserController.getbooks)



// --------------------------------
let  persons = [
    {
        name: "vikram",
        age: 10,
        votingstatus: false
    },
    {
        name: "shyam",
        age: 20,
        votingstatus: false
    },
    {
        name: "prince",
        age: 70,
        votingstatus: false
    },
    {
        name: "Archna",
        age: 5,
        votingstatus: false
    },
    {
        name: "kumkum",
        age: 40,
        votingstatus: false
    }
]
// router.post("/persons/:Age", function(req,res){
//     let InputAge=req.params.Age
//     console.log(InputAge)
//    let person=[]
//     let flag =false
//   for(let i=0; i<persons.length; i++){
//      if(persons[i].age >=InputAge && InputAge >=18){
//        persons[i].votingstatus=true
//         person.push(persons[i])
//         flag =true
//      }
//   }
//      if(flag==true){
//     res.send({vall :"Eligible for voting", data : person, votingstatus :true})
//    }

//     for(let i=0; i<persons.length; i++){
//        if(persons[i].age <=InputAge && InputAge <=18){
//          persons[i].votingstatus=false
//           person.push(persons[i])
//        }
//     }   
//        if(flag == false){
//       res.send({val:"not eligible for voting", data : person, votingstatus :flag})
//    }

// })



// -----------------------11th August Poat API 2 Assignmnet ------------------------
router.post('/voting', function (req, res) {
    let age = req.query.age
    let arr = []
    for (let i = 0; i < persons.length; i++) {
        if (persons[i].age >= age) {
            persons[i].votingstatus = true
            arr.push(persons[i])
        }
    }
 if (arr.length == 0) {
    return res.send('No data to show.')
} else {
    return res.send(arr)
}
})

module.exports = router;