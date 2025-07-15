const express = require("express");
const path = require("path");
const port = 3000;

let app = express();
let publicPath = path.join(__dirname, "public")


app.get("/", function (req, res) {
    res.sendFile(publicPath + "/index.html")
});

app.listen(port)
console.log("Listening on port " + port)