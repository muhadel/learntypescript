"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* global require */
var express = require("express");
// import mongoose = require("mongoose");
//Routes
var item_routes_1 = __importDefault(require("./routes/api/item-routes"));
// Files
var keys_1 = require("./config/keys");
// Create a new express application instance
var app = express();
// MongoDB Connection
// mongoose
//   .connect(MONGO_URI, MONGODB_CONFIG)
//   .then(() => {
//     console.log("MongoDB connected");
//   })
//   .catch(err => {
//     console.log("DB Error", err);
//   });
app.get("/", function (req, res) {
    res.send("Hello World!");
});
//Use Routes
app.use("/api/items", item_routes_1.default);
app.listen(keys_1.PORT, function () {
    console.log("Server Running on http://" + keys_1.HOST + ":" + keys_1.PORT);
});
