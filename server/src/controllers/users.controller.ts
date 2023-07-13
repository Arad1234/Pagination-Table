import { Request, Response, NextFunction } from "express";
import { OK } from "../utils/constants";
import { getUsers } from "../services/users.service";
import { QueryParams } from "../types";

export const getUsersHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { page, limit, order } = req.query;
  const queryParams = {
    page: page,
    limit: limit,
    order: order,
    sortBy: "name",
  };
  try {
    const { relevantUsersData, hasNext, numOfPages } = await getUsers(
      queryParams as QueryParams
    );

    res.status(OK).json({ users: relevantUsersData, hasNext, numOfPages });
  } catch (error: any) {
    next(error);
  }
};
