const express = require("express")
const cors = require('cors');
const app = express()

app.use(cors({
    origin: '*'
}));
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(require("./src/routes/index"))


app.listen(8000)
