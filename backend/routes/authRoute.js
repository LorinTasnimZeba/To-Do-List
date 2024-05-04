const router = require("express").Router();
const {Register, Login} = require("../controllers/authcontroller")


//Sign up
router.post("/register", Register)


//Sign In
router.post("/login", Login)


module.exports = router;