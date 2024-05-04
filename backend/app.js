const express = require("express");
const app = express();
const authRoute = require("./routes/authRoute")
const listRoute = require("./routes/listRoute")
require("./connection/connection")
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Todo")
})


app.use("/api/v1", authRoute)
app.use("/api/v1", listRoute)

app.listen(3000, () => {
    console.log(`Server is running at http://localhost:3000`);
})