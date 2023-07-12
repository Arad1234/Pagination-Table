import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../services/users.service";
import { userData } from "../../types";

export const fetchUsersQuery = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: () => fetchUsers(),
  });
};
