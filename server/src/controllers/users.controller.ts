import { Request, Response, NextFunction } from "express";
import { OK } from "../utils/constants";
import { getUsers, getUsersCount } from "../services/users.service";
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
    sort: "name",
  };
  console.log(queryParams);
  try {
    const relevantUserData = await getUsers(queryParams as QueryParams);

    res.status(OK).json({ users: relevantUserData });
  } catch (error: any) {
    next(error);
  }
};

export const countUsersHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const usersCount = await getUsersCount();
    // For some reason express does not allow me to send the response data as a number.
    res.status(OK).send(usersCount.toString());
  } catch (error) {
    next(error);
  }
};
