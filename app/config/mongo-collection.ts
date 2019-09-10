/* global require process*/
import { MongoClient as mongo } from "mongodb";
import { sendNotFound, sendInternalError } from "../utils/handller-methods";
// Keys
import { MONGO_URI, MONGODB_CONFIG } from "./keys";

/** Class representing a Mongo collection. */
/* global module */
export default class MongoCollection {
  url: string;
  docs: any;
  /**
   * Creates a Mongo collection.
   * @param {string} url - The url of the Mongo database.
   * @param {string} collectionName - The name of the collection to work on.
   */
  constructor(collectionName: string) {
    /** @member {string} */
    this.url = MONGO_URI;

    mongo
      .connect(this.url, MONGODB_CONFIG)
      .then((client: any) => {
        this.docs = client.db(process.env.DB_NAME).collection(collectionName);
      })
      .catch((err: any) => {
        throw err;
      });
  }

  /**
   * Inserts a document into the Mongo collection.
   * @param {object} doc - The document to be inserted.
   * @param {object} httpRes - The http response to write over.
   * @TODO - Verify the data before insertion into DB.
   */
  insert(doc: any, httpRes: any) {
    this.docs
      .insertOne(doc)
      .then((result: any) => {
        httpRes.writeHead(200, { "Content-Type": "application/json" });
        httpRes.end(JSON.stringify(result.ops[0]));
      })
      .catch((err: any) => {
        sendInternalError(httpRes);
        throw err;
      });
  }

  /**
     * Finds documents into the Mongo collection.
     * @param {object} query - The query object to be run over the collection.
     * @param {object} project - The projection object to get specific fields.
     * @param {object} httpRes - The http response to write over.
     * @param {function} callback - The callback function to call with the find
      results, and any additional args.
     * @param {string} args - Additional argument to pass to the @param callback.
     */
  find(query: any, project: any, httpRes: any) {
    return new Promise((resolve, reject) => {
      this.docs
        .find(query)
        .project(project)
        .toArray()
        .then((result: any) => {
          resolve(result);
        })
        .catch((err: any) => {
          if (err) {
            sendInternalError(httpRes);
            reject(err);
          }
        });
    });
  }
  /**
   * Updates documents into the Mongo collection.
   * @param {object} query - The query object to be run over the collection.
   * @param {object} update - The update query to be applied.
   * @param {object} httpRes - The http response to write over.
   */
  update(query: any, update: any, httpRes: any) {
    this.docs
      .updateOne(query, update)
      .then((result: any) => {
        if (result.result.n === 0) {
          // # Matched docs === 0
          sendNotFound(httpRes);
        } else {
          httpRes.writeHead(204);
          httpRes.end();
        }
      })
      .catch((err: any) => {
        if (err) {
          sendInternalError(httpRes);
          throw err;
        }
      });
  }
}
