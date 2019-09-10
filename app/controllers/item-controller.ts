import { Request, Response } from "express";
import MongoCollection from "../config/mongo-collection";

const Items = new MongoCollection("items");

export const getItems = async (req: Request, res: Response) => {
  // Items.insert({ name: "Alaa Adel" }, res);

  // return Items.docs.find();
  let items = await Items.find({}, {}, res);

  return res.json(items);
};
