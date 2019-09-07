"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* global require process*/
var handller_methods_1 = require("../utils/handller-methods");
// Keys
var keys_1 = require("./keys");
var mongo = require("mongodb").MongoClient;
/** Class representing a Mongo collection. */
/* global module */
var MongoCollection = /** @class */ (function () {
    /**
     * Creates a Mongo collection.
     * @param {string} url - The url of the Mongo database.
     * @param {string} collectionName - The name of the collection to work on.
     */
    function MongoCollection(collectionName) {
        var _this = this;
        /** @member {string} */
        this.url = keys_1.MONGO_URI;
        mongo
            .connect(this.url, keys_1.MONGODB_CONFIG)
            .then(function (client) {
            _this.docs = client.db(process.env.DB_NAME).collection(collectionName);
        })
            .catch(function (err) {
            throw err;
        });
    }
    /**
     * Inserts a document into the Mongo collection.
     * @param {object} doc - The document to be inserted.
     * @param {object} httpRes - The http response to write over.
     * @TODO - Verify the data before insertion into DB.
     */
    MongoCollection.prototype.insert = function (doc, httpRes) {
        this.docs
            .insertOne(doc)
            .then(function (result) {
            httpRes.writeHead(200, { "Content-Type": "application/json" });
            httpRes.end(JSON.stringify(result.ops[0]));
        })
            .catch(function (err) {
            handller_methods_1.sendInternalError(httpRes);
            throw err;
        });
    };
    /**
       * Finds documents into the Mongo collection.
       * @param {object} query - The query object to be run over the collection.
       * @param {object} project - The projection object to get specific fields.
       * @param {object} httpRes - The http response to write over.
       * @param {function} callback - The callback function to call with the find
        results, and any additional args.
       * @param {string} args - Additional argument to pass to the @param callback.
       */
    MongoCollection.prototype.find = function (query, project, httpRes) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.docs
                .find(query)
                .project(project)
                .toArray()
                .then(function (result) {
                resolve(result);
            })
                .catch(function (err) {
                if (err) {
                    handller_methods_1.sendInternalError(httpRes);
                    reject(err);
                }
            });
        });
    };
    /**
     * Updates documents into the Mongo collection.
     * @param {object} query - The query object to be run over the collection.
     * @param {object} update - The update query to be applied.
     * @param {object} httpRes - The http response to write over.
     */
    MongoCollection.prototype.update = function (query, update, httpRes) {
        this.docs
            .updateOne(query, update)
            .then(function (result) {
            if (result.result.n === 0) {
                // # Matched docs === 0
                handller_methods_1.sendNotFound(httpRes);
            }
            else {
                httpRes.writeHead(204);
                httpRes.end();
            }
        })
            .catch(function (err) {
            if (err) {
                handller_methods_1.sendInternalError(httpRes);
                throw err;
            }
        });
    };
    return MongoCollection;
}());
exports.default = MongoCollection;
