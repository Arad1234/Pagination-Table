import express from "express";
import {
  deletePostHandler,
  getPostsHandler,
} from "../controllers/posts.controller";

const router = express.Router();

router.get("/posts", getPostsHandler);
router.delete("/posts/:postId", deletePostHandler);

export default router;
