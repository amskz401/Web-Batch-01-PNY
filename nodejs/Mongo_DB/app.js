const express = require("express");

const app = new express();

app.get("/", (req, res) => {
    res.send("<h1>Data</h1>")
})

app.listen(4000);