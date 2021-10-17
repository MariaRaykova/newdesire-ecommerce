const controllers = require('../controllers');
const router = require('express').Router();
const { auth }= require('../utils');

router.get('/', controllers.product.getSpec);
router.get('/:id', controllers.product.getOne);
router.get('/category/:category', controllers.product.getByCategory);

// router.get("/search", controllers.product.listSearch);

router.post('/', auth(), controllers.product.post);
router.post('/image', controllers.product.postImage);

router.put('/:id', auth(), controllers.product.put);

router.delete('/:id', auth(),  controllers.product.delete);

module.exports = router;