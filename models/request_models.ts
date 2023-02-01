export type CreateCategory = {
    name: String,
    categoryId: Number,
    sub_categories?: {categoryId: Number, name: String}[],
    products?: {name: String, price: Number, quantity: Number}[]
}

export type IDParam = {
    id: Number|String
}