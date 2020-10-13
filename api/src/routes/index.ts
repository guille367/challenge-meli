import { Router } from "express";
import ItemsRouter from "@components/items/items.routes";
import CategoriesRoutes from "@components/categories/categories.routes";

const router = Router();

router.use("/items", ItemsRouter);
router.use("/categories", CategoriesRoutes);

export default router;
