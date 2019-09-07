import MongoCollection from "../config//mongo-collection";

const Items = new MongoCollection("items");

export const getItems = async (req: any, res: any) => {
  // Items.insert({ name: "Mohamed Adel" }, res);
  let items = await Items.find({}, {}, res);

  return res.json(items);
};
