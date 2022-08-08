const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    logger.welcome()

    res.send('My second ever api!')
});

router.get('/students', function (req, res) {
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

router.get('/student-details/:name/:age', function (req, res) {
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use any ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request " + JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)

    let studentage = requestParams.age
    console.log('Age is ', studentage)
    res.send('This is my response')
})

router.get('/movies', function (req, res) {
    let movies = ['Lagaan', '3 idiots', 'Shershaah', 'drishyam']
    res.send(movies)
})

router.get('/movies/:indexNumber', function (req, res) {
    let requestParams2 = req.params.indexNumber

    console.log(requestParams2)
    let movies = ['Lagaan', '3 idiots', 'Shershaah', 'drishyam']

    if (requestParams2 > movies.length) {
        console.log('Invalid input')
        res.send('Invalid input')
    }

    else if (0 <= requestParams2 < movies.length) {
        console.log("Your movie :", movies[requestParams2]);
        res.send(movies[requestParams2]);

    }
})

// for (let i = 0; i <= movies.length - 1; i++) {

//     // console.log(requestParams2)

//     if (requestParams2 === i) {
//         return movies[i]
//     }
//     else {
//         console.log("no")
//     }
// }

router.get('/flims', function (req, res) {
    let flims = [{
        id: 1,
        naam: 'Qismat'
    }, {
        id: 2,
        naam: 'DDlJ'
    }, {
        id: 3,
        naam: 'Mr. India'
    }, {
        id: 4,
        naam: 'bhuj'
    }]

    res.send(flims)
})

router.get('/flims2/:flimId', function (req, res) {
    let requestParams3 = req.params.flimId
    let flims2 = [{
        id: 1,
        naam: 'Qismat'
    }, {
        id: 2,
        naam: 'DDlJ'
    }, {
        id: 3,
        naam: 'Mr. India'
    }, {
        id: 4,
        naam: 'bhuj'
    }]
    console.log(requestParams3)
    

    if (requestParams3 > flims2.length) {
        console.log('Invalid input')
        res.send('Invalid input')
    }

    else if (0 <= requestParams3 < flims2.length) {
        console.log("Your movie :", flims2[requestParams3]);
        res.send(flims2[requestParams3]);

    }
})

module.exports = router;