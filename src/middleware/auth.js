const userModel = require("../models/userModel")
const jwt = require("jsonwebtoken");

const validate = async function (req, res, next) {
  //check the token in request header
  //validate this token
  let token = req.headers["x-auth-token"];
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  // console.log(user)
  if (!token) token = req.headers["x-auth-token"];

  //If no token is present in the request header return error
  if (!token) return res.send({ status: false, msg: "token must be present" })
  
  token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "thorium",
      organisation: "FUnctionUp",
    },
    "functionup-thorium"
  );
  res.setHeader("x-auth-token", token);
  next()
}


const authorise =async  function (req, res, next) {
  // comapre the logged in user's id and the id in request
  let token = req.headers["x-auth-token"]
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  let decodedToken = jwt.verify(token, "functionup-thorium");
  if (!decodedToken)
    return res.send({ status: false, msg: "token is invalid" });


  if (!user)
    return res.send({ status: false, msg: "No such user exists" });

  let userToBeModified = req.params.userId
  //userId for the logged-in user
  let userLoggedIn = decodedToken.userId

  //userId comparision to check if the logged-in user is requesting for their own data
  if (userToBeModified != userLoggedIn) return res.send({ status: false, msg: 'User logged is not allowed to modify the requested users data' })

  next()
}

module.exports.validate = validate
module.exports.authorise = authorise

