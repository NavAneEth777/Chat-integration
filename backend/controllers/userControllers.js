const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const generateToken = require('../config/generateToken');

const registerUser = asyncHandler(async (req, res) => {
    const {name, email, password, pic} = req.body;
    if(!name || !email || !password){ // checking if the user is given a username, email, password and profile picture
        res.status(400);
        throw new Error("Please provide all the required fields");
    }

    //checking if the user is already registered
    const userExist = await User.findOne({ email });
    if(userExist) {
        res.status(400);
        throw new Error("user already exists");
    }
    const user = await User.create({
        name,
        email,
        password,
        pic,
    });
    if(user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToken(user._id),
        });
    } else {
        res.status(400);
        throw new Error("Failed to create the user");
    }
});

const authUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body;

    const user = await User.findOne({email}); // checking if the user is existing in our database
    if(user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            pic: user.pic,
            token: generateToken(user._id),
        });
    } else {
        res.status(401);
        throw new Error("invalid Email or Password");
    }
});

module.exports = {
    registerUser,
    authUser,
};