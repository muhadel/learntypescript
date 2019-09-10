/* global require */
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import path from "path";
// import mongoose from "mongoose";

//Routes
import itemRoutes from "./routes/api/item-routes";

// Files
import { NODE_PORT, HOST } from "./config/keys";
// Create a new express application instance
const app: express.Application = express();
//Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//Middlewares
app.use(cors());
app.use(helmet());
app.use(compression());
// Configure Express to serve static files in the public folder
app.use(express.static(path.join(__dirname, "public")));

// Mongoose Connection
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
    NODE_PORT
  });
});
// Use Routes
app.use("/api/items", itemRoutes);
// Start the HTTP server listening for connections
app.listen(NODE_PORT, function() {
  console.log(`Server Running on http://${HOST}:${NODE_PORT}`);
});
