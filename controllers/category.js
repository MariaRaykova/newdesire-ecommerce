const models = require("../models");
// const ReadPreference = require('mongodb').ReadPreference;
// require ('../config/database').connect;

// function get(req, res, next) {
//   const query = models.Category.find({}).read(ReadPreference.NEAREST);
//   query.exec().then(categories=>{
//     res.json(categories)
//   }).catch(err=>{
//     res.status(500).send(err);
//   })
// }
// function create(req, res, next){
//   const { name } = req.body;
//   const category = new Category({name})
//   category.save().then(()=>{
//     res.json();
//   }).catch(err=>{
//     res.status(500).send(err);
//   })
// }
// function update(req, res, next){
//   const { nameFromTheBody } = req.body;
//   models.Category.findOne({_id:req.params.id}).then((category)=>{
//     category.name = nameFromTheBody;
//     category.save().then(res.json(category));
//   }).catch(err=>{
//     res.status(500).send(err);
//   })
// }

// module.exports = {get, create, update};
// в routes:
// router.get('/category', function(req, res, next){
// controllers.category.get(req, res)
// })
// router.post('/category', function(req, res, next){
// controllers.category.crete(req, res)
// })
// module.exports = router;

module.exports = {
  get: (req, res, next) => {
    models.Category.find()
    .populate('products')
      .then((categories) => {
        return res.send(categories);
      })
      .catch(next);
  },

  getByName: (req, res, next) => {

    models.Category.findOne({name: req.params.name})
    .populate('product')
      .then((category) => {

        return res.send(category.products);
      })
      .catch(next);
  },
  post: (req, res, next) => {
    const { name } = req.body;
    models.Category.create({ name })
      .then((createdCategory) => {
        res.send(createdCategory);
      })
      .catch(next);
  },
  put: (req, res, next) => {
    const id = req.params.id;
    const { name } = req.body;
    models.Category.updateOne({ _id: id }, { name })
      .then((updatedProduct) => res.send(updatedProduct))
      .catch(next);
  },

  delete: (req, res, next) => {
    const id = req.params.id;
    models.Category.deleteOne({ _id: id })
      .then((removedCategory) => res.send(removedCategory))
      .catch(next);
  }
};
