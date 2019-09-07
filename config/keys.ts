const MONGO_URI =
  "mongodb://adel:adel11adel11@ds217078.mlab.com:17078/test_typescript";
const LOCAL_MONGO_URI = "mongodb://localhost:27017/pos_development";
const MONGODB_CONFIG = {
  useNewUrlParser: true,
  autoReconnect: true,
  useCreateIndex: true,
  useFindAndModify: false
};
const MONGOOSE_CONFIG = { MONGO_URI, MONGODB_CONFIG };
const JwtSecret = "mysecret";
const PORT = process.env.PORT || 5001;
const HOST = process.env.HOST || "localhost";

export { MONGO_URI, MONGODB_CONFIG, JwtSecret, HOST, PORT };
