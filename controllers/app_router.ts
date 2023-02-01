import { FastifyInstance } from "fastify";
import { CategoriesModel } from "../models/category_model";
import { CreateCategory, IDParam } from "../models/request_models";

export const router = (app: FastifyInstance) => {

    // Creating category record
    app.post<{Body: CreateCategory}>("/create", async (req, res) => {
        try {
            const { name, categoryId, sub_categories, products } = req.body;
            const createdCategory = await CategoriesModel.create({name: name, categoryId: categoryId, sub_categories: sub_categories, products: products})
            res.code(200).send(createdCategory);
        } catch(e) {
            res.code(500).send(e)
        }
    });

    // Get All category objects
    app.get("/getAll", async (req, res) => {
        try {
            const allCategories = await CategoriesModel.find({});
            res.code(200).send(allCategories);
        } catch(e) {
            res.code(500).send(e);
        }
    });

    // Get category object by id
    app.get<{Querystring: IDParam}>("/getById", async (req, res) => {
        try {
            const categoryId = req.query.id;
            const findCategory = await CategoriesModel.find({categoryId: categoryId});
            res.code(200).send(findCategory)
        } catch(e) {
            res.code(500).send(e);
        }
    });

    // Delete
    app.delete<{Querystring: IDParam}>('/delete', async (req, res) => {
        try {
            const categoryId = req.query.id;
            const deletedCategory = await CategoriesModel.deleteOne({_id: categoryId});
            res.code(200).send(deletedCategory)
        } catch(e) {
            res.code(500).send(e);
        }
    });
}