import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../services/users.service";
import { PaginationParams } from "../../types";

export const fetchUsersQuery = (paginationParams: PaginationParams) => {
  return useQuery({
    // Whenever one of those parameters changes, the queryFn will be called again (invalidated).
    queryKey: [paginationParams.order, paginationParams.page],
    queryFn: () => fetchUsers(paginationParams),
  });
};
