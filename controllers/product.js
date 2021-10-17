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
  getSpec: (req, res, next) => {
    const category = req.query.category ? { category: req.query.category } : {};
    const searchKeyword = req.query.searchKeyword
      ? {
          name: {
            $regex: req.query.searchKeyword,
            $options: 'i',
          },
        }
      : {};
    const sortOrder = req.query.sortOrder
      ? req.query.sortOrder === 'lowest'
        ? { price: 1 }
        : { price: -1 }
      : { _id: -1 };
    models.Product.find({ ...category, ...searchKeyword }).sort(
      sortOrder
    ).then((product) => {
       console.log(product)
      return res.send(product);
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
      .then((products) => {
        console.log("products" +products)
        return res.send(products);
      })
      .catch(next);
  },
  // listSearch: (req, res, next) => {
  //   // create query object to hold search value and category value
  //   const query = {};
  //   console.log("req.query.search"+req.query.search)
  //   // assign search value to query.name
  //   if (req.query.search) {
  //       query.name = { $regex: req.query.search, $options: 'i' };
  //       console.log("query.name "+query.name )
  //       // assigne category value to query.category
  //       // if (req.query.category && req.query.category != 'All') {
  //       //     query.category = req.query.category;
  //       // }
  //       // find the product based on query object with 2 properties
  //       // search and category
  //       models.Product.find(query, (err, products))
  //         .then((products) => {
            
  //           return res.send(products);
  //         })
  //         .catch(next);
  //   }
  // },
  post: (req, res, next) => {
    const { name, description, imageUrl, selectedCategoryId,selectedCategoryName, price, quantity } = req.body;
      models.Product.create({ name, description , images: imageUrl, price, quantity, category: selectedCategoryName })
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
