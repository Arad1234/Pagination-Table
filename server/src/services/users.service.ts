import axios, { AxiosResponse } from "axios";
import { USERS_URL } from "../utils/constants";
import { serializeParams } from "../utils/helpers/serializeParams";
import { QueryParams } from "../../types";
import { extractUserData } from "../utils/helpers/extractUserData";

export const getUsers = async (queryParams: QueryParams) => {
  try {
    const response: AxiosResponse = await axios.get(USERS_URL, {
      params: queryParams,
      paramsSerializer: serializeParams,
    });
    const relevantUserData = extractUserData(response.data);

    return relevantUserData;
  } catch (error: any) {
    throw new Error(error);
  }
};
