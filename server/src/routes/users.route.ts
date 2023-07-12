import express from "express";
import {
  getUsersHandler,
  countUsersHandler,
} from "../controllers/users.controller";

const router = express.Router();

router.get("/users", getUsersHandler);
router.get("/countUsers", countUsersHandler);

export default router;
