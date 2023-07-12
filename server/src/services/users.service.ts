import axios, { AxiosResponse } from "axios";
import { USERS_URL } from "../utils/constants";
import { serializeParams } from "../utils/helpers/serializeParams";
import { QueryParams } from "../types";
import { extractUserData } from "../utils/helpers/extractUserData";

export const getUsers = async (queryParams: QueryParams) => {
  const { limit, order, page, sort } = queryParams;
  const limitNum = Number(limit);
  const pageNum = Number(page);
  try {
    const response: AxiosResponse = await axios.get(USERS_URL, {
      params: { order: order, sort: sort },
      paramsSerializer: serializeParams,
    });
    const users = response.data;

    const numOfPages = Math.ceil(users.length / limitNum);

    const hasNext = numOfPages > pageNum;

    const startIndex = limitNum * (pageNum - 1);
    const endIndex = limitNum * pageNum;

    const paginatedUsers = users.slice(startIndex, endIndex);

    const relevantUsersData = extractUserData(paginatedUsers);

    return { relevantUsersData, hasNext, numOfPages };
  } catch (error: any) {
    throw new Error(error);
  }
};
