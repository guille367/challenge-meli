import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { AppError } from "@shared/AppError";

class ItemsController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      return res.status(StatusCodes.OK).send("todo okkk");
    } catch (error) {
      throw new AppError(error.message);
    }
  }

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      return res
        .status(StatusCodes.OK)
        .send(`todo okk, mas que okkk ${req.params.id}`);
    } catch (error) {
      throw new AppError(error.message);
    }
  }
}

export default new ItemsController();
