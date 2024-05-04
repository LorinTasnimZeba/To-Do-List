const router = require("express").Router();
const { AddTask, updateTask, deleteTask, getTask } = require("../controllers/listController")


//Add task
router.post("/addTask", AddTask)

//Update Task
router.put("/updateTask/:id", updateTask)

//Delete Task
router.delete("/deleteTask/:id", deleteTask)

//Get Task
router.get("/getTasks/:id", getTask)

module.exports = router;