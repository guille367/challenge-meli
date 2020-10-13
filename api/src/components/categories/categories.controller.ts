import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { AppError } from "@shared/AppError";
import CategoriesService from "./categories.service";

class CategoriesController {
  itemsService: CategoriesService;
  constructor() {
    this.itemsService = new CategoriesService();
  }

  getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const data = await this.itemsService.getById(id);

      return res.status(StatusCodes.OK).send(data);
    } catch (error) {
      throw new AppError(error.message);
    }
  };
}

export default CategoriesController;
