import express from "express";
import { getPostsHandler } from "../controllers/posts.controller";

const router = express.Router();

router.get("/posts", getPostsHandler);

export default router;
