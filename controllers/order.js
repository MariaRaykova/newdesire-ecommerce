const models = require("../models");

module.exports = {
  get: (req, res, next) => {
    models.Order.find()
      .populate("product")
      .sort("-created_at")
      .then((orders) => {
        return res.send(orders);
      })
      .catch(next);
  },
  getByUser: (req, res, next) => {
    models.Order.find({ userId: req.params.userId })
    .populate("product")
      .then((orders) => {
        return res.send(orders);
      })
      .catch(next);
  },
  post: (req, res, next) => {
    const { email, name, phone, city, address, userId,  cartProducts, totalAmount } = req.body;
    models.Order.create({email, name, phone, city, address, userId, items: cartProducts, totalAmount})
      .then((createdOrder) => {
        res.send(createdOrder);
        if (userId !== "") {
          models.User.updateOne(
            { _id: userId },
            { $push: { orders: createdOrder } }
          );
        }
      })
      .catch(next);
  }
};
