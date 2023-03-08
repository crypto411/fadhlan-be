const express = require("express")
const app = express()
const morgan = require("morgan")
app.use(morgan("dev"))
app.get("/", (req, res) => {
    res.status(200).json({
        message: `Hello ${req.query.name ? req.query.name : "World"}`
    })
})
app.listen("2030", () => {
    console.log("listening to port 2030")
})