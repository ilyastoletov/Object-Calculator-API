import mongoose from "mongoose";

const categoriesSchema = new mongoose.Schema({
    name: {type: String, required: true},
    categoryId: {type: Number, required: true},
    sub_categories: [{type: {categoryId: Number, name: String}, required: false, default: []}],
    products: [{type: {name: String, price: Number, quantity: Number}, required: false, default: []}]
});

export const CategoriesModel = mongoose.model('categories', categoriesSchema);