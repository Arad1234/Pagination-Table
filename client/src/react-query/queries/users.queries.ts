import { useQuery } from "@tanstack/react-query";
import { fetchUsers, usersCount } from "../services/users.service";
import { PaginationParams } from "../../types";

export const fetchUsersQuery = (paginationParams: PaginationParams) => {
  return useQuery({
    // Whenever one of those parameters changes, the queryFn will be called again.
    queryKey: [paginationParams.order, paginationParams.page],
    queryFn: () => fetchUsers(paginationParams),
  });
};

export const usersCountQuery = () => {
  return useQuery({
    queryKey: ["usersCount"],
    queryFn: () => usersCount(),
  });
};
