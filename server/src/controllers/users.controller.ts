import { Request, Response, NextFunction } from "express";
import axios, { AxiosResponse } from "axios";
import { BAD_REQUEST, OK, USERS_URL } from "../utils/constants";
import { serializeParams } from "../utils/helpers/serializeParams";
import { extractUserData } from "../utils/helpers/extractUserData";
import { getUsers } from "../services/users.service";
import { QueryParams } from "../../types";

export const getUsersHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { page, limit, order } = req.query;

  const queryParams = {
    page: Number(page),
    limit: Number(limit),
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
