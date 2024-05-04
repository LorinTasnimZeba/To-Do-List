const User = require("../models/userModel");
const List = require("../models/listModel");

const AddTask = async (req, res) => {
    try {
        const { title, body, email } = req.body;
        const existUser = await User.findOne({ email })
        if (existUser) {
            const list = new List({ title, body, user: existUser })
            await list.save().then(() => {
                res.status(200).json({ list })
            });
            existUser.list.push(list)
            existUser.save()
        }
        else
        {
            res.status(400).json({
                message: "Please LogIn first"
            })
        }
    } catch (error) {
        console.log(error)
    }

}

const updateTask = async (req, res) => {
    try {
        const { title, body, email } = req.body;
        const existUser = await User.findOne({ email })
        if (existUser) {
            const list = await List.findByIdAndUpdate(req.params.id, {title, body})
            list.save().then(()=>res.status(200).json({message: "Task updated"}))
        }
        else{
            res.status(400).json({
                message: "Please LogIn first"
            })
        }
    } catch (error) {
        console.log(error)
    }

}

const deleteTask = async (req, res) => {
    try {
        const { email } = req.body;
        const existUser = await User.findOneAndUpdate({ email },{ $pull: { list: req.params.id }})
        if (existUser) {
            const list = await List.findByIdAndDelete(req.params.id)
            .then(()=>res.status(200).json({message: "Task Deleted"}))
        }
        else{
            res.status(400).json({
                message: "Please LogIn first"
            })
        }
    } catch (error) {
        console.log(error)
    }

}

const getTask = async (req, res) => {
    try {
        const list = await List.find({ user: req.params.id }).sort({createdAt: -1})
        if(list.length != 0){
            res.status(200).json({list: list})
        }
        else{
            res.status(200).json({"message": "No Tasks"})
        }
    } catch (error) {
        console.log(error)
    }

}

module.exports = { AddTask, updateTask, deleteTask, getTask }