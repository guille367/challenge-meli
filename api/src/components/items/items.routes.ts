import { Router } from "express";

import ItemsController from "@components/items/items.controller";
import catchAsync from "@shared/catchAsync";
import { withAuthor } from "@shared/middleWares";

// Init shared
const router = Router();

router.get("/", withAuthor, catchAsync(ItemsController.getAll));

router.get("/:id", withAuthor, catchAsync(ItemsController.getById));

export default router;
