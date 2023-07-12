import { AxiosResponse } from "axios";
import axiosClient from "../../axiosClient";
import { Post } from "../../types";

export const fetchPosts = async (userId: number) => {
  try {
    const response: AxiosResponse = await axiosClient.get<Post[]>("/posts", {
      params: { userId: userId },
    });

    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const deletePost = async (postId: number) => {
  try {
    const response: AxiosResponse = await axiosClient.delete<string>(
      `/posts/${postId}`
    );
    return response.data;
  } catch (error: any) {
    throw new Error(error);
  }
};
