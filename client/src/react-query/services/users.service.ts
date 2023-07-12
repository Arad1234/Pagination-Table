import { AxiosResponse } from "axios";
import axiosClient from "../../axiosClient";
import { PaginationParams } from "../../types";

export const fetchUsers = async (paginationParams: PaginationParams) => {
  try {
    const response: AxiosResponse = await axiosClient.get("/users", {
      params: paginationParams,
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const usersCount = async () => {
  try {
    const response = await axiosClient.get("/countUsers");
    console.log(response);
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};
