"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mongoose = require("mongoose");
// Files
var keys_1 = require("./config/keys");
// Create a new express application instance
var app = express();
// MongoDB Connection
mongoose
    .connect(keys_1.MONGO_URI, keys_1.MONGODB_CONFIG)
    .then(function () {
    console.log("MongoDB connected");
})
    .catch(function (err) {
    console.log("DB Error", err);
});
app.get("/", function (req, res) {
    res.send("Hello World!");
});
app.listen(keys_1.PORT, function () {
    console.log("Server Running on http://" + keys_1.HOST + ":" + keys_1.PORT);
});
