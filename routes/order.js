const controllers = require("../controllers");
const router = require("express").Router();

router.get("/", controllers.order.get);
router.get("/:userId", controllers.order.getByUser);

router.post("/", controllers.order.post);

module.exports = router;
