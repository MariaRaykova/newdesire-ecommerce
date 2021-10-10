const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number } = Schema.Types;

const paymentSchema = new Schema(
  {
    amount:{
        type: Number,
      required: true,
    }, source:{
        type: String,
      required: true,
    },currency:{
        type: String,
      required: true,
    },
     amount:{
        type: Number,
      required: true,
    }
  },
  {
    timestamps: {
      createdAt: "created_at"
    }
  }
);

module.exports = new Model("Payment", paymentSchema);
