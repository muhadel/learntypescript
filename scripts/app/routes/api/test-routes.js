"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var expres = require("express");
// test controller
var item_controller_1 = require("../../controllers/item-controller");
var router = expres.Router();
// @route   /api/superadmin/client
// @desc    add client
// @access  Public
router.route("/items").get(item_controller_1.getItems);
module.exports = router;
