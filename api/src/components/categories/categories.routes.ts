import { Router } from "express";

import catchAsync from "@shared/catchAsync";
import { withAuthor } from "@shared/middleWares";
import CategoriesController from "./categories.controller";

const categoriesController = new CategoriesController();

const router = Router();

router.get("/:id", withAuthor, catchAsync(categoriesController.getById));

export default router;
