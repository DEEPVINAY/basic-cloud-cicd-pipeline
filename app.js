const express = require("express");
const app = express();

app.get("/", (req, res) => {
        res.send("New deployment triggered by Git push!");
});

app.listen(8080, () => {
    console.log("Server running on port 8080");
});