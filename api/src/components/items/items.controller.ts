import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { AppError } from "@shared/AppError";
import itemsService from "./items.service";

class ItemsController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const query = req.query["q"]?.toString() || "";
      const data = await itemsService.search(query);
      debugger;

      return res.status(StatusCodes.OK).send(data);
    } catch (error) {
      throw new AppError(error.message);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await itemsService.getById(req.params["id"]);

      return res.status(StatusCodes.OK).send(data);
    } catch (error) {
      throw new AppError(error.message);
    }
  }
}

export default new ItemsController();
