const express = require('express');
const myHelper = require('../util/helper')
const underscore = require('underscore');
const { application } = require('express');

const router = express.Router();

router.get('/test-me', function (req, res) {
    myHelper.printDate()
    myHelper.getCurrentMonth()
    myHelper.getCohortData()
    let firstElement = underscore.first(['Sabiha', 'Akash', 'Pritesh'])
    console.log('The first element received from underscope function is ' + firstElement)
    res.send('My first ever api!')
});

router.get("/movies/:indexNumber", function (req, res) {
    const movies = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"]
    console.log(req.params.indexNumber)
    let movieIndex = req.params.indexNumber
    //check index value. less than 0 or greater than array (length - 1) are not valid
    if (movieIndex < 0 || movieIndex >= movies.length) {
        //if the index is invalid send an error message
        return res.send('The index value is not correct, Please check the it')
    }

    //if the index was valid send the movie at that index in response
    let requiredMovie = movies[movieIndex]
    res.send(requiredMovie)
})

router.get("/shoes", function (req, res) {
    let queryParams = req.query
    let brand = queryParams.brand
    res.send("dummy response")
})

// uses query params
router.get('/candidates', function (req, res) {
    console.log('Query paramters for this request are ' + JSON.stringify(req.query))
    let gender = req.query.gender
    let state = req.query.state
    let district = req.query.district
    console.log('State is ' + state)
    console.log('Gender is ' + gender)
    console.log('District is ' + district)
    let candidates = ['Akash', 'Suman']
    res.send(candidates)
})

// use path param
router.get('/candidates/:canidatesName', function (req, res) {
    console.log('The request objects is ' + JSON.stringify(req.params))
    console.log('Candidates name is ' + req.params.canidatesName)
    res.send('Done')
})

router.get("/films", function (req, res) {
    const films = [{
        "id": 1,
        "name": "The Shining"
    }, {
        "id": 2,
        "name": "Incendies"
    }, {
        "id": 3,
        "name": "Rang de Basanti"
    }, {
        "id": 4,
        "name": "Finding Nemo"
    }]
    //send all the films
    res.send(films)
})

router.get("/films/:filmId", function (req, res) {
    const films = [{
        "id": 1,
        "name": "The Shining"
    }, {
        "id": 2,
        "name": "Incendies"
    }, {
        "id": 3,
        "name": "Rang de Basanti"
    }, {
        "id": 4,
        "name": "Finding Nemo"
    }]

    let filmId = req.params.filmId

    //iterate all the films
    //search for a film whose id matches with the id recevied in request
    for (let i = 0; i < films.length; i++) {
        let film = films[i]
        if (film.id == filmId) {
            //if there is a match return the response from here
            return res.send(film)
        }
    }

    //if there is no match give an error response
    res.send("The film id doesn't match any movie")
})


// this is my August 9 assignment 


router.get("/soll", function (req, res) {
    let arr = [1, 2, 3, 5, 6, 7]
    let sum = 0;
    for (i = 0; i <= arr.length - 1; i++) {
        sum = sum + arr[i]
    }
    console.log(sum)
    let lastd = arr.pop()
    console.log(lastd)
    let newsum = lastd * (lastd + 1) / 2
    let missingnum = newsum - sum

    res.send({ data: missingnum });
});

router.get("/sol2", function (req, res) {
    let arr = [33, 34, 35, 37, 38]
    let sum = 0;
    for (i = 0; i <= arr.length - 1; i++) {
        sum = sum + arr[i]
    }
    let firstDigit = arr[0]

    let consecutiveSum = (arr.length + 1) * (firstDigit + arr.pop()) / 2
    let missingNumber = consecutiveSum - sum
    res.send({ data: missingNumber });

})

let players =
    [
        {
            "name": "manish",
            "dob": "1/1/1995",
            "gender": "male",
            "city": "jalandhar",
            "sports": [
                "swimming"
            ]
        },
        {
            "name": "gopal",
            "dob": "1/09/1995",
            "gender": "male",
            "city": "delhi",
            "sports": [
                "soccer"
            ],
        },
        {
            "name": "lokesh",
            "dob": "1/1/1990",
            "gender": "male",
            "city": "mumbai",
            "sports": [
                "soccer"
            ],
        },
    ]
   router.post ("/players" , function (req ,res){
  let newplayer = req.body;
  let playername = newplayer.name;
  for (i=0; i<players.length ; i++)
  {
    if (players[i].name === playername)
    {
        res.send("Player already exist!!")
    }
    else {
        players.push(newplayer)
        console.log(players)
     res.send({data : players , status : true})
    }
  }
 
   })


//    10th august assignment problem 2nd

let persons =[
    {
        name :"Shreya",
        age : 21 ,
        votingStatus: true  
    },
    {
        name :"Shubham",
        age : 15,
        votingStatus: false  
    },
    {
        name :"Shivi",
        age : 55,
        votingStatus:false   
    },
    {
        name :"aditi",
        age : 22,
        votingStatus:  false 
    },
    {
        name :"Abhinav",
        age :8 ,
        votingStatus: false  
    }
]

router.get("/persons/:age", function(req, res){
    eligiblePersons =[];
    newage = req.query.age;
    for (i=0; i<= persons.length ;i++)
    {
        if( newage <= persons[i].age)
        {
            // console.log(persons[i].age)
            res.send ("not eligible")
        }
        eligiblePersons.push(persons[i])
        console.log(eligiblePersons)
        res.send("You are eligible for voting")
    }
   
})

module.exports = router;
// adding this comment for no reason
