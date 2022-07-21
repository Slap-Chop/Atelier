const express = require("express");
const path = require("path");
var compression = require('compression')


const app = express();

app.use(compression())

app.use(express.static(path.join(__dirname, "../dist")))

app.listen(8000)
console.log('listening on http://localhost:8000');