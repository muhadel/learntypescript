/* global require */
import express = require("express");
// import mongoose = require("mongoose");

//Routes
import itemRoutes from "./routes/api/item-routes";

// Files
import { MONGO_URI, MONGODB_CONFIG, PORT, HOST } from "./config/keys";
// Create a new express application instance
const app: express.Application = express();
// MongoDB Connection
// mongoose
//   .connect(MONGO_URI, MONGODB_CONFIG)
//   .then(() => {
//     console.log("MongoDB connected");
//   })
//   .catch(err => {
//     console.log("DB Error", err);
//   });

app.get("/", function(req, res) {
  res.send("Hello World!");
});
//Use Routes
app.use("/api/items", itemRoutes);

app.listen(PORT, function() {
  console.log(`Server Running on http://${HOST}:${PORT}`);
});
