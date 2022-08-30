const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const auth = require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",auth.validate,  userController.getUserData)
router.put("/users/:userId", auth.validate, userController.updateUser)
router.post("/users/:userId/posts", auth.validate, auth.authorise, userController.postMessage)

// router.delete('/users/:userId', userController.deleteUser)

module.exports = router;