import type { User } from "../../types/index";

export const extractUserData = (users: User[]) => {
  const relevantUserData = users.map((user: User) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      address: user.address,
    };
  });

  return relevantUserData;
};
