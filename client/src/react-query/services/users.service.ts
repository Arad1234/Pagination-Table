import { AxiosResponse } from "axios";
import axiosClient from "../../axiosClient";
import { PaginationParams } from "../../types";

export const fetchUsers = async (paginationParams: PaginationParams) => {
  const response: AxiosResponse = await axiosClient.get("/users", {
    params: paginationParams,
  });
  return response.data;
};
