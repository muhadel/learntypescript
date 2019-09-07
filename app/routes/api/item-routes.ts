import expres = require("express");

// items controller
import { getItems } from "../../controllers/item-controller";

const router = expres.Router();

/**
 * Get Items from item controller
 * @route   /api/items/
 * @res {object} httpRes - Items Data.
 * @TODO - Get Items data.
 */
router.route("/").get(getItems);

export default router;
// module.exports = router;
