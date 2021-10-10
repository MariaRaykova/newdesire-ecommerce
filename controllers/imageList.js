const models = require("../models");

module.exports = {
  get: (req, res, next) => {
    models.ImageList.find()
      .then((images) => {
        return res.send(images);
      })
      .catch(next);
  },
  post: (req, res, next) => {
    const { url, type} = req.body;
          models.ImageList.create({ url, type }).then((createdImage) => {
            res.send(createdImage);
          }).catch(next);
  },
  put: (req, res, next) => {
    const id = req.params.id;
    const { url, type, } = req.body;
    models.ImageList.updateOne({ _id: id }, { url, type, })
      .then((updatedImage) => res.send(updatedImage))
      .catch(next);
  },

  delete: (req, res, next) => {
    const id = req.params.id;
    models.ImageList.deleteOne({ _id: id })
      .then((removedImage) => res.send(removedImage))
      .catch(next);
  }
};
