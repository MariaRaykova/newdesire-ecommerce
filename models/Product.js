const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number,  ObjectId, Boolean } = Schema.Types;

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    images: [{
        type: String,
        required: true,
    }],
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    new: {
        type: Boolean,
    }
}, {
    timestamps: {
        createdAt: 'created_at'
    }
});

module.exports = new Model('Product', productSchema);