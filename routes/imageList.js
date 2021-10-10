const controllers = require("../controllers");
const router = require("express").Router();


router.get("/", controllers.imageList.get);

router.post("/", controllers.imageList.post); 

router.put("/:id", controllers.imageList.put);

router.delete("/:id", controllers.imageList.delete);

module.exports = router;
