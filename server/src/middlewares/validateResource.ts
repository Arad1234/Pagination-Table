import { Request, Response, NextFunction } from "express";
import { ZodSchema } from "zod";
import { BAD_REQUEST } from "../utils/constants";

const validateResource =
  (schema: ZodSchema) => (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({ query: req.query });
      next();
    } catch (error: any) {
      console.log(error);
      return res.status(BAD_REQUEST).json({ error: error });
    }
  };

export default validateResource;
