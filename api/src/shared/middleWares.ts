import { Request, Response, NextFunction } from "express";

export const withAuthor = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authorName: string | undefined = req.get("x-author-name") || "unknown";
  const authorLastName: string | undefined =
    req.get("x-author-lastname") || "unknown";
  // const authorLastName: string = req.headers.get("x-author-lastname");
  req.params.authorName = authorName;
  req.params.authorLastName = authorLastName;

  next();
};
