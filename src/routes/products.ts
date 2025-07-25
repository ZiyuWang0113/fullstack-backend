import { Router } from "express";
import { createProduct, listProducts, getProduct } from "../controller/products";
import { authorization } from "../middlewares/authorization";
import { PERMISSIONS } from "../constants";

const router = Router();

router.post('/products', authorization([PERMISSIONS.PRODUCTS.EDIT]), createProduct);
router.get('/products', authorization([PERMISSIONS.PRODUCTS.READ]), listProducts);
router.get('/products/:id', authorization([PERMISSIONS.PRODUCTS.READ]), getProduct);

export default router;