import expres = require("express");
import Validator from "../../utils/validator";
// items controller
import { getItems, addNewItem } from "../../controllers/item-controller";

const router = expres.Router();

/**
 * Get Items from item controller
 * @route   /api/items/
 * @res {object} httpRes - Items Data.
 * @TODO - Get Items data.
 */
router.route("/").get(getItems);

/**
 * POST Items from item controller
 * @route   /api/items/
 * @res {object} httpRes - Items Data.
 * @TODO - Add new items data.
 */
router.route("/").post(Validator.checkItem, addNewItem);

export default router;
// module.exports = router;
