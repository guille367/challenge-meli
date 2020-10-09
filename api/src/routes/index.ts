import { Router } from "express";
import ItemsRouter from "@components/items/items.routes";

const router = Router();

router.use("/items", ItemsRouter);

export default router;
