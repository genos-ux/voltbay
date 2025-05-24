import { Router } from "express";
import { createProduct, deleteProduct, getProducts, getProduct, updateProduct } from "../controllers/product.js";

const router = Router();

router.get('/', getProducts);
router.post('/', createProduct);
router.get('/:id',getProduct);
router.put('/:id',updateProduct);
router.delete('/:id', deleteProduct);

export default router;