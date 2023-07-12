import { NextFunction, Request, Response } from "express";
import { getPosts } from "../services/posts.service";
import { OK } from "../utils/constants";

export const getPostsHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { userId, page = 1, limit = 3000 } = req.query;
  try {
    const posts = await getPosts(
      userId as string,
      page as string | number,
      limit as string | number
    );

    res.status(OK).json({ posts: posts });
  } catch (error: any) {
    next(error);
  }
};
