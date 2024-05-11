const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    username: {
        type: String,
        //dunique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    list: [
        {
            type: mongoose.Types.ObjectId,
            ref: "List"
        }
    ]
})

userSchema.methods.generateToken = async function () {
    try{
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,

        },
        process.env.JWT_SECRET_KEY,
        {
            expiresIn: '1d'
        }
    )
    }catch(error){
        console.error(error)
    }
};

module.exports = mongoose.model("User", userSchema)