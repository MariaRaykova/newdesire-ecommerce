const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Object, Number} = Schema.Types;

const orderSchema = new Schema(
  {
    email: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    phone: {
      type: Number,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    userId: {
      type: String
    },
    totalAmount: {
      type: Number
    },
    items: [
      {
        product: {
          type: Object
        }, 
        count: {
          required: true,
          type: Number
        },
      },
    ],
  },
  {
    timestamps: {
      createdAt: "created_at"
    }
  }
);

module.exports = new Model("Order", orderSchema);
