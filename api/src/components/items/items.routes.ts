import { Router } from "express";

import ItemsController from "@components/items/items.controller";
import catchAsync from "@shared/catchAsync";
import { withAuthor } from "@shared/middleWares";

const itemsController = new ItemsController();

// Init shared
const router = Router();

router.get("/", withAuthor, catchAsync(itemsController.getAll));

router.get("/:id", withAuthor, catchAsync(itemsController.getById));

export default router;
