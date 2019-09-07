import MongoCollection from "../config/mongo-collection";

const Items = new MongoCollection("items");

export const getItems = async (req: any, res: any) => {
  // Items.insert({ name: "Alaa Adel" }, res);

  console.log("getItems");
  // return Items.docs.find();
  let items = await Items.find({}, {}, res);

  return res.json(items);
};
