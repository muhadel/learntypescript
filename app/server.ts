/* global require */
import express = require("express");
import cors = require("cors");
import helmet = require("helmet");
import compression = require("compression");
import path = require("path");
// import mongoose = require("mongoose");

//Routes
import itemRoutes from "./routes/api/item-routes";

// Files
import { MONGO_URI, MONGODB_CONFIG, PORT, HOST } from "./config/keys";
// Create a new express application instance
const app: express.Application = express();
//Middlewares
app.use(cors());
app.use(helmet());
app.use(compression());
// Configure Express to serve static files in the public folder
app.use(express.static(path.join(__dirname, "public")));

// MongoDB Connection
// mongoose
//   .connect(MONGO_URI, MONGODB_CONFIG)
//   .then(() => {
//     console.log("MongoDB connected");
//   })
//   .catch(err => {
//     console.log("DB Error", err);
//   });

// Return server information
app.get("/", function(req, res) {
  res.send({
    done: true,
    HOST,
    PORT
  });
});
//Use Routes
app.use("/api/items", itemRoutes);
//Listening
app.listen(PORT, function() {
  console.log(`Server Running on http://${HOST}:${PORT}`);
});
