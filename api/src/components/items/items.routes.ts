import { Router } from "express";

import ItemsController from "@components/items/items.controller";
import catchAsync from "@shared/catchAsync";

// Init shared
const router = Router();

router.get("/", catchAsync(ItemsController.getAll));

router.get("/:id", catchAsync(ItemsController.getById));

export default router;
