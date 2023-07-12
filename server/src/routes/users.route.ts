import express from "express";
import { getUsersHandler } from "../controllers/users.controller";

const router = express.Router();

router.get("/users", getUsersHandler);

export default router;
