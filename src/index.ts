import express from "express";
import rolesRouter from "./routes/roles";
import usersRouter from "./routes/users";
import authRouter from "./routes/auth";
import { authentication } from "./middlewares/authentication";
import productRouter from "./routes/products";
import orderRouter from "./routes/order";

const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(authentication)

app.use(rolesRouter);
app.use(usersRouter);
app.use(authRouter);
app.use(productRouter);
app.use(orderRouter);

app.listen(8888, () => {
    console.log('Server is running on port 8888')
})