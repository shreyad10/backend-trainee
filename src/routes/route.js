const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const auth = require("../middlewares/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end

// ------------------ ASSIGNMENT 26TH AUGUST (AUTHENTICATION) ---------------------------------------


router.get("/users/:userId", auth.validate, auth.createtoken ,auth.verifyToken,userController.getUserData)

router.put("/users/:userId",auth.validate, auth.createtoken, auth.verifyToken,userController.updateUser)

router.put("/deleteusers/:userId",auth.validate, auth.createtoken ,auth.verifyToken,userController.deleteUser)


module.exports = router;