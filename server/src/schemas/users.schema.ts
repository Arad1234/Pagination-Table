import { literal, object, string, union } from "zod";

export const userPaginationSchema = object({
  query: object({
    page: string(),
    limit: literal("4"),
    order: union([literal("asc"), literal("desc")]),
  }),
});
