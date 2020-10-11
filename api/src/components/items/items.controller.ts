import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { AppError } from "@shared/AppError";
import ItemsService from "./items.service";

class ItemsController {
  itemsService: ItemsService;
  constructor() {
    this.itemsService = new ItemsService();
  }
  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const query = req.query["q"]?.toString() || "";
      const data = await this.itemsService.search(query);

      data.author = {
        name: req.params.authorName,
        lastname: req.params.authorLastName,
      };

      return res.status(StatusCodes.OK).send(data);
    } catch (error) {
      throw new AppError(error.message);
    }
  };

  getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const data = await this.itemsService.getById(id);

      data.author = {
        name: req.params.authorName,
        lastname: req.params.authorLastName,
      };

      return res.status(StatusCodes.OK).send(data);
    } catch (error) {
      throw new AppError(error.message);
    }
  };
}

export default ItemsController;
