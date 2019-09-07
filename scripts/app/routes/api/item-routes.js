"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var expres = require("express");
// items controller
var item_controller_1 = require("../../controllers/item-controller");
var router = expres.Router();
/**
 * Get Items from item controller
 * @route   /api/items/
 * @res {object} httpRes - Items Data.
 * @TODO - Get Items data.
 */
router.route("/").get(item_controller_1.getItems);
exports.default = router;
// module.exports = router;
