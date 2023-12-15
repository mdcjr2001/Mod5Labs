const express = require("express");
const router = express.Router();

const addController = require("../controllers/addController");
const subtractController = require("../controllers/subtractController");
const multiplyController = require("../controllers/multiplyController");
const divideController = require("../controllers/divideController");

router.get("/add", addController.add);
router.get("/subtract", subtractController.subtract);
router.get("/multiply", multiplyController.multiply);
router.get("/divide", divideController.divide);

module.exports = router;