import { Request, Response } from "express";
import MongoCollection from "../config/mongo-collection";
import {
  sendBadReq,
  sendNotFound,
  sendInternalError
} from "../utils/handller-methods";
const hasProp = Object.prototype.hasOwnProperty;

const Items = new MongoCollection("items");

export const getItems = async (req: Request, res: Response) => {
  let items = await Items.find({}, {}, res);
  return res.json(items);
};

export const addNewItem = async (req: Request, res: Response) => {
  console.log("body", req.body);
  if (hasProp.call(req.body, "name")) {
    Items.insert({ name: req.body.name }, res);
  } else {
    sendBadReq(res);
  }
};
