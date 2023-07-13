import express from "express";
import {
  deletePostHandler,
  getPostsHandler,
} from "../controllers/posts.controller";
import validateResource from "../middlewares/validateResource";
import { fetchPostsSchema } from "../schemas/posts.schema";

const router = express.Router();

router.get("/posts", validateResource(fetchPostsSchema), getPostsHandler);
router.delete("/posts/:postId", deletePostHandler);

export default router;
