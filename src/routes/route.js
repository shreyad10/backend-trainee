const express = require('express');
const router = express.Router();

const mainController= require("../controllers/mainController")

// const authorController= require("../controllers/authorController")
// const bookController= require("../controllers/bookController")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/createAuthor", authorController.createAuthor  )

// router.get("/getAuthorsData", authorController.getAuthorsData)

// router.post("/createBook", bookController.createBook  )

// router.get("/getBooksData", bookController.getBooksData)

// router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

// --------------------------  ASSIGNMENT   ----------------------------------

router.post("/createAuthor" , mainController.createAuthor)
router.post("/createPublisher" , mainController.createPublisher)
router.post("/createBook" , mainController.createBook)
router.get("/getBookAllDetails", mainController.getBookAllDetails)
router.put("/books", mainController.books)


module.exports = router;