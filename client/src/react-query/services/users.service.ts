import { AxiosResponse } from "axios";
import axiosClient from "../../axiosClient";
import { userData } from "../../types";

export const fetchUsers = async () => {
  const response: AxiosResponse = await axiosClient.get("/users");
  return response.data;
};
