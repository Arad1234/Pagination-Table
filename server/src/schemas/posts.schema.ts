import { object, string } from "zod";

export const fetchPostsSchema = object({
  query: object({
    userId: string(),
  }),
});
