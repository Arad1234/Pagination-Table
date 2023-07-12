import express from "express";
import { getUsersHandler } from "../controllers/users.controller";
import validateResource from "../middlewares/validateResource";
import { userPaginationSchema } from "../schemas/users.schema";

const router = express.Router();

// using "zod" to validate the query sent in the request with the validateResource middleware.
router.get("/users", validateResource(userPaginationSchema), getUsersHandler);

export default router;
