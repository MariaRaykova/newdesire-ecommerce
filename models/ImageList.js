const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, ObjectId } = Schema.Types;

const imageListSchema = new Schema(
  {
    url: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    productId: {
      type: String
    },
  },
  {
    timestamps: {
      createdAt: "created_at"
    }
  }
);

module.exports = new Model("ImageList", imageListSchema);
