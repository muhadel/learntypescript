const MONGO_URI =
  "mongodb://adel:adel11adel11@ds217078.mlab.com:17078/test_typescript";
const LOCAL_MONGO_URI = "mongodb://localhost:27017/test_typescript";
const MONGODB_CONFIG = {
  useNewUrlParser: true,
  autoReconnect: true,
  // useCreateIndex: true,
  // useFindAndModify: false,
  useUnifiedTopology: true
};
const MONGOOSE_CONFIG = { MONGO_URI, MONGODB_CONFIG };
const JwtSecret = "mysecret";
const NODE_PORT = process.env.NODE_PORT || 5001;
const HOST = process.env.HOST || "localhost";

export { MONGO_URI, MONGODB_CONFIG, JwtSecret, HOST, NODE_PORT };
