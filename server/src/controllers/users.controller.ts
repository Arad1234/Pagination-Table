import { Request, Response, NextFunction } from "express";
import axios, { AxiosResponse } from "axios";
import { BAD_REQUEST, OK, USERS_URL } from "../utils/constants";

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { page, limit, order } = req.query;
  try {
    const response: AxiosResponse = await axios.get(USERS_URL, {
      params: {},
    });
    const { data } = response;

    res.status(OK).json({ users: data });
  } catch (error: any) {
    res.status(BAD_REQUEST).json({ error: error });
  }
};
