const models = require("../models");

module.exports = {
  get: (req, res, next) => {
    models.Product.find()
      .populate('category')
      .sort("-created_at")
      .then((products) => {
        return res.send(products);
      })
      .catch(next);
  },
  getOne: (req, res, next) => {
    const id = req.params.id;
    models.Product.find({ _id: id })
      .populate('category')
      .then((product) => {
        return res.send(product);
      })
      .catch(next);
  },
  getByCategory: (req, res, next) => {
    models.Product.find({ category: req.params.category })
      .populate('category')
      .then((products) => {
        return res.send(products);
      })
      .catch(next);
  },
  post: (req, res, next) => {
    const { name, description, imageUrl, selectedCategoryId, price, quantity } = req.body;
      models.Product.create({ name, description , images: imageUrl, price, quantity, category: selectedCategoryId })
      .then((createdProduct) => {
        models.Category.updateOne({ _id: selectedCategoryId }, { $push: { products: createdProduct } })
        res.send(createdProduct);
      }).catch(next);
  },
  postImage: (req, res, next) => {
   const {imageList, productId } = req.body;
    models.Product.updateOne({ _id: productId }, { $push: { images: { $each: imageList}}} )
    .then((updatedProduct) => res.send(updatedProduct))
    .catch(next)
  },
  put: (req, res, next) => {
    const { name, description, images, quantity, category, price, isNew } = req.body;
     const id = req.params.id
     const checkNew = isNew;
    models.Product.updateOne(
      { _id: id },
      { name, description, images, quantity,category, price, new: checkNew}
    ).then((updatedProduct) => {
      res.send(updatedProduct)
      if (checkNew){
        models.Category.updateOne(
          { _id: "6148af809dbc8e21bc808fca"}, 
          { $push: { products: id } }
          )
      }
    }).catch(next);
  },

  delete: (req, res, next) => {
    const id = req.params.id;
    models.Product.deleteOne({ _id: id })
      .then((removedProduct) => res.send(removedProduct))
      .catch(next);
  }
};
