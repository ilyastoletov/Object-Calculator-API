import Fastify from "fastify";
import mongoose from "mongoose";
import { router } from "./controllers/app_router";

const app = Fastify({logger: true});

try {
    mongoose.connect('mongodb://127.0.0.1:27017/categories')
    mongoose.set('debug', true)
} catch(e) {
    console.log(`MongoDB Error ${e}`)
}

router(app);

app.listen({port: 3000}, (err, address) => {
    if (err) {
        console.error(`Server not started with error ${err}`);
        process.exit(1);
    }

    app.log.info(`Server successfully started ad ${address}`)
})