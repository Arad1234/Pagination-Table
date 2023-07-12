import { Post, PrismaClient } from "@prisma/client";
import axios from "axios";
import { POSTS_URL } from "../utils/constants";
import { serializeParams } from "../utils/helpers/serializeParams";

const prisma = new PrismaClient();

export const getPosts = async (
  userId: string,
  page: string | number,
  limit: string | number
) => {
  try {
    const dbPosts = await prisma.post.findMany({
      skip: (Number(page) - 1) * Number(limit),
      take: Number(limit),
      where: { userId: Number(userId) },
    });

    if (dbPosts.length > 0) {
      return dbPosts;
    }

    const apiPosts = await axios.get(`${POSTS_URL}?userId=${userId}`, {
      params: { page: page, limit: limit },
      paramsSerializer: serializeParams,
    });
    const { data: posts } = apiPosts;

    await prisma.post.createMany({ data: posts });

    return posts;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const deletePost = async (postId: string) => {
  try {
    const deletedPost = await prisma.post.delete({
      where: { id: Number(postId) },
    });
    return deletedPost.id;
  } catch (error) {}
};
