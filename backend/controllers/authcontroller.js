const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

const Register = async(req, res) => {
    try{
        const {email, username, password} = req.body;
        const hashpassword = bcrypt.hashSync(password)
        const user = new User({
            email, username, password: hashpassword
        })
        await user.save().then(() => {
            res.status(200).json({
                user: user
            })
        })
    }catch(error){
        res.status(400).json({
            message: "User Already Exists"
        })
    }
}

const Login =  async(req, res) => {
    try{
        const user = await User.findOne({
            email: req.body.email
        })
        if(!user){
            res.status(400).json({
                message: "Please sign up first"
            })
        }

        const isPasswordCorrect = bcrypt.compareSync(req.body.password, user.password)
        if(!isPasswordCorrect){
            res.status(400).json({
                message: "Password is not correct"
            })
        }
        const {password, ...others} = user._doc;//password bade bakisob show korbe
        res.status(400).json({others})
    }catch(error){
        res.status(400).json({
            message: "User Already Exists"
        })
    }
}

module.exports = {Register, Login}