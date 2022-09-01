const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (abcd, xyz) {
    //You can name the req, res objects anything.
    //but the first parameter is always the request 
    //the second parameter is always the response
    try {
        let data = abcd.body;
        let savedData = await userModel.create(data);
        console.log(abcd.newAtribute);
        xyz.send({ msg: savedData });
    }
    catch (error) {
        xyz.status(400).send({ msg: "BAD REQUEST" })
    }
};

const loginUser = async function (req, res) {
    try {
        let userName = req.body.emailId;
        let password = req.body.password;
        if (!userName || !password)
            throw res.send({ msg: "You have not entered emailId and password" })
        let user = await userModel.findOne({ emailId: userName, password: password });
        if (!user)
            throw res.send({
                status: false,
                msg: "username or the password is not corerct",
            });

        // Once the login is successful, create the jwt token with sign function
        // Sign function has 2 inputs:
        // Input 1 is the payload or the object containing data to be set in token
        // The decision about what data to put in token depends on the business requirement
        // Input 2 is the secret
        // The same secret will be used to decode tokens

        token = jwt.sign(
            {
                userId: user._id.toString(),
                batch: "thorium",
                organisation: "FUnctionUp",
            },
            "functionup-thorium"
        );
        res.setHeader("x-auth-token", token);
        res.send({ status: true, data: token });
    }
    catch (error) {
        return res.status(400).send({ msg: "BAD REQUEST" })
    }

};

const getUserData = async function (req, res) {


    // If a token is present then decode the token with verify function
    // verify takes two inputs:
    // Input 1 is the token to be decoded
    // Input 2 is the same secret with which the token was generated
    // Check the value of the decoded token yourself

    try {
        let userId = req.params.userId;
        let user = await userModel.findById(userId);

        res.send({ status: true, data: user });

    } catch (error) {
        res.status(401).send({ msg: "You are not logged in" })
    }
};

const updateUser = async function (req, res) {
    // Do the same steps here:
    // Check if the token is present
    // Check if the token present is a valid token
    // Return a different error message in both these cases
    try {
        let userId = req.params.userId;
        let user = await userModel.findById(userId);
        //Return an error if no user with the given id exists in the db
        if (!user) {
            return res.send("No such user exists");
        }
        let userData = req.body;
        let data = Object.keys(userData).length
        if (data == 0)
            throw res.send({ msg: "You have not entered any data to be updated" })
        let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
        res.send({ status: true, data: updatedUser });
    }
    catch (error) {
        res.status(402).send(error.message)
    }
};

const postMessage = async function (req, res) {
    let message = req.body.message
    // Check if the token is present
    // Check if the token present is a valid token
    // Return a different error message in both these cases

    //userId for which the request is made. In this case message to be posted.

    let user = await userModel.findById(req.params.userId)
    if (!user) return res.send({ status: false, msg: 'No such user exists' })

    let updatedPosts = user.posts
    //add the message to user's posts
    updatedPosts.push(message)
    let updatedUser = await userModel.findOneAndUpdate({ _id: user._id }, { posts: updatedPosts }, { new: true })

    //return the updated user document
    return res.send({ status: true, data: updatedUser })
}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.postMessage = postMessage
