
const controllers = require("../controllers");
const router = require("express").Router();

// router.get("/", controllers.payment.get);

router.post("/", controllers.payment.post);

module.exports = router;