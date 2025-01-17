const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    "name": {
        type: String,
        required: true
    },
    "price": {
        type: Number,
        required: true
    },
    "category": {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category"
    },
    "image": {
        type: String,
        required: true
    },
    "setllingUnit": {
        type: String,
        required: true
    },
    "availableQuantity": {
        type: Number,
        required: true
    },
    "store": {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Store"
    }
},
{
    timestamps: true
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;