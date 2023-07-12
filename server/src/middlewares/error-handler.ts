import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { INTERNAL_SERVER_ERROR } from "../utils/constants";

export const errorHandler = (
  error: ErrorRequestHandler,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(INTERNAL_SERVER_ERROR).json({ error: error });
};
