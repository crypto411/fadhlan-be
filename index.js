const express = require("express")
const app = express()
const morgan = require("morgan")
app.use(morgan("dev"))
app.get("/", (req, res) => {
    res.status(200).json({
        message: `Hello ${req.query.name ? req.query.name : "World"}`
    })
})
const port = "2030"
app.listen(port, () => {
    console.log(`listening to port ${port}`)
})