const mongoose = require("mongoose");
const listSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    user: [
        {
            type: mongoose.Types.ObjectId,
            ref: "User"
        }
    ]
},
    { timestamps: true } //automatically add two fields to each document: createdAt and updatedAt. These fields store the date and time when the document was created and when it was last updated, respectively.
)

module.exports = mongoose.model("List", listSchema)//here "List" should be same as the ref of userModel