"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MONGO_URI = "mongodb://adel:adel11adel11@ds217078.mlab.com:17078/test_typescript";
exports.MONGO_URI = MONGO_URI;
var LOCAL_MONGO_URI = "mongodb://localhost:27017/pos_development";
var MONGODB_CONFIG = {
    useNewUrlParser: true,
    autoReconnect: true,
    useCreateIndex: true,
    useFindAndModify: false
};
exports.MONGODB_CONFIG = MONGODB_CONFIG;
var MONGOOSE_CONFIG = { MONGO_URI: MONGO_URI, MONGODB_CONFIG: MONGODB_CONFIG };
var JwtSecret = "mysecret";
exports.JwtSecret = JwtSecret;
var PORT = process.env.PORT || 5001;
exports.PORT = PORT;
var HOST = process.env.HOST || "localhost";
exports.HOST = HOST;
